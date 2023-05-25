import Image from "next/image";
import Regulamentacao1 from "../../public/pdf/Regulamento_Concurso_Ilustrador_Zoomies_page-0001.jpg"
import Regulamentacao2 from "../../public/pdf/Regulamento_Concurso_Ilustrador_Zoomies_page-0002.jpg"

export const Regulamentacao = () => {
  return (
  <div className="m-auto">
    <Image src={Regulamentacao1} alt="" className="m-auto"></Image>
    <Image src={Regulamentacao2} alt="" className="m-auto"></Image>
  </div>
  );
};

