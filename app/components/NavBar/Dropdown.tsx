import React from "react"

const Dropdown = ({
    button,
    children,
  }: Readonly<{
    button: React.ReactNode;
    children: React.ReactNode;
  }>) => {
  return (
    <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">{button}</div>
        <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2">
            {children}
        </div>
    </div>
  )
}

export default Dropdown