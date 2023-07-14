import React from 'react'
import { Helmet } from 'react-helmet'
import './Home.css'
import {BsFacebook} from  'react-icons/bs'
const Home = () => {
  return (
    <div>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Home page</title>
    <link rel="canonical" />
    <meta
    name="description"
    content="Ventre produit"
  />
</Helmet>
<div className='background-img'>

<div class="card">

  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper at eros ac vestibulum. Phasellus elementum, dui eget lobortis
  tristique, ligula nisi posuere mi, in feugiat tellus quam id dolor. Pellentesque lectus tortor, vehicula quis pulvinar finibus, pulvinar sit amet arcu. Pellentesque ornare sapien ac ultrices ornare. Suspendisse eget elit sit amet massa scelerisque dictum. Cras ultrices tempus feugiat.</h3>
  <BsFacebook/>
</div>

</div>
    </div>
  )
}

export default Home
