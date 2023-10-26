import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav className='max-container padding-container relative z-30 py-5'>
            <Link href="/">
                <Image src="/hilink-logo.svg" alt="logo" width={74} height={26}/>
                <ul className="hidden h-full gap-12 lg:flex">
                    l
                </ul>
            </Link>
        </nav>
	);
};

export default Navbar;
