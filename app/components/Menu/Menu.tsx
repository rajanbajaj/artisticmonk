import Link from "next/link"
import React from "react"

const Menu = () => {
  return (
    <ul className="menu bg-base-200 w-56 rounded-box">
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/about'>About</Link></li>
      <li>
        <details>
          <summary>Stories</summary>
          <ul>
            <li><Link href='/stories'>Thoughts</Link></li>
            <li>
              <details>
                <summary>Art Galary</summary>
                <ul>
                  <li><Link href='/stories/art/digital'>Digital</Link></li>
                  <li><Link href='/stories/art/traditional'>Traditional</Link></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Books</summary>
                <ul>
                  <li><Link href='/stories/book'>List</Link></li>
                  <li><Link href='/stories/book/reviews'>Reviews</Link></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Developer Journey</summary>
                <ul>
                  <li><Link href='/stories/dev'>Blog</Link></li>        
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Travel Diaries</summary>
                <ul>
                  <li><Link href='/stories/travel/blog'>Blog</Link></li>        
                  <li><Link href='/stories/travel/galary'>Picture Galary</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
      <li><Link href='/contact'>Contact</Link></li>
    </ul>
  )
}

export default Menu