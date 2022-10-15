import React from 'react'
import Title from './Title'
import CardPortfolio from './CardPortfolio'

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section-bg">
  <div className="container">

   
    <Title title='Portfolio' className="section-title" />

    <div className="row" data-aos="fade-up">
      <div className="col-lg-12 d-flex justify-content-center">
        <ul id="portfolio-flters">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Card</li>
          <li data-filter=".filter-web">Web</li>
        </ul>
      </div>
    </div>

    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <CardPortfolio title="App 1"/>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
      <CardPortfolio title="App 2"/>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <CardPortfolio title="Card 1"/>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <CardPortfolio title='Card2'/>
       
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
       <CardPortfolio title='Wep 1'/>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <CardPortfolio title='App 3'/>
      </div>
      

      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <CardPortfolio title='Card 1'/>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <CardPortfolio title='Card 3'/>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-web">
        <CardPortfolio title='Web 3'/>
      </div>

    </div>

  </div>
</section>
  )
}

export default Portfolio