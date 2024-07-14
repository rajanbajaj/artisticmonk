import Link from "next/link"
import React from "react"

const Menu = () => {
  return (
    <ul className="menu bg-base-200 w-56 rounded-box">
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/stories/art'>Art Galary</Link></li>
      <li><Link href='/stories/book'>Books</Link></li>
      <li><Link href='/stories/dev'>Developer Journey</Link></li>
      <li><Link href='/stories'>Thoughts</Link></li>
      <li><Link href='/stories/travel'>Travel Diaries</Link></li>        
      <li><Link href='/about'>About</Link></li>
    </ul>
  )
}

export default Menu