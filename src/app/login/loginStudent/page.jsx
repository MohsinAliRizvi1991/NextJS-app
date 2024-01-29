
"use client"
import { useRouter } from "next/navigation";
function LoginStudent() {

    const router = useRouter();
    const navigate=(page)=>{
        router.push('/login/'+ page);
    }
    return (
      <div>
       <h1 className="heading">Login Student</h1> 
        <br/><br/>
         <button onClick={()=>{navigate("/")}}>GoTo LogIn Page</button>

      </div>
    );
  }

export default LoginStudent;