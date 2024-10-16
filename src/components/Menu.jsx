import {
  IconAddressBook,
  IconBrandReact,
  IconHome,
  IconInfoCircle,
  IconRouteAltLeft,
  IconMessageUp,
  IconMessageDown,
  IconSquareRoundedNumber1,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

export function Menu() {
  const getEstilo = (props) => {
    let estilo = `
      flex items-center gap-4
      px-3 py-3 w-full
      text-sm text-white 
      hover:bg-zinc-900 `;
    let ativo = "border-r-4 border-solid border-slate-800 ";

    // let final
    // if (props.isActive){
    //     final = estilo + ativo
    // } else {
    //     final = estilo
    // }
    let final = props.isActive ? estilo + ativo : estilo;

    return final;
  };

  return (
    <aside className="flex flex-col gap-5 bg-black min-w-72">
      <header
        className={`
          flex justify-center items-center gap-2
          bg-black text-zinc-50 
          px-1 py-5 h-16          
          text-2xl font-black
        `}
      >
        <IconBrandReact />
        <span className="font-bold">React Rotas</span>
      </header>

      <nav
        className={`
          flex flex-col justify-start items-start gap-2    
               
        `}
      >
        <NavLink to="home" className={getEstilo}>
          <IconHome />
          Home
        </NavLink>
        <NavLink to="contato" className={getEstilo}>
          <IconAddressBook />
          Contato
        </NavLink>
        <NavLink to="sobre" className={getEstilo}>
          <IconInfoCircle />
          Sobre
        </NavLink>

        <span className="pt-4 pl-3 text-xs text-zinc-500">Estado</span>

        <NavLink to="semEstado" className={getEstilo}>
          <IconSquareRoundedNumber1 />
          Sem Estado
        </NavLink>

        <NavLink to="comEstado" className={getEstilo}>
          <IconSquareRoundedNumber1 />
          Com Estado
        </NavLink>

        <NavLink to="campoTexto" className={getEstilo}>
          <IconSquareRoundedNumber1 />
          Campo Texto
        </NavLink>

        <NavLink to="calcStep" className={getEstilo}>
          <IconSquareRoundedNumber1 />
          Calc Step
        </NavLink>

        <span className="pt-4 pl-3 text-xs text-zinc-500">Comunicacão </span>

        <NavLink to="comunicacaoDireta" className={getEstilo}>
          <IconMessageUp />
          Comunicação Direta
        </NavLink>

        <NavLink to="comunicacaoIndireta" className={getEstilo}>
          <IconMessageDown />
          Comunicação Indireta
        </NavLink>
      </nav>
      <span className="pt-4 pl-3 text-xs text-zinc-500">Hooks Básicos </span>

      <NavLink to="useRef" className={getEstilo}>
          <IconMessageUp />
          UseRef
        </NavLink>

        <NavLink to="useEffect" className={getEstilo}>
          <IconMessageUp />
          UseEffect
        </NavLink>

        <span className="pt-4 pl-3 text-xs text-zinc-500">Exercícios</span>
        <NavLink to="tradutor" className={getEstilo}>
          <IconMessageUp />
          Tradutor
        </NavLink>

        <NavLink to="revisao" className={getEstilo}>
          <IconMessageUp />
          Revisão
        </NavLink>
    </aside>
  );
}
