import Link from "next/link"
import NavLink from "./NavLink"
import Image from "next/image"
import Hamburger from "./Hamburger";
import {routes} from "@/app/lib";

import "./Navbar.css";
import { QuadPosition, RouteMeta, RoutePath } from "@/app/lib/types";
import { ReactNode } from "react";
import UpperFangs from "./UpperFangs";
import HalfJaw from "./HalfJaw";

export const Navbar = () => {
    return (
        //<div className="relative flex flex-wrap items-center justify-between w-full py-10 md:py-5 px-4 text-lg text-white bg-black z-30">
        <div className='relative flex w-full bg-black text-white z-30'>
            <div className='absolute top-4 left-4 sm:top-8 sm:left-8'>
                <Hamburger>
                    {
                        populateNavLinks(routes, "nav-link-mobile", NavLink)
                    }
                </Hamburger>
            </div>

            <div className='flex w-full'>
                {
                    createNavHalf(populateNavLinks, routes.slice(0, 2), NavLink, HalfJaw, "top-left")
                }
                <div className="logo-wrapper" />
                {
                    createNavHalf(populateNavLinks, routes.slice(2, 4), NavLink, HalfJaw, "top-right")
                }
            </div>
                            
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

const createNavHalf = (populateLinks: Function, halfRoutes: RouteMeta[], LinkElement: React.FunctionComponent<any>, Fangs: React.FunctionComponent<any>,fangsPosition: QuadPosition): JSX.Element | ReactNode => {
    return (
        <div className="flex flex-col justify-between w-2/5 h-full">
            <div className="flex items-center h-3/4">
                <div className="flex justify-around max-[640px]:hidden w-full">
                    {
                        populateLinks(halfRoutes, "nav-link-noonmobile", LinkElement)
                    } 
                </div>
                
            </div>
            <div className="relative flex justify-center h-1/4">
                <div className="absolute -top-4">
                    <Fangs position={fangsPosition} />   
                </div>
            </div>
        </div>
    )
}
