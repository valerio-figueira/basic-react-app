import React from "react";

export default function Alunos(props){
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado';

    return (
        <div>
            <h2>Nome do Aluno: {props.nome}</h2>
            <p>Nota: {props.nota}</p>
            <p>Situação: {status}</p>
        </div>
    )
}