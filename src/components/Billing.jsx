import React from 'react'
import {apple,bill,google} from '../assets';
import styles,{layout} from '../style';

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
  <div className={layout.sectionImgReverse}>
    <img src={bill} alt=""  className='w-[100%] h-[100%] relative z-[5]'/>
    <div className='absolute z-[0] left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'></div>   
    
    <div className='absolute z-[0] left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'></div>
    <div className='absolute z-[0] right-1/2 top-0 w-[50%] h-[50%] rounded-full blue__gradient'></div>
  </div>
  <div className={layout.sectionInfo}>
   <h2 className={styles.heading2}>Easily Control your <br className='sm:block hidden'/> <span className='text-gradient '>Billing</span> & <span className='text-gradient '>Invoice</span></h2>
   <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi deleniti rem hic blanditiis ratione minima animi amet assumenda labore id.</p>  
  <div className='flex flex-wrap flex-row sm:mt-10 mt-6'>
    <img src={google} alt=""  className='w-[128px] h-[42px] object-contain cursor-pointer mr-5'/>
    <img src={apple} alt=""  className='w-[128px] h-[42px] object-contain cursor-pointer mr-5'/>
 
  </div>
  
  </div>
    </section>
  )
}

export default Billing
