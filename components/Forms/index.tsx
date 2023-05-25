import React, { useRef } from 'react';
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { Checkbox } from "primereact/checkbox"
import Image from 'next/image'
import Logo from "../../public/Logo Zoomies.png"
import {InputMask} from "primereact/inputmask"
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';


export const Forms = () =>{

    const toast = useRef<Toast>(null);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    return(
        <div className="flex items-center justify-center w-full lg:p-20  lg:w-2/5">
            <div className="surface-card p-4 shadow-2xl rounded-xl bg-white w-full">
                <div className="text-center flex flex-col gap-4">
                    <Image src={Logo} alt="hyper" height={50} className="m-auto" />
                    <div className="text-900 text-3xl font-medium">Participe Agora!</div>
                    <span className="text-600 font-medium line-height-3">Já se inscreveu?</span>
                    <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Se ainda não, inscreva-se agora mesmo!</a>
                </div>

                <div className="flex flex-col gap-4">

                    <label htmlFor="nome" className="block text-900 font-medium">Nome</label>
                    <InputText id="nome" type="text" placeholder="Nome" className="w-full" />

                    <label htmlFor="email" className="block text-900 font-medium">Email</label>
                    <InputText id="email" type="text" placeholder="Email address" className="w-full" />

                 
                    <label htmlFor="fone" className="block text-900 font-medium ">Telefone</label>
                    <InputMask mask="99-999999999" placeholder="99-999999999" />

                    <div className='flex items-end justify-between gap-3'>
                        <div className='flex flex-col flex-1 gap-3'>
                            <label htmlFor="text" className="block text-900 font-medium ">Informe seu usuário do Instagram</label>
                            <div className="p-inputgroup flex-1">
                                <span className="p-inputgroup-addon">
                                    <i className="pi pi-user"></i>
                                </span>
                                <InputText placeholder="@usuário" />
                            </div>
                        </div>
                        <div className="card flex justify-content-center">
                            <Toast ref={toast}></Toast>
                            <FileUpload chooseLabel='Anexar ilustração' mode="basic"  name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} className='w-full flex-1' />
                        </div>
                    </div>
                    <Button label="Inscrever-se" className="w-full " />
                </div>
            </div>
        </div>      
    )
}




