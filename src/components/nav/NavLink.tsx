import { RouteName, RoutePath } from "@/app/lib/types";
import Link from "next/link";
import { ReactNode } from "react";

const NavLink = ({link, children}: {link: RoutePath, children: ReactNode}) => { 
    return (
        <div className="hidden sm:block">
            <Link href={link}>
                <div>
                    {children}
                </div>
            </Link>            
        </div>

    )
}

export default NavLink;