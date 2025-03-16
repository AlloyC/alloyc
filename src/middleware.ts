import { NextResponse, type NextRequest } from "next/server";
import JustBuy from "../public/assets/json/justBuy.json";
import Fupps from "../public/assets/json/fupps.json";
import Music from "../public/assets/json/music.json";

export async function middleware(req: NextRequest) {
  // This didn't work 
//   const fetchData = async (endpoint: string) => {
//     console.log(
//       new URL(`/assets/json/${endpoint}`, req.nextUrl.origin).toString()
//     );

//     const response = await fetch(
//       new URL(`/assets/json/${endpoint}`, req.nextUrl.origin).toString()
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const data = await response.json();
//     return data;
//   };

  if (req.nextUrl.pathname === "/api/fupps") {
    // const data = await fetchData("fupps.json");
    return NextResponse.json(Fupps);
  } else if (req.nextUrl.pathname === "/api/just-buy") {
    // const data = await fetchData("justbuy.json");
    return NextResponse.json(JustBuy);
  } else if (req.nextUrl.pathname === "/api/music-web-app") {
    return NextResponse.json(Music);
  }

  return NextResponse.next();
}
