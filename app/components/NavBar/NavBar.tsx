"use client"
import Link from 'next/link'
import React from 'react'
import Drawer from './Drawer'
import ThemeButton from './ThemeButton'

const NavBar = () => {
  return (
    <div className="navbar bg-base-200 rounded-box mb-5 mr-5 gap-5">
        <div className="flex-1">
            <Link className="btn btn-ghost text-xl" href="/">Artisitic Monk</Link>
        </div>
        <div>
            <ThemeButton />
        </div>
        <div className="flex-none gap-2">
            <Drawer>
                <div className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Profile Picture" src="https://avatars.githubusercontent.com/u/24255458?v=4" />
                    </div>
                </div>
            </Drawer>
            </div>
        </div>
  )
}

export default NavBar