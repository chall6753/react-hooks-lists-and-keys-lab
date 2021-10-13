import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkArr = links.map((link)=> {
    return (
        <a key={link} href={`#${link}`}>{link}
        </a>
  )})
  console.log(linkArr)
  return (
    <nav>
      {linkArr}
    </nav>
  )

}

export default NavBar;
