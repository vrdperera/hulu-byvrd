import Image from 'next/image';
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';

// componnets
import HeaderItem from './headerItem';
import Nav from './nav';

export default function Header() {
  return (
    <section>
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRENDING" Icon={BadgeCheckIcon} />
          <HeaderItem title="VERIFIED" Icon={CollectionIcon} />
          <HeaderItem title="COLLECTIONS" Icon={LightningBoltIcon} />
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
        <Image
          src="https://www.hulu.com/static/hitch/s3/attachments/cktuo6pxqmxfp1v7c1norzsop-hulu-padding.png"
          alt="Hulu logo"
          width={220}
          height={72}
        />
      </header>

      <Nav />
    </section>
  );
}
