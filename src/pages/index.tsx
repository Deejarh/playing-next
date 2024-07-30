import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <main> 
    <h1>landing page index.tx</h1>
    <Link className=" text-orange-400 underline" href={'/hello'}>hello</Link>
   </main>
  );
}
