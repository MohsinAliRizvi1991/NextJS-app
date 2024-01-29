"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

function AboutStudent() {
    const router = useRouter();
    const navigate =(page)=>{
        router.push('/about/'+ page)
    }
  return (
    <div>
      <h1 className='heading'>About Student Page</h1>
      <br/><br/>
      <button onClick={()=>{navigate("/")}}>Goto About Page</button>
    </div>
  );
}

export default AboutStudent;
