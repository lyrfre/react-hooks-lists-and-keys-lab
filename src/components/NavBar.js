import React from "react";

// function NavBar(props) {

//   return <nav>
//     {
//     // <a key="home" href="#home">home</a>;
//     // <a key="about" href="#about">about</a>
//     <a key={props.link} href={"#" + props.link}>{props.link}</a>

//     }
//     </nav>;
// }

// function linkList () {
//   const links = ["home", "about", "projects"];

//   const linkElements = links.map((link) =>{
//     return <NavBar key={link} link={link} />
//   })
// }

function NavBar(){
  const links= ["home", "about", "projects"]

  const linkElements = links.map((link)=>{
    return <a key={link} href={"#"+{link}}>{link}</a>
  })

  return <nav>{linkElements}</nav>
}

// function NavBar() {
//   const links = ["home", "about", "projects"];

//   const anchors = links.map((link) => (
//     <a key={link} href={"#" + link}>
//       {link}
//     </a>
//   ));
//   return <nav>{anchors}</nav>;
// }




export default NavBar;
