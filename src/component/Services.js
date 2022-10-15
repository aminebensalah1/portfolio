import React from 'react'
import MyServie from './MyServie'
import Title from './Title'

const Services = () => {
const myService = [
{nameService:"Lorem Ipsum",description:"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"},
{nameService:"Dolor Sitema",description:"Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata"},
{nameService:"Sed ut perspiciatis",description:">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"},
{nameService:"Magni Dolores",description:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
{nameService:"Nemo Enim",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"},
{nameService:"Eiusmod Tempor",description:"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi"},

]

  return (
  
        <section id="services" className="services">
  <div className="container">

    
<Title title='Services'className="section-title" />
    <div className="row">
     <MyServie myService={myService} /> 
    </div>

  </div>
</section>


    
  )
}

export default Services