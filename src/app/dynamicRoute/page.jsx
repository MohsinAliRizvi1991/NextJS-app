import Link from "next/link";

function StudentList() {
    const Students=["Mohsin","Ali","Talha","Tahir","Ahsan"]
  return (
    <div>
      <ul>
        {Students.map((student, index)=>(

        <li key={index}>
             <Link href={`/dynamicRoute/${student}`}>{student}
            </Link>
        </li>
        ))}
      </ul>
    </div>

  );
}

export default StudentList;
