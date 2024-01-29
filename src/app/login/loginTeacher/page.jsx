"use client"
import { useRouter } from "next/navigation";
function LoginTeacher() {

    const router = useRouter();
    const navigate=(page)=>{
        router.push('/login/'+ page);
    }
    return (
      <div>
        <h1 className="heading">Login Teacher</h1> 
        <br/><br/>
        <h1></h1>
        <button onClick={()=>{navigate("/")}}>GoTo LogIn Page</button>

      </div>
    );
  }
  
  export default LoginTeacher;