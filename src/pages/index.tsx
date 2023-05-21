import Image from "next/image";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import HomeTopSlider from "@/components/containers/HomeTopSlider";
import HomeAbout from "@/components/containers/HomeAbout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <main className={`${poppins.variable} mx-auto h-full max-w-[1728px]`}>
      <TopHeader />
      <Header />
      <HomeTopSlider />
      <HomeAbout />
    </main>
  );
}
