'use client'

import { afterLoginNavData, beforeLoginNavData } from "@/data/navData";
import NavLink from "./NavLink";
import ThemeSwitcher from "@/providers/ThemeSwitcher";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import { toast } from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";



const Navbar = () => {

    const { user, logOut } = useAuth()
    const { theme } = useTheme()

    const navData = user ? afterLoginNavData : beforeLoginNavData

    const { replace, refresh } = useRouter()
    const path = usePathname()

    const handleLogOut = async () => {
        const toastId = toast.loading('Loading...')
        try {
            await logOut()
            const res = await fetch("/api/auth/logout", {
                method: "POST",
            });
            await res.json();
            if (path.includes("/dashboard") || path.includes("/profile")) {
                replace(`/login?redirectUrl=${path}`);
            }
            toast.dismiss(toastId);
            toast.success("Successfully logout!");
            startTransition(() => {
                refresh();
            });
        } catch (error) {
            toast.error("An Error has Occurred");
            toast.dismiss(toastId);
        }
    }

    return (
        <div className={`navbar ${theme === 'dark' ? 'bg-base-100' : 'bg-slate-300'}`}>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Easy Shop</a>
            </div>
            <div className="relative">
                <ul className='lg:flex gap-2 items-center absolute right-0'>
                    {
                        navData.map(navItem => <li
                            key={navItem.path}
                        >
                            <NavLink
                                exact={navItem.path == '/'}
                                className='px-2 py-1 rounded hover:bg-gray-200 ease-in-out duration-200 hover:text-slate-900'
                                href={navItem.path}
                                activeClassName='bg-gray-200 text-slate-900'
                            >{navItem.title}</NavLink>
                        </li>)
                    }
                    <li>
                        <ThemeSwitcher />
                    </li>
                </ul>
            </div>
            {user && <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full bg-gray-600">
                            <Image
                                alt="user-logo"
                                title={user?.displayName}
                                src={user?.photoURL || "https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"}
                                width={40}
                                height={40}
                                className="h-10 w-10 rounded-full"
                            />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a><button onClick={handleLogOut}>Logout</button></a></li>
                    </ul>
                </div>
            </div>}
        </div>
    );
};

export default Navbar;