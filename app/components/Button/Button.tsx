"use client"
import React from "react"
import styles from "./Button.module.css"

const Button = () => {
  return (
    <div>
      <button className={styles.button} onClick={() => console.log("OK")}>Click me</button>
    </div>
  )
}

export default Button