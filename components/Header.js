import Image from "next/image";
import HeaderItem from "./HeaderItem";

import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  UserIcon,
  SearchIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex sm:justify-between items-center flex-col sm:flex-row mx-5 mb-5 h-auto">
      <div className="flex flex-grow justify-evenly max-w-md mt-0 sm:mt-5">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VARIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        className="object-contain"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
