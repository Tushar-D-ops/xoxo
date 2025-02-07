import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-2xl box-shadow`}>
      <div className='flex-1 flex-col'>
        <h2 className={styles.heading2}>Lets Try Our <span className='text-gradient '>Service Now ! </span></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div>
        <Button/>
      </div>
    </section>
  )
}

export default CTA
