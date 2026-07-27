import { NextResponse } from "next/server";

const serverAddress = "play.funlegacy.de";

type McStatusResponse = {
  online: boolean;
  host: string;
  port: number;
  players?: {
    online: number;
    max: number;
  };
  version?: {
    name_clean?: string;
  };
};

export async function GET() {
  try {
    const response = await fetch(
      `https://api.mcstatus.io/v2/status/java/${serverAddress}`,
      {
        next: {
          revalidate: 60,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Status-API antwortet mit ${response.status}`);
    }

    const data = (await response.json()) as McStatusResponse;

    return NextResponse.json({
      online: data.online,
      playersOnline: data.players?.online ?? 0,
      playersMax: data.players?.max ?? 0,
      version: data.version?.name_clean ?? "Unbekannt",
      address: serverAddress,
    });
  } catch (error) {
    console.error("Serverstatus konnte nicht geladen werden:", error);

    return NextResponse.json(
      {
        online: false,
        playersOnline: 0,
        playersMax: 0,
        version: "Unbekannt",
        address: serverAddress,
      },
      {
        status: 503,
      },
    );
  }
}