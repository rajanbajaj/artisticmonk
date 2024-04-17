import React from 'react'
import Menu from '../Menu/Menu'

const Drawer = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="row-span-10">
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="drawer-button">{children}</label>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <Menu></Menu>
            </div>
        </div>
    </div>
  )
}

export default Drawer