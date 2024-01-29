"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

function AboutCollage() {
    const router = useRouter();
    const navigate =(page)=>{
        router.push('/about/'+ page)
    }
  return (
    <div>
      <h1 className='heading'>About Collage Page</h1>
      <br/><br/>
      <button onClick={()=>{navigate("/")}}>Goto About Page</button>
    </div>
  );
}

export default AboutCollage;
