import React from "react"

const PageLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          {children}
        </div>
    </div>
  )
}

export default PageLayout