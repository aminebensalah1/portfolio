import React from 'react'
import Title from './Title'
import NavUl from './NavUl'
import * as aboutStyle from '../styles/about.module.css'


const About = () => {
    const data = [
        {name:"Birthday:",solve:"1 May 1995"},
        {name:"Website:",solve:"www.amine.com"},
        {name:"Phone:",solve:"+212651495479"},
        {name:"City:",solve:"MADAGH-BERKANE, MAROC"},
      
      
      ]
    const data2 =[
        {name:"Age:",solve:"30"},
        {name:"Degree:",solve:"Master"},
        {name:"PhEmailone:",solve:"aminebensalah62@gmail.com"},
        {name:"Freelance:",solve:"Available"},
        
      
      ]
  return (
    <section id="about" className={aboutStyle}>
  <div className="container">

    <Title    title='About' className={aboutStyle} /> 

    <div className="row">
      <div className="col-lg-4" data-aos="fade-right">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGLxxOWIrafuERKrBENVpc4Xo913-eC8LLSg&usqp=CAU" width="300"  className="img-fluid" alt="img"/>
      </div>
      <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h3>UI/UX Designer &amp; Web Developer.</h3>
        <p className="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <div style={{ background: "linear-gradient(#e66465, #9198e5)" ,width:"100%",height:"100px"}}></div>
        <div className="row">
          <div className="col-lg-6">
           <NavUl data={data} />
          </div>
          <div className="col-lg-6">
          <NavUl data={data2} />
           
          </div>
        </div>
        <p>
          Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
          Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
        </p>
        
      </div>
    </div>

  </div>
</section>
  )
}

export default About