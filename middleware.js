import { NextResponse } from "next/server";

const env = process.env.NODE_ENV;
const isDev = env === "development";
const allowedHostInProduction = "yt1s.space";

export function middleware(request) {
  if (!isDev && request.headers.get("host") !== allowedHostInProduction) {
    return NextResponse.redirect(new URL("https://" + allowedHostInProduction));
  }
}
