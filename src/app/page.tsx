import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
   return (
      <main className=" flex flex-col ">
         <Navbar />
         <div className="flex flex-col items-center justify-center w-full h-screen border-lime-100 border-2">
            <h1>Part 1</h1>
         </div>
         <div className="flex flex-col items-center justify-center w-full h-screen border-lime-100 border-2">
            <h1>Part 1</h1>
         </div>
      </main>
   );
}
