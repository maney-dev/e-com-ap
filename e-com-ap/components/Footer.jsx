import React from 'react'

const Footer = () => {
  return (
    <footer className='h-full w-full justify-center mt-[10rem] pb-12 ml-20'>
      <div className='h-full w-10/12 grid grid-cols-3 justify-between'>
        {/* colum*/}
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl  mb-8 text-orange-600'>FAQ</h2>
          <span>Nous sommes basés</span>
          <span>Comment nous fonctionnons</span>
          <span>Politique de remboursement</span>
        </div>
        {/* colum*/}
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl mb-8 text-orange-600'>Contacts</h2>
          <span>Facebook: SenShop</span>
          <span>WhatsApp: SenShop</span>
          <span>Instagram: SenShop</span>
        </div>
        {/* colum*/}
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl mb-8 text-orange-600'>Confidentialité</h2>
          <div className='gap-30'>
            <p>
              Les droits à la protection de vos informations – L'essentiel des Règles de confidentialité ainsi que des conditions d'utilisation de vos informations par <span className='text-orange-600'>SenShop</span>
            </p>
            <ul>
              <li>
                  <p>
                  Dans le cadre de son activité de vente en ligne SenShop est amené à traiter des informations vous concernant.
                  Par exemple, en remplissant un formulaire d'inscription, en achetant une formation, en vous à un événement que nous organisons, en participant à une formation, en naviguant sur nos sites Internet ou nos applications mobiles et numériques, vous nous transmettez des informations dont certaines sont de nature à vous identifier (« données personnelles »)
                  </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
