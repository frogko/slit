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
import { ClientOnly } from "@/components/ClientOnly";

export default function Home() {
  return (
    <div>
      <ClientOnly>
        <div className="block lg:hidden">
          <MobileHeader />
        </div>
      </ClientOnly>

      <ClientOnly>
        <div className="hidden lg:block">
          <TopHeader />
          <div className="px-[75px] 2xl:px-[150px]">
            <Header />
          </div>
        </div>
      </ClientOnly>

      <Header className="hidden" />

      <div className="w-full">
        <HomeTopSlider />
      </div>
      <section className="my-10 flex flex-col px-5 lg:mx-[150px] lg:my-[150px] lg:flex-row">
        <HomeAbout />
      </section>
      <section className="relative py-[60px] lg:px-[150px]">
        <HomeWorkFields />
      </section>
      <section className="relative py-20 lg:px-[250px]">
        <HomeGreenHouseSolutions />
      </section>
      <section className="px-5 py-[60px] lg:mb-[50px] lg:px-[100px] lg:py-[75px]">
        <HomeVideos />
      </section>
      <section className="hidden py-[50px] lg:block">
        <HomeNews />
      </section>
      <section className="px-5 py-[50px] pt-[50px] lg:px-[150px]">
        <HomeDocuments />
      </section>
      <div className="my-32 hidden h-[1px] flex-grow bg-red lg:block" />
      <section className="mb-32 px-5 lg:px-[150px]">
        <HomeLogos />
      </section>
      <Footer />
    </div>
  );
}
