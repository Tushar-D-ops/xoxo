import React from 'react'
import styles from '../style'
import { clients } from '../constants'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
<div className={`${styles.flexCenter} flex-wrap w-full gap-[20px] `}>
  {clients.map((client)=>(
     <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w[192px] md:min-w-[150px] min-w[120px]`}>
      <img src={client.logo} alt=""  className='sm:w-[192px] md:w-[150px] w-[100px] object-cover'/>
     </div>
  ))}
</div>

    </section>
  )
}

export default Clients
