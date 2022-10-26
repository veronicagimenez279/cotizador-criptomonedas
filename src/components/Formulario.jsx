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

