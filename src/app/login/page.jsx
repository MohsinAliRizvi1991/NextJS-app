"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Login() {
  const [color, setColor]=useState({backgroundColor:'green'})
    const router = useRouter();
    const navigate=(page)=>{
        router.push('/login/'+ page);
    }

    return (
      <div className="BG heading">
      <h1 className="heading" style={color}>Login Main Page</h1> 
        <br/><br/>
        <Link href="/">Goto Home Page</Link>
        <br/><br/>
        <button onClick={()=>{navigate("loginStudent")}}>GoTo LogIn Student Page</button>
        <br/><br/>
        <button onClick={()=>{navigate("loginTeacher")}}>GoTo LogIn Teacher Page</button>
        <br/><br/>
        <button onClick={()=>setColor({backgroundColor:"red"})}>Color Change</button>
      </div>
    );
  }
  
  export default Login;
  