import { Pagina } from "../../components/Pagina";
import { PaiDireta } from "../../components/comunicacao/direta/PaiDireta";

export function ComunicacaoDireta(){
    return(
        <Pagina titulo="Comunicação Direta" subtitulo="Conceito de comunicação direta">
            <PaiDireta></PaiDireta>
        </Pagina>
    )
}