// 'use client'

import Link from "next/link";
import styles from "./page.module.css";
export default function Home() {
  return(
    <main>
      <h1>Basic Routing | Make New page</h1>
      <Link href="/login"> Goto Login</Link><br/><br/>
      <Link href="/about"> Goto About</Link>
     
      
      </main>
  );
  }


// export default function Home() {
//   const [name, setname]=useState("Mohsin")
//   const apple=()=>{
//    setname("ALi")
//   }
//   return (
//     <main className={styles.main}>
//       {/* <User name="Mohsin" />
//       <User name="Ali" />
//       <User name="Rizvi" /> */}
//       <h1>Hello {name}</h1>
//       <button onClick={()=>apple()}>Click here</button>
//     </main>
//   );
// }

// const User = (props) => {
//   return <h2>My Name Is {props.name}</h2>;
// };

