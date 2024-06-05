
  import Link from "next/link";
import Productcart from "./components/Productcart";
  
  export default function Home() {
  return (
    <div>
      <h1>
        hello world

      </h1>
      <Link href = "./users">Users</Link>
      <Productcart/>
    </div>

  );
}
