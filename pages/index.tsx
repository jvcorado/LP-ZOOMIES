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
import { BsTiktok } from "react-icons/bs"


export default function Home() {

  const [visible, setVisible] = useState<boolean>(false);

  return (
    <main>

      <div className="surface-0 text-700 text-center bg-image flex items-center justify-center flex-col gap-4">
          <Image src={Logo} alt="Logo Zoomies" className='w-32'/>
          <h1 className="text-white font-bold text-7xl mb-3">Tenha a sua ilustração </h1>
          <div className="text-white text-3xl mb-5">nas embalagens da marca pet mais inovadora do Brasil!</div>
      </div>
      <div className="text-gray-100 p-3 flex justify-center items-center flex-wrap" style={{backgroundColor:'#E32E27'}}>
          <div className="font-bold mr-4">🔥 Participe Agora!</div>
          <div className="items-center hidden lg:flex">
              <span className="line-height-3">Antes de se inscrever no nosso concurso,</span>
          </div>
          <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
                <Regulamentacao/>
            </Sidebar>
            <p onClick={() => setVisible(true)} className='ms-2 font-bold cursor-pointer uppercase'>Conheça mais sobre as nossas regras.</p>
        </div>
      </div>
      <div className=' flex flex-col lg:flex-row items-center justify-center p-10 lg:p-20 gap-20 lg:gap-0'  style={{backgroundColor:'#FDFBDD'}}>
        <div className='flex flex-col flex-1 gap-10'>
          <h1 className='text-2xl lg:text-5xl font-bold text-center' style={{color:'#587ebf'}}>Entenda nosso Concurso</h1>
          <iframe className='rounded-2xl shadow-2xl h-285 lg:h-570'  src="https://www.youtube.com/embed/9bPGwCpVz_0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <Forms></Forms>
      </div>
      <div className="surface-0 text-700 text-center flex items-center justify-center flex-col p-10 lg:p-40" style={{backgroundColor:'#F6A824'}}>
          <Image src={Icon} alt='' width={60} className='mb-4'></Image>
          <div className="text-white font-bold text-3xl lg:text-5xl mb-3">Para validar sua participação no concurso</div>
          <div className="text-white text-2xl mb-5"> você também precisa seguir nossas redes sociais:</div>
          <div className='flex flex-col items-center lg:justify-center lg:flex-row gap-5 w-full m-auto'>
            <Button label="Seguir" icon="pi pi-instagram" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" />
            <Button label="Seguir" icon="pi pi-youtube" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" />
            <Button label="Seguir" icon="pi pi-facebook" className=" font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" />
            <Button label="Seguir" icon="" className=" font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"/>
          </div>
      </div>
      <Footer/>
    </main>
  )
}


