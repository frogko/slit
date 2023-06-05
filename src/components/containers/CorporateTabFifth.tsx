import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

type Props = {};

const hrTabs = [
  { name: "İK POLİKİTAMIZ", img: "/ik-politika.png", key: "hr-policy" },
  { name: "İŞ İLANLARI", img: "/is-ilanlari.png", key: "job-applications" },
  { name: "İŞ BAŞVURU FORMU", img: "/is-basvuru.png", key: "applying-jobs" },
];

const CorporateTabFifth = (props: Props) => {
  const router = useRouter();
  const subTab = router.query.activeTab?.[1];

  if (!subTab) {
    return <LandingTabs activeTab={router.query.activeTab?.[0]} />;
  }

  return (
    <div>
      {subTab === "hr-policy" && <HrPolicy />}
      {subTab === "job-applications" && <JobApplications />}
      {subTab === "applying-jobs" && <ApplyingJobs />}
    </div>
  );
};

const HrPolicy = () => <div>TEST1</div>;
const JobApplications = () => <div>TEST2</div>;
const ApplyingJobs = () => <div>TEST3</div>;

const LandingTabs = ({ activeTab }: { activeTab: string | undefined }) => (
  <div className="flex h-[625px] items-center">
    <div className="grid w-full select-none grid-cols-3 flex-wrap gap-x-12">
      {hrTabs.map((tab) => (
        <Link
          className="relative flex h-[338px] w-full items-center justify-center"
          href={`${activeTab}/${tab.key}`}
        >
          <p className="text-center text-custom-mds font-semibold uppercase text-custom-red">
            {tab.name}
          </p>
          <img src={tab.img} className="absolute h-full w-full grayscale" />
        </Link>
      ))}
    </div>
  </div>
);

export default CorporateTabFifth;
