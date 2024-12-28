'use client';
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);


    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                        

                    </MenuItem>
                   
                </Link>
                <MenuItem setActive={setActive} active={active} item="Blogs">
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="About Us">
                        

                        </MenuItem>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">

                    </MenuItem>
                    
                </Link>
                <MenuItem setActive={setActive} active={active} item=" Sign In">
                        

                        </MenuItem>
            </Menu>
        </div>
    )
}
export default Navbar