import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Matrix",
};
export default function AuthLayout({
   children, // will be a page or nested layout
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="h-screen bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat">
         <div className="h-screen bg-black/50">{children}</div>
      </div>
   );
}
