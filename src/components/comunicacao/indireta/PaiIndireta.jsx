import { useState } from "react"
import { FilhoIndireta } from "./FilhoIndireta"

export function PaiIndireta(){

    const [nome, setNome] = useState("")
    function alterarNome(novoNome){
        setNome(novoNome)
    }
    return(
        <div className={`w-full flex flex-col  items-center p-7 rounded-md bg-blue-500 text-white`}>
            <span className="text-4xl p-5">{nome}</span>
            <FilhoIndireta alterar={alterarNome}></FilhoIndireta>
        </div>
    )
}