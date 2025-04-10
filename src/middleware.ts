import { NextResponse, type NextRequest } from "next/server";
import JustBuy from "../public/assets/json/justBuy.json";
import Fupps from "../public/assets/json/fupps.json";
import Music from "../public/assets/json/music.json";

export async function middleware(req: NextRequest) {
  // This didn't work
  // TODOs alot of reading no watching movie tomorrow no matter how bored I get
  // I did research on arduino and also learnt about FETs
  // All night reading made my day useless
  // Sunday I learnt more on mosfet enhancement mode and studied for test
  // wrote a bad test read abit with Divine
  // I don't kniw why i don't feel like reading today even though  I know the consequences of not reading. I will try to read alit before I sleep. 
  // I need a risk-reward system 
  // I created a routine that I plan to follow starting tomorrow
  // I followed my routine to a great extent today. although I swapped some hours routine but all in all. I made progress. 
  // What worked out was most of my morning routines. I had trouble assimilating in the morning though but later in the afternoon I started to assimilate better. I don't know for sure if my body had not fully woken up or I just not a early morning reader. I would try it out again tomorrow to see if I will assimilate better than I did today.
  // My breakfast was dependent on Raphaels room which was on in alignment with my schedule so I ended up taking something else for breakfast. I think I will stick to taking just bread and tea for breakfast so I don't have to depend on them. 
  // Once I go downstairs I usually down't want to comeback to being focused so I should have a timer when I go downstairs to trigger me back upstair. 
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
