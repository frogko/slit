import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import HomeTopSlider from "@/components/containers/HomeTopSlider";
import HomeAbout from "@/components/containers/HomeAbout";
import HomeWorkFields from "@/components/containers/HomeWorkFields";
import HomeGreenHouseSolutions from "@/components/containers/HomeGreenHouseSolutions";
import HomeVideos from "@/components/containers/HomeVideos";
import HomeNews from "@/components/containers/HomeNews";
import HomeDocuments from "@/components/containers/HomeDocuments";
import HomeLogos from "@/components/containers/HomeLogos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      <HomeTopSlider />
      <HomeAbout />
      <HomeWorkFields />
      <HomeGreenHouseSolutions />
      <HomeVideos />
      <HomeNews />
      <HomeDocuments />
      <HomeLogos />
      <Footer />
    </div>
  );
}
