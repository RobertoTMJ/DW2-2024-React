import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function Tradutor() {
  const [textoPortugues, setTextoPortugues] = useState("");
  const [textoIngles, setTextoIngles] = useState("");
  const [contadorTexto, setContadorTexto] = useState(0);

  function Digito() {
    const tamanhoTextArea = document.querySelector("#texto_portugues");
    const textoTamanho = tamanhoTextArea.value.length;
    setContadorTexto(`${textoTamanho} / 250`);
  }

  const traduzirTexto = async () => {
    try {
      const requisicao = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textoPortugues)}&langpair=pt-br|en-us`
      );
      const data = await requisicao.json();
      
      if (data.responseData.translatedText) {
        setTextoIngles(data.responseData.translatedText);
      } 
    } catch (error) {
      console.error("Erro ao traduzir:", error); // Registro de erro
    }
  };

  return (
    <Pagina titulo="Exercício 01" subtitulo="Tradutor">
      <div className="flex flex-col items-center p-4 space-y-6">
        <h1 className="text-3xl font-bold text-center">Tradutor</h1>
        <div className="flex flex-row space-x-8">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold">Português</h2>
            <textarea
              id="texto_portugues"
              className="border rounded-md p-2 w-64 h-32 text-black"
              maxLength={250}
              placeholder="Digite o texto em português..."
              value={textoPortugues}
              onChange={(evento) => {
                setTextoPortugues(evento.target.value);
                Digito();
              }}
            ></textarea>
            <p id="contador">{contadorTexto}</p> 
            <button
              className="mt-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
              onClick={traduzirTexto}
            >
              Traduzir
            </button>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold">Inglês</h2>
            <textarea
              className="border rounded-md p-2 w-64 h-32 text-black"
              value={textoIngles}
              placeholder="O resultado da tradução aparecerá aqui..."
            ></textarea>
          </div>
        </div>
      </div>
    </Pagina>
  );
}
