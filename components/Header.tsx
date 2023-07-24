"use client"

import {twMerge} from "tailwind-merge";
import React from "react";
import {useRouter} from "next/navigation";
import {RxCaretLeft} from "react-icons/rx";

interface HeaderProps {
    children: React.ReactNode,
    className?: string,
}


const Header: React.FC<HeaderProps> = (
    {
        children,
        className
    }) => {
    const router = useRouter();

    const handleLogout = () => {
        // handle logout in the future
    }


    return (
        <div className={twMerge(`
            h-fit
            bg-gradient-to-b
            from-emerald-800
            p-6
        `, className)}>
            <div className='w-full mb-4 flex items-center justify-between'>
                <div className="hidden md:flex gap-x-2 items-center">
                    <button
                        className=' rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'>
                        <RxCaretLeft size={35} className='text-white'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header