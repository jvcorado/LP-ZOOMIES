import axios from "axios";

export const api = axios.create({
  baseURL: "https://zoomies.onrender.com/",
});

export const enviarEmail = async (formData) => {
  const { nome, telefone, email, instagram, curriculoFile, curriculoName } =
    formData;

  const formDataToSend = new FormData();
  formDataToSend.append("nome", nome);
  formDataToSend.append("telefone", telefone);
  formDataToSend.append("email", email);
  formDataToSend.append("instagram", instagram);
  if (curriculoFile) {
    formDataToSend.append("curriculoFile", curriculoFile, curriculoName);
  }

  return await api.post("/send-email", formDataToSend, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
