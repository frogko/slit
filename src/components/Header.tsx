import React, { useRef, useState } from "react";
import Logo from "./Logo";
import SearchIcon from "@/components/icons/SearchIcon";
import { RxChevronDown } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import MegaMenu from "@/components/MegaMenu";

type HeadItemProps = {
  text: string;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  showArrow?: boolean;
  url?: string;
};
const HeaderItem = ({
  text,
  isActive,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  showArrow = false,
  url,
}: HeadItemProps) => {
  const itemClass = `transition-all ${
    isActive
      ? "underline decoration-custom-red decoration-2 underline-offset-4"
      : ""
  } `;

  return (
    <div
      className="mr-4 flex h-full cursor-default flex-col justify-center font-medium"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center">
        {url ? (
          <Link className={itemClass} href={url}>
            {text}
          </Link>
        ) : (
          <span className={itemClass}>{text}</span>
        )}

        {showArrow && (
          <RxChevronDown
            className={`transition-transform duration-[450ms] ${
              isActive ? "!rotate-180" : ""
            } ml-2`}
          />
        )}
      </div>
    </div>
  );
};

const Header = ({ className }: { className?: string }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [hoveredItemKey, setHoveredItemKey] = useState("");
  const [hoveredHeaderItemKey, setHoveredHeaderItemKey] = useState("");

  const isHoveredRealTime = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  const handleOpenMenuOnMouseEnter = () => {
    isHoveredRealTime.current = true;
    setIsMenuOpened(true);
  };
  const handleCloseMenuOnMouseLeave = () => {
    isHoveredRealTime.current = false;

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (!isHoveredRealTime.current) {
        setIsMenuOpened(false);
      }
    }, 400);
  };

  return (
    <div
      className={`flex h-[113px] w-full justify-between bg-white lg:h-[150px] ${className}`}
    >
      <Link className="mr-[200px] flex flex-col justify-center" href="/">
        <Logo className="h-[65px] w-[250px]" />
      </Link>

      <div className="relative hidden flex-1 items-center justify-between text-[18px] lg:flex lg:pl-10 xl:px-0">
        <HeaderItem text="KURUMSAL" url="/corporate" />

        <HeaderItem
          text="ÜRÜN VE HİZMETLER"
          onMouseEnter={() => {
            handleOpenMenuOnMouseEnter();
            setHoveredHeaderItemKey("products");
          }}
          onMouseLeave={handleCloseMenuOnMouseLeave}
          showArrow
          isActive={hoveredHeaderItemKey === "products"}
        />

        <HeaderItem text="TEKNOLOJİ VE KALİTE" url="/technology" />

        <HeaderItem text="DÜNYA’DA SUPERLİT" />

        <HeaderItem
          text="İLETİŞİM"
          onMouseEnter={handleOpenMenuOnMouseEnter}
          onMouseLeave={handleCloseMenuOnMouseLeave}
        />

        <div className="flex items-center">
          <SearchIcon className="mb-[3px] leading-none" />
        </div>

        <AnimatePresence mode="sync">
          {isMenuOpened && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onMouseEnter={handleOpenMenuOnMouseEnter}
              onMouseLeave={handleCloseMenuOnMouseLeave}
              className="absolute left-0 top-[150px] z-20 h-[688px] w-full bg-white"
            >
              <MegaMenu
                hoveredItemKey={hoveredItemKey}
                setHoveredItemKey={setHoveredItemKey}
                onMenuClosed={() => setHoveredHeaderItemKey("")}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
