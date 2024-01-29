import Link from "next/link";

export default function NotFound(){
    return(
        <div><h1>About Page Not Found</h1>
        <Link href="/about">Goto About Page</Link>
        </div>
    )
}