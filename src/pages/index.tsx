import HomeTopSlider from "@/components/containers/HomeTopSlider";
import HomeAbout from "@/components/containers/HomeAbout";
import HomeWorkFields from "@/components/containers/HomeWorkFields";
import HomeGreenHouseSolutions from "@/components/containers/HomeGreenHouseSolutions";
import HomeVideos from "@/components/containers/HomeVideos";
import HomeNews from "@/components/containers/HomeNews";
import HomeDocuments from "@/components/containers/HomeDocuments";
import HomeLogos from "@/components/containers/HomeLogos";
import Container from "@/components/Container";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
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

      <div className="mx-auto max-w-[1728px] py-[50px] md:py-[100px]">
        <HomeVideos />
      </div>

      <div className="mx-auto max-w-[1728px] px-5 py-[50px] md:block md:py-[100px] xl:px-[150px]">
        <HomeNews />
      </div>

      <div className="mx-auto mb-[50px] max-w-[1728px] px-5 md:mb-0 xl:px-[150px]">
        <HomeDocuments />
      </div>

      <div className="mt-[150px] hidden h-[1px] flex-grow bg-custom-red lg:block" />

      <div className="mx-auto max-w-[1728px] px-5 md:py-[100px] xl:px-[150px] xl:py-[150px]">
        <HomeLogos />
      </div>
    </Layout>
  );
}
