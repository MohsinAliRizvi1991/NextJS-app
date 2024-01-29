import Link from "next/link";
import './about.css';
export default function Layout({children}){
    return(
    <div >
        <ul className="login-menu">
            <li>
                <h4> Login Navbar</h4>
               </li>
            <li>
                <Link href="/about">Main About</Link>
            </li>
            <li>
                <Link href="/about/aboutCollage">About Student</Link>
            </li>
            <li>
                <Link href="/about/aboutStudent">About Teacher</Link>
            </li>
        </ul>
        {children}
    </div>
    )
}