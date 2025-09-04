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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
