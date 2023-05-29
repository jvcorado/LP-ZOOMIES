import { useRef, FormEvent, ChangeEvent, useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { enviarEmail } from "../../api/api";

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
    <div>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleChange} />

        <label htmlFor="telefone">Telefone:</label>
        <input
          type="text"
          id="telefone"
          name="telefone"
          onChange={handleChange}
        />

        <label htmlFor="instagram">Instagram:</label>
        <input
          type="text"
          id="instagram"
          name="instagram"
          onChange={handleChange}
        />

        <label htmlFor="curriculo">Curriculo:</label>
        <input
          type="file"
          id="curriculo"
          name="curriculo"
          onChange={handleFileUpload}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
