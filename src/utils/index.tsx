import React, { ReactNode } from "react"

const Container: React.FC<{children:ReactNode}> = ({children}) => {
  return (
    <div className="container" >
        {children}
    </div>
  )
}

export {Container}