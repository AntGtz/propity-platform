// app/api/auth/register/route.ts

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    return NextResponse.json({ data: request });
  } catch (error) {
    return NextResponse.json(
      { error: `Error al registrar el usuario. ${error}` },
      { status: 500 },
    );
  }
}
