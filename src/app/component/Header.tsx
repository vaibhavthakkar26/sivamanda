"use client";
import React from 'react'
import logo from '../../../public/images/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Aboutus", label: "About Us" },
    { href: "/Products", label: "Products" },
    { href: "/Industries We Serve", label: "Industries We Serve" },
    { href: "/Contact", label: "Contact Us" },
];

const Header = () => {

    const pathname = usePathname();

    return (
        <header className='bg-white shadow-md'>
            <div className='container mx-auto flex items-center justify-between px-4 py-3'>
                <div className="text-xl font-bold text-gray-800">
                    <Link href="/">
                        <Image src={logo} alt='logo' className='w-auto h-auto' />
                    </Link>
                </div>
                <nav className="hidden md:flex space-x-6">
                    {
                        navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link key={link.href}
                                    href={link.href}
                                    className={`text-Dark hover:text-primaryColor leading-5 px-5 py-2 rounded-full duration-300 font-medium ${isActive ? "bg-primaryColor !text-Light" : ""}`}>
                                    {link.label}
                                </Link>
                            )
                        })
                    }
                </nav>
            </div>
        </header>
    )
}

export default Header
