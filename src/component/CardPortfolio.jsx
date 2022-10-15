import React from 'react'

const CardPortfolio = ({title}) => {
  return (
    <div className="portfolio-wrap">
          <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-links">
            <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title={title}><i className="bx bx-plus"></i></a>
            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
          </div>
        </div>
  )
}

export default CardPortfolio

