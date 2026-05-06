"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
   const getLinkStyle = (href: string) => {
        const isActive = pathname === href;
        return `px-4 py-1.5 text-[13px] font-bold uppercase transition-all duration-200 ${
            isActive 
            ? "bg-[#df2531] text-white rounded-sm" 
            : "text-black hover:text-[#df2531]"
        }`;
    };
    return (
        <nav className="bg-[#ffffff] text-[#000000] sticky top-0 z-50 px-6 lg:px-10 py-5 font-sans border-b border-[#ffffff]/10">
            <div className="flex items-center justify-between max-w-full mx-auto">

                {/* Logo  */}
                <Link href="/" className="group">
                <div className="font-black text-2xl tracking-tighter uppercase italic hover:text-[#df2531] transition-colors duration-300">
                    <Image src="/logo.png" alt="JDM" width={70} height={70} priority />
                </div>
                </Link>

                {/* Menu */}

                <div className="flex gap-10">
                    <Link href='/' className={getLinkStyle('/')}>Trang chủ</Link>
                    <Link href='/tintuc' className={getLinkStyle('/tintuc')}>Tin Tức</Link>
                    <Link href='/engine' className={getLinkStyle('/engine')}>Engine</Link>
                    <Link href='/sound' className={getLinkStyle('/sound')}>Sound</Link>
                    <Link href='/contact' className={getLinkStyle('/contact')}>Contact</Link>
                    <Link
                        href="/login"
                        className="bg-[#df2531] text-[#ffffff] px-6 py-2 rounded-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#df2531] transition-all duration-300 shadow-lg active:scale-95"
                    >
                        Login
                    </Link>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden text-2xl text-white"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>
            </div>
             
            {/* Menu mobile */}
            {open && (
                <div className="flex flex-col mt-4 pb-6 gap-2 md:hidden border-t border-[#ffffff]/10 pt-6 animate-in slide-in-from-top">
                    <Link href="/" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-white hover:text-[#df2531]">Trang chủ</Link>
                    <Link href="/tintuc" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-white hover:text-[#df2531]">Tin Tức</Link>
                    <Link href="/engine" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-white hover:text-[#df2531]">Engine</Link>
                    <Link href="/sound" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-white hover:text-[#df2531]">Sound</Link>
                    <Link href="/contact" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-white hover:text-[#df2531]">Contact</Link>
                    <Link href="/login" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-white hover:text-[#df2531]">Login</Link>
                </div>
            )}
        </nav>
    );
}