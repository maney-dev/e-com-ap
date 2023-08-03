import React from 'react'

const Footer = () => {
  return (
    <footer className='h-full w-full justify-center mt-[10rem] pb-12'>
      <div className='h-full w-10/12 grid grid-cols-3 justify-between'>
        {/* colum*/}
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl  mb-8 text-orange-600'>FAQ</h2>
          <span>We are based</span>
          <span>How we operate</span>
          <span>Refund policy</span>
        </div>
        {/* colum*/}
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl mb-8 text-orange-600'>Contacts</h2>
          <span>Facebook: SenBoutikShop</span>
          <span>WhatsApp: SenBoutikShop</span>
          <span>Instagram: SenBoutikShop</span>
        </div>
        {/* colum*/}
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl mb-8 text-orange-600'>Privacy</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptate officia neque modi, nihil harum blanditiis alias ab minima natus maxime est? 
            Debitis suscipit perspiciatis voluptatem inventore aperiam necessitatibus iste.
            Tempore.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
