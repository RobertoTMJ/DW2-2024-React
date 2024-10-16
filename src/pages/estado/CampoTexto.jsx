import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function CampoTexto() {
  const [palavra, setPalavra] = useState("")
    function apresentar(e){
        setPalavra(e.target.value)
    }
  
    function limpar(){
        setPalavra("")
    }
  return (
    <Pagina titulo="Campo Texto" subtitulo="Conceito de Estado no React">
      <div className="flex flex-col gap-4">
        <input type="text" onChange={apresentar} className="text-black" value={palavra}/>
        <button onClick={limpar}>Limpar</button>
        <span>
            {palavra}
        </span>
      </div>
    </Pagina>
  );
}