import React from 'react'

function MaxAndMin(props) {
  return (
    <div>
        <h2>Valores inseridos no parâmetro:</h2>
        {props.max === props.min ? (
            <>
                <p>Os números são iguais: {props.max}</p>
            </>
        ) : (
            <>
                <p>Maior número: {props.max}</p>
                <p>Menor número: {props.min}</p>
            </>
        )}
    </div>
  )
}

export default MaxAndMin