"use client";

import { useEffect, useState } from "react";

type CopyServerAddressProps = {
  address?: string;
  label?: string;
  className?: string;
};

export default function CopyServerAddress({
  address = "play.funlegacy.de",
  label,
  className = "",
}: CopyServerAddressProps) {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  useEffect(() => {
    if (!copied && !copyFailed) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setCopied(false);
      setCopyFailed(false);
    }, 2000);

    return () => window.clearTimeout(timeout);
  }, [copied, copyFailed]);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(address);

      setCopyFailed(false);
      setCopied(true);
    } catch {
      try {
        const textArea = document.createElement("textarea");

        textArea.value = address;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.opacity = "0";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const successful = document.execCommand("copy");

        document.body.removeChild(textArea);

        if (!successful) {
          throw new Error("Kopieren fehlgeschlagen");
        }

        setCopyFailed(false);
        setCopied(true);
      } catch {
        setCopied(false);
        setCopyFailed(true);
      }
    }
  }

  return (
    <button
      type="button"
      onClick={copyAddress}
      aria-label={`${address} kopieren`}
      className={`group relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-xl border px-4 py-3 text-left backdrop-blur-xl transition duration-300 ${
        copied
          ? "border-emerald-300/30 bg-emerald-400/10 shadow-[0_0_30px_rgba(52,211,153,0.12)]"
          : copyFailed
            ? "border-red-300/30 bg-red-400/10"
            : "border-cyan-200/10 bg-slate-950/45 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-cyan-300/[0.07] hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
      } ${className}`}
    >
      <span className="absolute inset-0 translate-x-[-140%] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition duration-700 group-hover:translate-x-[140%]" />

      <span className="relative min-w-0">
        {label && (
          <span
            className={`mr-2 font-semibold ${
              copied
                ? "text-emerald-300"
                : copyFailed
                  ? "text-red-300"
                  : "text-cyan-300"
            }`}
          >
            {label}:
          </span>
        )}

        <span className="break-all text-slate-300">{address}</span>
      </span>

      <span
        className={`relative flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wider transition ${
          copied
            ? "text-emerald-300"
            : copyFailed
              ? "text-red-300"
              : "text-slate-500 group-hover:text-cyan-200"
        }`}
      >
        {copied ? (
          <>
            <CheckIcon className="h-4 w-4" />
            Kopiert
          </>
        ) : copyFailed ? (
          <>
            <WarningIcon className="h-4 w-4" />
            Fehler
          </>
        ) : (
          <>
            <CopyIcon className="h-4 w-4" />
            Kopieren
          </>
        )}
      </span>
    </button>
  );
}

type IconProps = {
  className?: string;
};

function CopyIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function WarningIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10.3 2.9 1.8 17a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 2.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}