import { NextResponse, type NextRequest } from "next/server";


function middleware(req: NextRequest) {
    // Fetch data from the server
    const fetchData = async (endpoint : string) => {
        const response = await fetch(`${req.nextUrl.origin}/assets/json/${endpoint}`);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
        
        return NextResponse.json(data);
    };

    if (req.nextUrl.pathname === "/api/fupps") {
        return fetchData('fupps.json');
    } else if (req.nextUrl.pathname === "/api/just-buy") {
        return fetchData("justbuy.json");
    }
  
    return NextResponse.next();
}

export default middleware;
