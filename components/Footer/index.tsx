import Image from 'next/image'
import React from 'react'
import Logo from "../../public/Logo Zoomies branca-01.png"

export const Footer = () => {
  return (
    <footer className='p-10 flex flex-col items-center justify-center gap-3' style={{backgroundColor:'#587ebf'}}>
        <Image src={Logo} alt="Logo Zoomies" width={100}/>
        <p className='text-white text-center'>© Zoomies 2023. Desenvolvido por <a href="">Bmouse Productions</a></p>
    </footer>
  )
}
