import Link from "next/link"
import NavLink from "./NavLink"
import Image from "next/image"
import Hamburger from "./Hamburger";

export const Navbar = () => {
    return (
        <div className="relative flex flex-wrap items-center justify-between w-full py-10 md:py-5 px-4 text-lg text-white bg-black z-30">
            {/* <Image className="sm:hidden"
                src="/images/hamburger-stylized.png"
                alt="hamburger"
                width={32}
                height={32}
            /> */}
            <Hamburger />

            <NavLink link="/">
                Home
            </NavLink>

            <NavLink link="/news">
                News
            </NavLink>

            <NavLink link="/about">
                About
            </NavLink>

            <NavLink link="/contact">
                Contact
            </NavLink>
                              
        </div>
    )
}
