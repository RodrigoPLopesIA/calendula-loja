import React, { ReactNode } from 'react'
interface FooterContentProps {
    children: ReactNode
}
function FooterContent({children}: FooterContentProps) {
  return (
    <div className="text-center">
        {children}
    </div>
  )
}

export default FooterContent