import Footer from "@/components/gallery/footer";
import Header from "@/components/gallery/header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    
  gsap.registerPlugin(ScrollTrigger, SplitText);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white overflow-x-hidden overflow-y-auto">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
