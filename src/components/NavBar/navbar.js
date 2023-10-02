import React,{ useState } from 'react';
import './navbar.css';
import {Link} from 'react-scroll';



const Navbar = () => {
  const[showMenu, setShowMenu]= useState(false);
  return (
    
    <nav className="navbar">
      <img class="logo" src= "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6c23f297776465.5ed64a02318c1.jpg" width="50px" alt="Logo" />
      <h2 className="head">Portfolio.</h2>
      <div className="desktopMenu">
        <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500}className="desktopmenuListItem" >Home</Link>
        <Link  activeClass='active' to ='skills' spy={true} smooth={true} offset={-100} duration={500}className="desktopmenuListItem">About</Link>
        <Link activeClass='active' to ='works' spy={true} smooth={true} offset={-100} duration={500}className="desktopmenuListItem">Project</Link>
     
       
      
      </div>
     <button className="desktopMenuBtn" onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});
     }}>
    
      <img src="https://tse4.mm.bing.net/th?id=OIP.d0TEpGeBbzPA1jGzqflyHQHaHS&pid=Api&P=0&h=220"alt="contact"className="desktopMenuImg" /> Contact  </button>


     

      
     

    </nav>
    
  );
}

export default Navbar;
