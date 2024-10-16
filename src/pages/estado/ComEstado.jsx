import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function ComEstado() {
  const [num, setNum] = useState(0)
  function incrementar() {
    setNum(num + 1)
  }

  function decrementar() {
    if(num > 0){   
        setNum(num - 1)
    }
  }

  function random(){
    let aleatorio = Math.ceil(Math.random() * 100)
        setNum(aleatorio)
  }

  return (
    <Pagina titulo="Com Estado" subtitulo="Conceito de Estado no React">
      <div className="flex flex-col gap-4">
        <span className="text-2xl">
          {num}
        </span>
        <button className="bg-purple-400 rounded-md p-2" onClick={incrementar}>Incrementar</button>
        <button className="bg-purple-400 rounded-md p-2" onClick={decrementar}>Decrementar</button>
        <button className="bg-purple-400 rounded-md p-2" onClick={random}>Gerar número aleatório</button>
      </div>
    </Pagina>
  );
}
