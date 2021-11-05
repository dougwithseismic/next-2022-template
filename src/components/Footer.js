import React from 'react'
import siteSettings from '/siteSettings'
export const Footer = () => {
  return (
    <footer>
      <div className="container p-4 flex">© {siteSettings.siteName} 2021.</div>
    </footer>
  )
}
