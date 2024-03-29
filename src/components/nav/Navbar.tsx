//"use server"

import NavLink from "./NavLink"
import MobileNavMenu from "./MobileNavMenu";
import {routes} from "@/app/lib";
import { EndsWith, QuadPosition, RouteMeta } from "@/app/lib/types";
import { ReactNode } from "react";
import HalfJaw from "./HalfJaw";
import MainLogo from "../MainLogo";
import logoPic from "$/images/main-logo.png";
import Hamburger from "./Hamburger";
import "./Navbar.scss";

export const Navbar = ({height}: {height: EndsWith<"px">}) => {
    return (
        <div className='relative flex w-full h-24 bg-black text-white z-30 '>
            <div className='absolute top-4 left-4 sm:top-8 sm:left-8 w-[calc(100%-2rem)]  h-[calc(100%-2rem)]'>
                <MobileNavMenu Hamburger={<Hamburger />}
                    offsetLeft="1%"
                    offsetRight="2%"
                    offsetTop="-5%"
                >
                    {
                        populateNavLinks(routes, "nav-link-mobile", NavLink)
                    }
                </MobileNavMenu>
            </div>

            <div className='flex w-full'>
                {
                    createNavHalf(populateNavLinks, routes.slice(0, 2), NavLink, HalfJaw, "top-left")
                }

                <div className="w-48 h-[130%]">
                    <MainLogo src={logoPic} />                    
                </div>


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
                <div className="absolute -top-3 relative">
                    <Fangs position={fangsPosition} />   
                </div>
            </div>
        </div>
    )
}
