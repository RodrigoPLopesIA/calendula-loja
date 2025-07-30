import React, { ReactNode } from 'react'
interface Props {
    children: ReactNode
}
function FooterActions({children}: Props) {
  return (
   <div className="flex justify-center space-x-6">
    {children}
   </div>
  )
}

export default FooterActions