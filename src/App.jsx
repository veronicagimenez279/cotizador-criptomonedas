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

  const [consultar, guardarConsulta] = useState(false)
  const [resultado, guardarResultado] = useState({})


  const { criptomoneda, moneda } = busqueda


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
        titulo='Cotizador Criptomonedas'
      />

      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsulta={guardarConsulta}

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