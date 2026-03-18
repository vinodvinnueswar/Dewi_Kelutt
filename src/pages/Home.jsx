import React from 'react'
import Intro from '../components/Intro'
import OurStory from '../components/OurStory'
import Location from '../components/Location'
import Gallery from '../components/Gallery'
import RSVP from '../components/Rspv'
import Events from '../components/Event'


const Home = () => {
  return (
    <div>
        <Intro/>
        <OurStory/>
        <Location/>
        <Gallery/>
        <Events/>
        <RSVP/>
    </div>
  )
}

export default Home