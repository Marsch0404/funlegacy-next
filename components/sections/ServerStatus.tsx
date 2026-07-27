"use client";

import { useCallback, useEffect, useState } from "react";

const serverAddress = "play.funlegacy.de";

type ServerStatusData = {
  online: boolean;
  playersOnline: number;
  playersMax: number;
  version: string;
  address: string;
};

export default function ServerStatus() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<ServerStatusData | null>(null);
  const [loading, setLoading] = useState(true);

  const loadServerStatus = useCallback(async () => {
    try {
      const response = await fetch("/api/server-status", {
        cache: "no-store",
      });

      const data = (await response.json()) as ServerStatusData;
      setStatus(data);
    } catch (error) {
      console.error("Serverstatus konnte nicht geladen werden:", error);

      setStatus({
        online: false,
        playersOnline: 0,
        playersMax: 0,
        version: "Unbekannt",
        address: serverAddress,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadServerStatus();

    const interval = window.setInterval(loadServerStatus, 60_000);

    return () => {
      window.clearInterval(interval);
    };
  }, [loadServerStatus]);

  async function copyServerAddress() {
    try {
      await navigator.clipboard.writeText(serverAddress);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  }

  const isOnline = status?.online ?? false;

  return (
    <section id="spielen" className="relative px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d141f] p-8 sm:p-10 lg:p-12">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-green-500/15 blur-[120px]" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold ${
                  loading
                    ? "border-white/10 bg-white/5 text-slate-300"
                    : isOnline
                      ? "border-green-400/20 bg-green-400/10 text-green-300"
                      : "border-red-400/20 bg-red-400/10 text-red-300"
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    loading
                      ? "animate-pulse bg-slate-400"
                      : isOnline
                        ? "bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.8)]"
                        : "bg-red-400"
                  }`}
                />

                {loading
                  ? "Status wird geladen"
                  : isOnline
                    ? "Server online"
                    : "Server offline"}
              </div>

              <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
                Bereit für dein nächstes Abenteuer?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                Verbinde dich mit FunLegacy und entdecke Fahrzeuge, Projekte,
                Events und eine Community, die Minecraft gemeinsam neu denkt.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-slate-500">Status</p>
                  <p
                    className={`mt-2 text-xl font-black ${
                      loading
                        ? "text-slate-300"
                        : isOnline
                          ? "text-green-400"
                          : "text-red-400"
                    }`}
                  >
                    {loading ? "Lädt …" : isOnline ? "Online" : "Offline"}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-slate-500">Spieler</p>
                  <p className="mt-2 text-xl font-black">
                    {loading
                      ? "–"
                      : isOnline
                        ? `${status?.playersOnline ?? 0} / ${
                            status?.playersMax ?? 0
                          }`
                        : "0"}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-slate-500">Version</p>
                  <p className="mt-2 text-xl font-black">
                    {loading ? "–" : status?.version ?? "Unbekannt"}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full rounded-[1.75rem] border border-white/10 bg-black/20 p-6 lg:w-[360px]">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
                Serveradresse
              </p>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="break-all text-xl font-black text-white">
                  {serverAddress}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Für Java und Bedrock
                </p>
              </div>

              <button
                type="button"
                onClick={copyServerAddress}
                className="mt-4 w-full rounded-2xl bg-green-500 px-5 py-4 font-black text-black transition hover:-translate-y-0.5 hover:bg-green-400"
              >
                {copied ? "IP kopiert ✓" : "Server-IP kopieren"}
              </button>

              <button
                type="button"
                onClick={loadServerStatus}
                disabled={loading}
                className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-bold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Status aktualisieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}