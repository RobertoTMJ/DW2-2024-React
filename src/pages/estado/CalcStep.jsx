import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function CalcStep() {
  const [numero, setNumero] = useState(0);
  const [step, setStep] = useState(1);

  function valorContador(e) {
    let operacao = e.target.textContent;
    if (operacao === "+") {
      setNumero(numero + step)
    } else {
      setNumero(numero - step)
    }
  }

  function valorStep(e) {
    let operacao = e.target.textContent;

    if (operacao === '+') {
      setStep(step + 1);
    } else {
      setStep(step - 1);
    }
  }


  return (
    <Pagina titulo="Cálculo" subtitulo="Conceito de Estado no React">
      <div className="flex flex-col gap-4 w-2/5 items-center">
        <h1 class="text-3xl mb-6 font-bold text-yellow-400">Contador</h1>

        <span class="text-4xl border-2 border-white w-16 h-16 flex items-center justify-center mb-6 rounded-lg">{numero}</span>

        <div class="flex gap-4 mb-6">
          <button onClick={valorContador} class="bg-gray-800 border-2 border-white text-3xl w-16 h-16 flex items-center justify-center rounded-lg">+</button>
          <button onClick={valorContador} class="bg-gray-800 border-2 border-white text-3xl w-16 h-16 flex items-center justify-center rounded-lg">-</button>
        </div>

        <p class="text-lg mb-2">Step</p>

        <div class="flex gap-4 items-center">
          <button onClick={valorStep} class="bg-gray-800 border-2 border-white w-10 h-10 flex items-center justify-center rounded-full">-</button>
          <span class="text-2xl">{step}</span>
          <button onClick={valorStep} class="bg-gray-800 border-2 border-white w-10 h-10 flex items-center justify-center rounded-full">+</button>
        </div>
      </div>
    </Pagina>
  );
}