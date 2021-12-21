import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
font-family: 'Bebas Neue', cursive;
color: grey;
text-transform: uppercase;
font-weight: bold;
font-size: 2.4rem;
margin-top: 2rem;
display: block;
`;
const Select = styled.select`
background-color: #C7CBDC;
width: 100%;
display: block;
padding: 1rem;
--webkit-appearance: none;
border-radius: 10px;
border: none;
`;

const useMoneda = (label, stateInicial, opciones) => {

    //State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);

   // funcion que se va a imprimir en panatalla
    const Seleccionar = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={ e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">-- Seleccione --</option>
                {opciones.map(option => (
                    <option key={option.codigo} value={option.codigo}>
                        {option.nombre}</option>
                ))}
            </Select>
        </Fragment>

    );
    //retornar state, interfaz y fn que modifica el state
    return [state, Seleccionar, actualizarState];
}

export default useMoneda;

