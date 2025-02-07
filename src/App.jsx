import React from 'react'
import styles from './style'
import Billing from  './components/Billing'
import Business from  './components/Business'
import Button from  './components/Button'
import Carddeal from  './components/Carddeal'
import Clients from  './components/Clients'
import CTA from  './components/CTA'
import Feedback from  './components/Feedback'
import Footer from  './components/Footer'
import Getstarted from  './components/Getstarted'
import Hero from  './components/Hero'
import Navbar from  './components/Navbar'
import Stats from  './components/Stats'
import Testimonials from  './components/Testimonials'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
       <div className={`${styles.boxWidth}`}>
       < Navbar/>
       </div>
     </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
           <Business/>
         <Billing/>
           <Carddeal/>
         <Testimonials/>
           <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>
    
     </div>
  )
}

export default App

