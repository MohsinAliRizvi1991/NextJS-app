"use client"
import Link from "next/link";
import './login.css';
import { usePathname } from "next/navigation";
export default function Layout({children}){
    const pathName= usePathname(); // this hook use for condition Layout ==>> is sy jis main humain kch nhe dkhna hai to use krnge.
    console.log(pathName);
    return(
    <div >
     {
        pathName !=="/login/loginTeacher" ?
        <ul className="login-menu">
        <li>
            <h4> Login Navbar</h4>
           </li>
        <li>
            <Link href="/login">Main Login</Link>
        </li>
        <li>
            <Link href="/login/loginStudent">Student Login</Link>
        </li>
        <li>
            <Link href="/login/loginTeacher">Teacher Login</Link>
        </li>
    </ul>
    :<Link href="/login">Goto Login Page</Link>
     } 
        {children}
    </div>
    )
}