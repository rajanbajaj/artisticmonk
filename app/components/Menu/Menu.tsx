import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <ul className="menu bg-base-200 w-56 rounded-box">
        <li>
            <details open>
            <summary>Art Galary</summary>
            <ul>
                <li><Link href='/art/digital'>Digital</Link></li>
                <li><Link href='/art/traditional'>Traditional</Link></li>
            </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>Travel Diaries</summary>
                <ul>
                    <li><Link href='/travel/galary'>Picture Galary</Link></li>
                    <li><Link href='/travel/blog'>Blog</Link></li>        
                </ul>
            </details>
        </li>
        <li>
            <details open>
                <summary>Developer Journey</summary>
                <ul>
                    <li><Link href='/dev/stories'>Stories</Link></li>
                    <li><Link href='/dev/blog'>Blog</Link></li>        
                </ul>
            </details>
        </li>
        <li><Link href='/contact'>Contact</Link></li>
        <li><Link href='/about'>About</Link></li>
        </ul>
  )
}

export default Menu