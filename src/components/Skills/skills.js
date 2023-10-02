import React from 'react';
import './skills.css';

const skills = () => {
  return (
   <section id='skills'>
    <span className='skillTitle'>About Me</span>
    <br/>
    <span className="skillPara" > I'm currently a sophomore at IIT(ISM) Dhanbad.I am pursuing Integrated Master of Technology in Mathematics and Computing.I possess strong communication skills with a knack for problem solving.I focus on details and have effective leadership.<br/>Following is My Portfolio.   </span>
    <div className="skillBars">
    <h2 className="EduHead">1) Education </h2>
    <div className="skillBar"><div className="Edutext"><p>10th Standard-CBSE Board:97.6%<br/>
        12th Standard-CBSE Board:95.8%<br/>
        1st & 2nd Semester-GPA: 9.1

    </p></div>
    
    
    </div>
    </div>
    <div className="skillBars">
       <h2> 2) My Skills</h2>
        <div className="skillBar">
            <img src="https://webstockreview.net/images/website-clipart-web-icon-4.png"height="50px"alt=""className="skillBarImg" />
           
            <div className='skillBarText'>
                <h2>Web Design</h2>
               
                <p>Proficient in HTML5, CSS, JavaScript and React with expertise in building responsive and user-friendly web interfaces.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src="https://www.pinclipart.com/picdir/big/170-1702140_blockchain-icone-blockchain-clipart.png" height="50px"alt=""className="skillBarImg" />
            <div className='skillBarText'>
                <h2>Blockchain Developer</h2>
                <p> passion for  building secure, transparent, and decentralized solutions. </p>
            </div>
        </div>
        <div className="skillBar">
            <img src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-mobile-apps-web-ui-ux-development-concept-png-image_6852723.png" height="50px"alt=""className="skillBarImg" />
            <div className='skillBarText'>
                <h2>UI/UX</h2>
                <p> interest for crafting intuitive and visually appealing user interfaces (UI) that prioritize user experience (UX).</p>
            </div>
        </div>
    </div>
   </section>
  );
}

export default skills;
