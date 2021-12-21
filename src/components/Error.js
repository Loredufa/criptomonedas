import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
    padding: 1rem;
    -webkit-text-fill-color: #9d0208;
    -webkit-text-stroke: 0.5px;
    -webkit-text-stroke-color: grey; 
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Montagu Slab', cursive;
`;

const Error = ({mensaje}) => {
    return (
        <MensajeError>
            {mensaje}
        </MensajeError>
      );
}
 
export default Error;