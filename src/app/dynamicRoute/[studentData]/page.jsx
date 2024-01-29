"use client"
import Link from "next/link";

export default function StudentData({params}) {
  return (
    <div>
    <h1>Student Details </h1>
    <h3>Name : {params.studentData}</h3>
    <Link href="/dynamicRoute">Goto Student List</Link>
    </div>
  );
}

