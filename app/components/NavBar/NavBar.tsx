"use client"
import React from "react"
import Drawer from "./Drawer"
import ThemeButton from "./ThemeButton"
import Image from "next/image"
import DropdownMenu from "../Menu/DropdownMenu"

const NavBar = () => {
  return (
    <div className="navbar bg-base-200 rounded-box mb-5 mr-5 gap-5">
      <DropdownMenu></DropdownMenu>
      <ThemeButton />
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