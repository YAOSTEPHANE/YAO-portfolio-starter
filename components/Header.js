//next image
import Image from "next/image";
//next link
import Link from "next/link";

//components
import Socials from '../components/Socials';


const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
      {/* logo */}
      
      <Link href={'/'}> 
      <Image src={'/logoberes.jpg'} 
      width={220}
       height={48}

      alt='' 
      property={true}
      className="rounded-full border border-accent/100 
      max-w-[120px] bg bg-white flex flex-col" />
      </Link>
      {/* Socials */}
      <Socials width={100} height={100} />
      </div>
    </div>
  </header>;
};

export default Header;
