import { cookies ,headers } from "next/headers";
import { title } from "process";

export async function GET( request: Request){
    const data = [{
        id:1,
        title:'T shirts'
    }];

    const cookieList = cookies();
    const tokenCookies = (await cookieList).get('authToken');
    console.log("tokenCookie",tokenCookies);
    return Response.json((data))
}
// export async function POST( request: Request){
//     const prod = await request.json();
   
//     const data = [{
//         id:1,
//         title:'T shirts',
//         prod: prod
//     }];
//     return Response.json((data))
// }
export async function POST(request: Request) {
    const prod = await request.json();



    const headerList = await headers();
    console.log("Authorization", headerList.get('Authorization'));
    
    
    const data = [{
        id: 1,
        title: 'T Shirt',
        prod: prod
    }];

    return Response.json({ data })
}