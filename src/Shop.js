import React from 'react'
import ServiceCard from './ServiceCard'

function Shop() {
  return (
    <div className='mx-auto flex gird grid-cols-3 gap-8 justify-center mx-32 py-10'>
        
        <div>
            <ServiceCard 
            name='Car' 
            image='https://cdn.quicksell.co/-Mqx3zLiBMx23KBDjxpA/products/-MvDdHBVwUT_Jnd6Wfwn.jpg'
            description='The all new & latest car toy with 4 wheels, two rear head light with two rear beam lights.'
            price='Rs. 150'
            />
        </div>
           
        <div>
            <ServiceCard 
            name='Car' 
            image='https://cdn.quicksell.co/-Mqx3zLiBMx23KBDjxpA/products/-MvDdHBVwUT_Jnd6Wfwn.jpg'
            description='The all new & latest car toy with 4 wheels, two rear head light with two rear beam lights.'
            price='Rs. 150'
            />
        </div>

    </div>
  )
}

export default Shop