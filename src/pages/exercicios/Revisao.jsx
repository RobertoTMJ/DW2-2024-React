import { Pagina } from "../../components/Pagina"
export function Revisao(){
    return(
        <Pagina titulo="Revisão" subtitulo="Prova de DW">
            <div className="flex flex-row justify-center rounded-md">
                <header className="text-red-950
                ">Revisão de conteúdos</header>
                <section>
                    <h2>Rotas</h2>
                    <h2>Comunicação Direta e Indireta</h2>
                    <h2>UseState e UseEffect</h2>
                </section>
            </div>
        </Pagina>
    )
}