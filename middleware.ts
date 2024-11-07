import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth/auth";

export default auth((request: NextRequest) => {
  // Get the hostname from the request headers
  const hostname = request.headers.get("host") || "";
  // Split port from hostname
  const [host] = hostname.split(":");
  // Split subdomain from hostname
  const hostParts = host.split(".");

  let subdomain = null;
  if (hostParts.length > 1) {
    subdomain = hostParts[0];
  }

  if (!subdomain || subdomain === "www" || subdomain === "localhost") {
    return NextResponse.next();
  }

  // Create a new Headers object with the request headers
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-subdomain", subdomain);

  // Return the modified request headers
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
});

export const config = {
  matcher: "/:path*",
};
