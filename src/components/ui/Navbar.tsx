"use client"

import Link from "next/link";
import {usePathname} from "next/navigation"
import { itemsNavbar } from "../../../data";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

import { MotionTransition } from "@/components/ui/transtion-components";

const Navbar = () => {
  const router = usePathname()
  const { language } = useLanguage()
  
  return (
    <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
    <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
            {itemsNavbar[language].map((item) => (
                <div
                    key={item.id}
                    className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-purple ${router === item.link && 'bg-purple'}`}
                    data-tooltip-target="tooltip-default">
                    <Link href={item.link}>{item.icon} </Link>
                </div>
            ))}
            <LanguageToggle />
        </div>
    </nav>
</MotionTransition>
  )
}

export default Navbar
