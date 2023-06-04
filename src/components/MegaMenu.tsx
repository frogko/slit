import React, { useEffect } from "react";
import { RxChevronRight, RxChevronDown } from "react-icons/rx";
import cx from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import ProduceIcon from "@/components/icons/ProduceIcon";
import UsageIcon from "@/components/icons/UsageIcon";
import PipeIcon from "@/components/icons/PipeIcon";
import BrochureIcon from "@/components/icons/BrochureIcon";
import MiniLogo from "@/components/icons/MiniLogo";

const dropdownItems = {
  corporate: null,
  products: [
    {
      key: "1",
      text: "CTP BORU",
      subItems: [
        {
          icon: <ProduceIcon />,
          text: "ÜRETİM TEKNOLOJİLERİMİZ",
          url: "/product/ctp-pipe",
        },
        {
          icon: <UsageIcon />,
          text: "KULLANIM ALANLARI VE AVANTAJLAR",
          url: "/product/ctp-pipe",
        },
        {
          icon: <PipeIcon />,
          text: "BORU ÇAPLARI VE TEKNİK ÖZELLİKLER",
          url: "/product/ctp-pipe",
        },
        {
          icon: <BrochureIcon />,
          text: "BROŞÜR VE DÖKÜMANLAR",
          url: "/product/ctp-pipe",
        },
      ],
    },

    {
      key: "2",
      text: "CTP MANŞON",
      subItems: [
        {
          icon: <MiniLogo />,
          text: "CTP FULL FACE MANŞON",
          url: "/product/ctp-manson",
        },
        {
          icon: <MiniLogo />,
          text: "CTP KAYAR MANŞON",
          url: "/product/ctp-manson",
        },
        {
          icon: <MiniLogo />,
          text: "CTP JACKING MANŞON",
          url: "/product/ctp-manson",
        },
        {
          icon: <BrochureIcon />,
          text: "BROŞÜR VE DÖKÜMANLAR",
          url: "/product/ctp-manson",
        },
      ],
    },

    {
      key: "3",
      text: "CTP MANHOL",
      subItems: [
        {
          icon: <MiniLogo />,
          text: "MANHOL MODELLERİ",
          url: "/product/ctp-manhol",
        },
        {
          icon: <MiniLogo />,
          text: "KULLANIM ALANLARI VE AVANTAJLAR",
          url: "/product/ctp-manhol",
        },
        {
          icon: <MiniLogo />,
          text: "TASARIM VE AKSESUARLAR",
          url: "/product/ctp-manhol",
        },
        {
          icon: <MiniLogo />,
          text: "DÖŞEME VE TEKNİK BİLGİLER",
          url: "/product/ctp-manhol",
        },
        {
          icon: <BrochureIcon />,
          text: "BROŞÜR VE DÖKÜMANLAR",
          url: "/product/ctp-manhol",
        },
      ],
    },

    {
      key: "4",
      text: "CTP TANK",
      subItems: [
        {
          icon: <MiniLogo />,
          text: "ÜRETİM TEKNOLOJİLERİMİZ",
          url: "/product/ctp-tank",
        },
        {
          icon: <MiniLogo />,
          text: "KULLANIM ALANLARI VE AVANTAJLAR",
          url: "/product/ctp-tank",
        },
        {
          icon: <MiniLogo />,
          text: "TASARIM VE AKSESUARLAR",
          url: "/product/ctp-tank",
        },
        {
          icon: <MiniLogo />,
          text: "DÖŞEME VE TEKNİK BİLGİLER",
          url: "/product/ctp-tank",
        },
        {
          icon: <BrochureIcon />,
          text: "BROŞÜR VE DÖKÜMANLAR",
          url: "/product/ctp-tank",
        },
      ],
    },

    {
      key: "5",
      text: "BAĞLANTI PARÇALARI",
      subItems: [
        {
          icon: <MiniLogo />,
          text: "TEE PARÇALARI",
          url: "/",
        },
        {
          icon: <MiniLogo />,
          text: "DİRSEKLER",
          url: "/",
        },
        {
          icon: <MiniLogo />,
          text: "FLANŞLAR",
          url: "/",
        },
        {
          icon: <MiniLogo />,
          text: "REDÜKSİYONLAR",
          url: "/",
        },
      ],
    },

    {
      key: "6",
      text: "ÖZEL UYGULAMALAR",
      subItems: [
        {
          icon: <MiniLogo />,
          text: "JACKING BORULARI",
          url: "/",
        },
        {
          icon: <MiniLogo />,
          text: "RELINING BORULARI",
          url: "/",
        },
        {
          icon: <MiniLogo />,
          text: "MARINE LUG®",
          url: "/",
        },
        {
          icon: <MiniLogo />,
          text: "DARK LINER CTP BORU",
          url: "/",
        },
      ],
    },
    {
      key: "7",
      text: "SÜPERVİZYON HİZMETİ",
      url: "/",
      subItems: [],
    },
  ],
};

type MegaMenuProps = {
  hoveredItemKey: string;
  setHoveredItemKey: (key: string) => void;
  onMenuClosed: () => void;
};

const MegaMenu = ({
  hoveredItemKey,
  setHoveredItemKey,
  onMenuClosed,
}: MegaMenuProps) => {
  useEffect(() => {
    return () => {
      onMenuClosed();
    };
  }, []);

  return (
    <div className="relative space-y-10 px-8 py-4">
      {Object.keys(dropdownItems).map((key) => {
        return dropdownItems[key]?.map((dropdownItem, index) => (
          <div>
            <AnimatePresence>
              <motion.div
                initial="hidden"
                animate="visible"
                custom={index}
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: (i) => ({
                    opacity: 1,
                    transition: {
                      delay: i * 0.12,
                    },
                  }),
                }}
              >
                <MegaMenuLeftItem
                  url={dropdownItem.url}
                  text={dropdownItem.text}
                  isActive={dropdownItem.key === hoveredItemKey}
                  onMouseEnter={() => setHoveredItemKey(dropdownItem.key)}
                  showArrow={!!dropdownItem.subItems.length}
                />
              </motion.div>

              {hoveredItemKey === dropdownItem.key && (
                <div className="absolute left-1/2 top-0 h-full w-1/2 border-l border-l-custom-red pl-8 pt-4 font-medium text-custom-gray23">
                  {dropdownItem.subItems.map((subItem) => (
                    <MegaMenuRightItem
                      key={subItem.url}
                      url={subItem.url}
                      icon={subItem.icon}
                      text={subItem.text}
                    />
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        ));
      })}
    </div>
  );
};

export default MegaMenu;

type MegaMenuRightItemProps = {
  icon: React.ReactNode;
  text: string;
  url: string;
};

const MegaMenuRightItem = ({ url, icon, text }: MegaMenuRightItemProps) => (
  <Link
    href={url}
    className="pointer mb-8 flex items-center text-custom-basex decoration-custom-red underline-offset-4 hover:underline"
  >
    <span className="mr-4 text-2xl">{icon}</span>
    {text}
  </Link>
);

interface MegaMenuLeftItemProps extends React.HTMLProps<HTMLDivElement> {
  isActive: boolean;
  text: string;
  url: string;
  showArrow: boolean;
}

const MegaMenuLeftItem = ({
  isActive,
  text,
  url,
  showArrow = true,
  ...props
}: MegaMenuLeftItemProps) => (
  <div
    {...props}
    className="flex w-1/2 items-center pr-8 text-custom-md font-medium text-custom-gray18"
  >
    {url ? (
      <Link className="block max-w-[180px]" href={url}>
        {text}
      </Link>
    ) : (
      <span
        className={`block max-w-[180px] ${
          isActive ? "text-custom-gray23" : ""
        }`}
      >
        {text}
      </span>
    )}

    {showArrow && (
      <div
        className={cx("ml-auto", {
          "rotate-180 text-custom-red transition-all": isActive,
        })}
      >
        <RxChevronRight className="text-custom-basex" />
      </div>
    )}
  </div>
);
