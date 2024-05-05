import React from "react"
import Dropdown from "./Dropdown";
import Menu from "./Menu";

const DropdownMenu = () => {
  const button = <div className="btn btn-ghost text-xl"><svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"></path></svg></div>;
  return (
    <div className="flex-1">
      <Dropdown button={button}>
        <Menu></Menu>
      </Dropdown>
    </div>
  )
}

export default DropdownMenu