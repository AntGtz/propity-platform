// app/api/auth/register/route.ts

import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { username, password, name, email, phone, entityId } =
      await request.json();

    const createUserResponse = await fetch("https://api.propity.mx/qa/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        username: username,
        firstName: name.split(" ")[0],
        lastName: name.split(" ")[1],
        phone: phone,
        email: email,
        dream: "",
        newPass: password,
        aboutMe: "",
        contact: {
          type: "personal",
          phone: phone,
          email: email,
          facebook: "",
          instagram: "",
          whatsapp: phone,
        },
      }),
    });

    const createUserData = await createUserResponse.json();
    console.log("createUser response:", createUserData);

    if (!createUserResponse.ok) {
      throw new Error(`HTTP error! status: ${createUserResponse.status}`);
    }

    const inserUserToTenant = await fetch(
      `https://api.propity.mx/qa/entities/${entityId}/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: email,
          parentId: "",
          role: "guide",
        }),
      }
    );

    const inserUserToTenantJson = await inserUserToTenant.json();
    console.log(
      JSON.stringify(inserUserToTenantJson) + "inserUserToTenantJson"
    );

    if (inserUserToTenant.ok) {
      return NextResponse.json(
        { message: "Usuario registrado con éxito" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Error al registrar usuario en la entidad" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error during user registration:", error);
    return NextResponse.json(
      { message: "Error al registrar usuario" },
      { status: 500 }
    );
  }
}
