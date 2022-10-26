import { useEffect, useState } from 'react'

import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { Crypto } from "./components/Crypto"
function App() {

  // state del formulario
  const [busqueda, guardarBusqueda] = useState({
    criptomoneda: '',
    moneda: ''
  })

  // const [nombres, guardarNombres] = useState({})
  const [consultar, guardarConsulta] = useState(false)
  const [resultado, guardarResultado] = useState({})




  const { criptomoneda, moneda } = busqueda


  // useEffect(() => {
  //   const consultarAPInombres = async () => {
  //     const url_nombres = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
  //     const respuesta_nombres = await fetch(url_nombres)
  //     const resultado_nombres = await respuesta_nombres.json()
  //     const nombres = (resultado_nombres.Data.map(coin => [`${coin.CoinInfo.Name}`, `${coin.CoinInfo.FullName}`]))
  //     guardarNombres(nombres)
  //   }
  //   consultarAPInombres();
  // }, [])


  useEffect(() => {
    const consultarAPI = async () => {
      //api get la criptomoneda que pide el usuario
      const url = ` https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      guardarResultado(resultado.RAW[criptomoneda][moneda])

    }
    consultarAPI();
  }, [consultar])



  return (

    <>
      <Header
        titulo='Cotizacion Criptomonedas'
      />

      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsulta={guardarConsulta}
              // guardarNombres={guardarNombres}
              // nombres={nombres}

              />
            </div>



            <div className="col m6 s12">
              <Crypto
                resultado={resultado}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App