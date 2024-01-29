"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

function About() {
    const router = useRouter();
    const navigate=(page)=>{
        router.push('/about/'+ page);
    }

    return (
      <div className="BG1 heading">
      <h1 className="heading">About Main Page</h1> 
        <br/><br/>
        <Link href="/">Goto Home Page</Link>
        <br/><br/>
        <button onClick={()=>{navigate("aboutCollage")}}>GoTo About Collage Page</button>
        <br/><br/>
        <button onClick={()=>{navigate("aboutStudent")}}>GoTo About Student Page</button>
      </div>
    );
  }
  
  export default About;
  