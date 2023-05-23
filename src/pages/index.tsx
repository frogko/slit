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

      <div className="w-full">
        <HomeTopSlider />
      </div>

      <section className="mx-6 my-10 flex flex-col lg:mx-[150px] lg:my-[150px] lg:flex-row">
        <HomeAbout />
      </section>

      <section className="relative px-12 py-[60px] lg:px-[150px]">
        <HomeWorkFields />
      </section>

      <section className="relative px-12 py-20 lg:px-[250px]">
        <HomeGreenHouseSolutions />
      </section>

      <section className="mb-[50px] px-6 py-[75px] lg:px-[100px]">
        <HomeVideos />
      </section>

      <section className="hidden py-[50px] lg:block">
        <HomeNews />
      </section>

      <section className="px-6 pt-[50px] lg:px-[150px]">
        <HomeDocuments />
      </section>

      <div className="my-32 h-[1px] flex-grow bg-red" />

      <section className="mb-32 px-6 lg:px-[150px]">
        <HomeLogos />
      </section>

      <Footer />
    </div>
  );
}
