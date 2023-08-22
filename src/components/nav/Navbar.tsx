import Link from "next/link"
import NavLink from "./NavLink"
import Image from "next/image"
import Hamburger from "./Hamburger";
import {routes} from "@/app/lib";

import "./Navbar.css";
import { RouteMeta, RoutePath } from "@/app/lib/types";
import { ReactNode } from "react";
import UpperFangs from "./UpperFangs";

export const Navbar = () => {
    return (
        <div className="relative flex flex-wrap items-center justify-between w-full py-10 md:py-5 px-4 text-lg text-white bg-black z-30">

            <Hamburger>
                {
                    populateNavLinks(routes, "nav-link-mobile", NavLink)
                }
            </Hamburger>

            <div className="nav-links-and-logo">
                <div className="logo-wrapper"></div>
                {
                    routes.map(route => 
                        <div className="nav-link-nonmobile">
                            <NavLink link={route.link}>
                                {
                                    route.name.charAt(0).toUpperCase() + route.name.slice(1)
                                }
                            </NavLink>
                        </div>
                    )
                }
            </div>
            
            <UpperFangs />
                              
        </div>
    )
}

const populateNavLinks = (routes: RouteMeta[], wrapperClass: string, LinkElement: React.FunctionComponent<any>): JSX.Element[] | ReactNode[] => {
    return routes.map(route => 
        <div className={wrapperClass}>
            <LinkElement link={route.link}>
                {
                    route.name.charAt(0).toUpperCase() + route.name.slice(1)
                }
            </LinkElement>
        </div>
    )
}
