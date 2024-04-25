"use client"
import React from "react"
import Drawer from "./Drawer"
import ThemeButton from "./ThemeButton"
import Image from "next/image"
import Dropdown from "./Dropdown"
import Menu from "../Menu/Menu"
import Link from "next/link"

const NavBar = () => {
  const button = <div className="btn btn-ghost text-xl"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"></path></svg></div>;
  return (
    <div className="navbar bg-base-200 rounded-box mb-5 mr-5 gap-5">
        <div className="flex-1">
            <Dropdown button={button}>
                <Menu></Menu>
            </Dropdown>
            <Link className="btn btn-ghost text-xl" href="/">Artisitic Monk</Link>
        </div>
        <div>
            <ThemeButton />
        </div>
        <div className="flex-none gap-2">
            <Drawer>
                <div className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <Image alt="Profile Picture" src="https://avatars.githubusercontent.com/u/24255458?v=4" width={50} height={50}></Image>
                    </div>
                </div>
            </Drawer>
            </div>
        </div>
  )
}

export default NavBar