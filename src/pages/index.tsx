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
import MobileHeader from "@/components/MobileHeader";
import Container from "@/components/Container";

export default function Home() {
  return (
    <div>
      <div className="hidden md:block">
        <TopHeader />
      </div>

      <div className="block xl:hidden">
        <MobileHeader />
      </div>

      <div className="hidden xl:block">
        <Container>
          <Header />
        </Container>
      </div>

      <div className="w-full">
        <HomeTopSlider />
      </div>

      <Container className="flex flex-col py-[50px] md:py-[100px] xl:flex-row">
        <HomeAbout />
      </Container>

      <div className="relative py-[50px] md:py-[100px]">
        <HomeWorkFields />
      </div>

      <div className="relative py-[50px] md:py-[100px]">
        <HomeGreenHouseSolutions />
      </div>

      <div className="mx-auto max-w-[1728px] px-5 py-[50px] md:py-[100px] lg:px-[100px]">
        <HomeVideos />
      </div>

      <div className="mx-auto max-w-[1728px] px-5 py-[50px] md:block md:py-[100px] xl:px-[150px]">
        <HomeNews />
      </div>

      <div className="mx-auto max-w-[1728px] px-5 py-[50px] pt-[50px] xl:px-[150px]">
        <HomeDocuments />
      </div>

      <div className="my-32 hidden h-[1px] flex-grow bg-custom-red lg:block" />

      <div className="mx-auto mb-32 max-w-[1728px] px-5 xl:px-[150px]">
        <HomeLogos />
      </div>

      <Footer />
    </div>
  );
}
