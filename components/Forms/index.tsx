import { useRef, FormEvent, ChangeEvent, useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { enviarEmail } from "../../api/api";
import Logo from "../../public/Logo Zoomies.png";
import Image from "next/image";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  instagram: string;
  curriculoFile: File | null;
  curriculoName: string;
}

export const Forms = () => {
  const toastRef = useRef<Toast>(null);
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    instagram: "",
    curriculoFile: null,
    curriculoName: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log("Conteúdo do arquivo:", reader.result);
        setFormData((prevData) => ({
          ...prevData,
          curriculoFile: file,
          curriculoName: file.name,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await enviarEmail(formData);
      if (toastRef.current) {
        toastRef.current.show({
          severity: "success",
          summary: "Success",
          detail: "E-mail enviado com sucesso",
        });
      }
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      if (toastRef.current) {
        toastRef.current.show({
          severity: "error",
          summary: "Error",
          detail: "Erro ao enviar e-mail",
        });
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="post"
        className=" flex flex-col w-full lg:w-4/12 gap-3 p-10  shadow-2xl rounded-2xl bg-white"
      >
        <Image src={Logo} alt="Logo Zoomies" width={80} className="m-auto" />
        <h1 className="text-center text-xl">Participe Agora!</h1>
        <p className="text-center">Já se inscreveu?</p>
        <p className="text-center" style={{ color: "#587EBF" }}>
          Se ainda não, increva-se agora mesmo!
        </p>

        <label htmlFor="nome" className="text-xl">
          Nome:
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          onChange={handleChange}
          className="p-2 outline-none rounded-md border-2"
        />

        <label htmlFor="email" className="text-xl">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          className="p-2 outline-none rounded-md border-2"
        />

        <label htmlFor="telefone" className="text-xl">
          Telefone:
        </label>
        <input
          type="text"
          id="telefone"
          name="telefone"
          onChange={handleChange}
          className="p-2 outline-none rounded-md border-2"
        />

        <label htmlFor="instagram" className="text-xl">
          Instagram:
        </label>
        <input
          type="text"
          id="instagram"
          name="instagram"
          onChange={handleChange}
          className="p-2 outline-none rounded-md border-2"
        />

        <label htmlFor="curriculo" className="text-xl">
          Curriculo:
        </label>
        <input
          type="file"
          id="curriculo"
          name="curriculo"
          onChange={handleFileUpload}
          style={{ color: "#587EBF" }}
        />

        <button
          type="submit"
          className="px-4 py-2 lg:py-4 rounded-md text-white"
          style={{ backgroundColor: "#587EBF" }}
        >
          Insrever-se
        </button>
      </form>
    </>
  );
};
