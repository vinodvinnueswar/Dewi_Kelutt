import React from 'react'
import Intro from '../components/Intro'
import OurStory from '../components/OurStory'
import Location from '../components/Location'
import Gallery from '../components/Gallery'
import RSVP from '../components/Rspv'





const Home = () => {
  return (
    <div>
        <Intro/>
        <OurStory/>
        <Location/>
        <Gallery/>
        <RSVP/>
    </div>
  )
}

export default Home