import { Pagina } from "../../components/Pagina";
import { PaiIndireta } from "../../components/comunicacao/indireta/PaiIndireta";

export function ComunicacaoIndireta(){
    return(
        <Pagina titulo="Comunicação Indireta" subtitulo="Conceito de comunicação indireta">
            <PaiIndireta></PaiIndireta>
        </Pagina>
    )
}