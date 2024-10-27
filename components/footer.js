import React from 'react'
import Link from 'next/link'
const toolname = process.env.NEXT_PUBLIC_TOOL_NAME

export const Footer = () => {
  const pages = [
    { name: "Home", link: "/" },
    // { name: "Tools", link: "/" },
    // { name: "Blog", link: "/" },
    {name:"About Us",link:"/about"},
    {name:"Contact Us",link:"/contact"},
    {name:"Privacy Policy",link:"/privacypolicy"},
    {name:"Terms Conditions",link:"/termscondition"},



    // { name: "Get ApiKey", link: "/get-openai-apikey" },

  ]


  return (
    <div className="footer">
      <div className="copyright">© 2023 Copyright {toolname}.com</div>
      
      {pages.map((page,i) => {
        return (
          <Link key={i} href={`${page.link}`}>{page.name}</Link>
        )
      })}

      {/* <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About Us</Link>
      <Link href={"/contact"}>Contact Us</Link>

      <Link href={"/privacypolicy"}>Privacy Policy</Link> */}
    </div>
  )
}
