import { useRef, useState } from "react";
import { Pagina } from "../../components/Pagina";

export function UseRef(){
    const [estado, setEstado] = useState(0);
    const referencia = useRef(0)

    function incrementaEstado(){
        setEstado(estado + 1)
    }

    function incrementaReferencia(){
        referencia.current += 1
    }
    return(
        <Pagina titulo="UseRef" subtitulo ="Hooks básicos">
            <div className="flex flex-col">
                <div>{`Referência: ${referencia.current}`}</div>
                <div>{`Referência: ${referencia.current} | Estado: ${estado}`}</div>
            </div>
            <div>
                <button className="bg-purple-400 px-3 py-2 rounded-md m-5" onClick={incrementaReferencia}>
                    Referência +
                </button>
                <button className="bg-blue-400 px-3 py-2 rounded-md" onClick={incrementaEstado}>
                    Estado +
                </button>
            </div>
        </Pagina>
    )
}