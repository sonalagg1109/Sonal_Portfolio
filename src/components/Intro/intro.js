import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';

const intro = () => {
  return (
    <section id="intro"> 
    <div className="introContent">
        <span className="Hey">Hey There!</span>
        
        <span className="introText">I'm <span className='introName'>Sonal Agrawal.</span></span>
        
        <span className="introPara">I'm a passionate blockchain developer. I'm a member of CyberLabs (Blockchain Division).<br/>I also specialize in crafting dynamic and user-centric web applications.  </span>
        
        <Link><button className='Hire'>Hire me</button></Link>
     
    

    </div>
    <img src="https://cdn0.iconfinder.com/data/icons/startup-and-new-business-3/24/developer-woman-1024.png"alt="" className='bg' />

    </section>
  );
}

export default intro;
