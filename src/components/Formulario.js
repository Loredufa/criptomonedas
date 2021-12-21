import React, { useEffect, useState} from "react";
import styled from "@emotion/styled";
import Error from './Error';
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import axios from 'axios';

const Botton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #FFF;
  transition: background-color .3s ease;

   &:hover {
       background-color: #326AC0;
       cursor: pointer;
   }
`;


const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {

    // state del listado de criptomoneda
    const [listacripto, guardarCriptomonedas] = useState([]);
    const [error, guardarError] = useState(false);

    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'ARS', nombre: 'Peso Argentino'},
        {codigo: 'EUR', nombre: 'Euro'}

    ]

    // Utilizar useMoneda
    const [ moneda, SelectMonedas] = useMoneda('Elige tu moneda', '', MONEDAS);
    // utilizar useCriptomoneda
    const [criptomoneda, SelectCripto] = useCriptomoneda ('Elige tu criptomoneda', '', listacripto);

    // llamado a la api
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            guardarCriptomonedas(resultado.data.Data);
        }
        consultarAPI();
    }, []);

    //cuando el usuario hace submit
    const cotizarMoneda = e => {
        e.preventDefault();
    // validar si ambos campos estan llenos
    if(moneda === '' || criptomoneda === '') {
        guardarError(true);
        return;
    }
    // caso contrario pasar los datos al componente principal
        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);

    }

    return (
        <form
        onSubmit={cotizarMoneda}
        > 
            { error ? <Error mensaje="Debe completar todos los campos!"/>: null }
            <SelectMonedas />
            <SelectCripto />
          <Botton 
             type="submit"
             value="Calcular" 
          />
        </form>
    );
}

export default Formulario