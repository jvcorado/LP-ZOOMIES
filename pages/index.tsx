import Image from 'next/image'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";    
import 'primeicons/primeicons.css';
import { Button } from "primereact/button"
import Logo from "../public/Logo Zoomies branca-01.png"
import Icon from "../public/Ícone.png"
import { Forms } from '@/components/Forms';
import { Footer } from '@/components/Footer';
import { Sidebar } from "primereact/sidebar"
import { useState } from 'react';
import { Regulamentacao } from '@/components/Regulamentacao';
import { FaTiktok } from "react-icons/fa"


export default function Home() {

  const [visible, setVisible] = useState<boolean>(false);

  function insta(){
    window.location.href='https://www.instagram.com/zoomiesbr/'
  }

  function youtube(){
    window.location.href='https://www.youtube.com/channel/UCrpmqsDowU19j26UiIIlJfg'
  }
  function facebook(){
    window.location.href='https://www.facebook.com/zoomiesbr'
  }
  function tiktok(){
    window.location.href='https://www.tiktok.com/@zoomiesbr'
  }

  return (
    <main>

      <div className="  bg-imageMobile bg-image  ">
      </div>
      <div className="text-gray-100 p-3 flex flex-col justify-center items-center flex-wrap " style={{backgroundColor:'#E32E27'}}>
          <div className="font-bold mr-4 md:text-3xl">🔥 Participe Agora!</div>
          <div className="items-center md:text-2xl md:flex">
              <span className="line-height-3 ">Antes de se inscrever no nosso concurso,</span>
          </div>
          <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
                <Regulamentacao/>
            </Sidebar>
            <p onClick={() => setVisible(true)} className='ms-2 font-bold cursor-pointer uppercase md:text-3xl underline decoration decoration-neutral-800'>Clique aqui e conheça as regrar.</p>
        </div>
      </div>
      <div className='flex flex-col xl:flex-row items-center justify-center p-3 py-10 md:p-20 gap-20 lg:gap-8'  style={{backgroundColor:'#FDFBDD'}}>
        <div className='flex flex-col flex-1 gap-10 w-full h-5/6 '>
          <h1 className='text-2xl md:text-5xl font-bold text-center' style={{color:'#587ebf'}}>Entenda nosso Concurso</h1>
          <iframe className='shadow-2xl h-285 md:h-570'  src="https://www.youtube.com/embed/9bPGwCpVz_0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <Forms/>
      </div>
      <div className="surface-0 text-700 text-center flex items-center justify-center flex-col p-10 lg:p-40" style={{backgroundColor:'#F6A824'}}>
          <Image src={Icon} alt='' width={60} className='mb-4'></Image>
          <div className="text-white font-bold text-3xl lg:text-5xl mb-3">Para validar sua participação no concurso</div>
          <div className="text-white text-2xl mb-5"> você também precisa seguir nossas redes sociais:</div>
          <div className='flex flex-col items-center md:justify-center md:flex-row gap-5 w-full'>
            <Button onClick={insta} label="Seguir" icon="pi pi-instagram" className="w-7/12 md:w-1/12  font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" />
            <Button  onClick={youtube} label="Seguir" icon="pi pi-youtube" className="w-7/12 md:w-1/12   font-bold px-5 py-3  p-button-rounded white-space-nowrap" />
            <Button  onClick={facebook} label="Seguir" icon="pi pi-facebook" className="w-7/12 md:w-1/12   font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" />
            <Button  onClick={tiktok} label="Seguir" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap flex flex-row-reverse gap-2 w-7/12 md:w-1/12  "><FaTiktok size={18}/></Button>
          </div>
      </div>
      <Footer/>
    </main>
  )
}


