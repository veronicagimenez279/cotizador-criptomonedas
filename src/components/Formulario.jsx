import { useState } from "react"

export const Formulario = ({ busqueda, guardarBusqueda, guardarConsulta }) => {


    // hook error
    const [error, guardarError] = useState(false)

    // extraer moneda y criptomoneda
    const { criptomoneda, moneda } = busqueda

    // funcion que coloca los elementos en el state
    const handleChange = (e) => {
        // actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario da un submit al formulario
    const handleSubmit = e => {
        e.preventDefault()

        // validar que esten todos los datos

        if (criptomoneda.trim() === '' || criptomoneda.trim() === '') {
            guardarError(true)
            return
        }

        guardarError(false)

        guardarConsulta(true)


        // pasarlo al componente principal
    }



    return (
        <form onSubmit={handleSubmit}
        >
            {
                error
                    ?
                    <p className="red-text text-accent-4">* Todos los campos son obligatorios *</p>
                    :
                    null


            }

            <div className="input-field col s12">
                <select
                    className="browser-default"
                    name="criptomoneda"
                    id="criptomoneda"
                    value={criptomoneda}
                    onChange={handleChange}
                >
                    <option value="disabled selected">Selecione una Criptomoneda</option>
                    <option value="BTC">Bitcoin</option>
                    <option value="ETH">Ethereum</option>
                    <option value="USDT">Tether</option>
                    <option value="BNB">Binance Coin</option>
                    <option value="XRP">XRP</option>
                    <option value="USDC">USD Coin</option>
                    <option value="BUSD">BUSD</option>
                    <option value="SOL">Solana</option>
                    <option value="ADA">Cardano</option>
                    <option value="DOGE">Dogecoin</option>
                    <option value="MATIC">Polygon</option>
                    <option value="APT">Aptos</option>
                    <option value="DOT">Polkadot</option>
                    <option value="FTT">FTX Token</option>
                    <option value="LINK">Chainlink</option>
                    <option value="AVAX">Avalanche</option>
                    <option value="UNI">Uniswap Protocol Token</option>
                    <option value="QNT">Quant</option>
                    <option value="SHIB">Shiba Inu</option>
                    <option value="TRX">TRON</option>

                    {/* <option value={nombres[0][0]}>{nombres[0][1]}</option>
                    <option value={nombres[1][0]}>{nombres[1][1]}</option>
                    <option value={nombres[2][0]}>{nombres[2][1]}</option>
                    <option value={nombres[3][0]}>{nombres[3][1]}</option>
                    <option value={nombres[4][0]}>{nombres[4][1]}</option>
                    <option value={nombres[5][0]}>{nombres[5][1]}</option>
                    <option value={nombres[6][0]}>{nombres[6][1]}</option>
                    <option value={nombres[7][0]}>{nombres[7][1]}</option>
                    <option value={nombres[8][0]}>{nombres[8][1]}</option>
                    <option value={nombres[9][0]}>{nombres[9][1]}</option>
                    <option value={nombres[10][0]}>{nombres[10][1]}</option>
                    <option value={nombres[11][0]}>{nombres[11][1]}</option>
                    <option value={nombres[12][0]}>{nombres[12][1]}</option>
                    <option value={nombres[13][0]}>{nombres[13][1]}</option>
                    <option value={nombres[14][0]}>{nombres[14][1]}</option>
                    <option value={nombres[15][0]}>{nombres[15][1]}</option>
                    <option value={nombres[16][0]}>{nombres[16][1]}</option>
                    <option value={nombres[17][0]}>{nombres[17][1]}</option>
                    <option value={nombres[18][0]}>{nombres[18][1]}</option>
                    <option value={nombres[19][0]}>{nombres[19][1]}</option> */}
                </select>
                <label htmlFor="criptomoneda"></label>
            </div>

            <div className="input-field col s12">
                <select
                    className="browser-default"
                    name="moneda"
                    id="moneda"
                    value={moneda}
                    onChange={handleChange}
                >
                    <option value="disabled selected">Seleccione la moneda</option>
                    <option value="ARS">Pesos Argentinos</option>
                    <option value="USD">Dolares</option>
                </select>
                <label htmlFor="moneda"></label>
            </div>



            <div className="input-field col s12">
                <input
                    type="submit"
                    value="ENVIAR"
                    className="waves-effect waves-light btn-large btn-block pink"
                />
            </div>
        </form>
    )
}

