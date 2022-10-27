import React from 'react'

export const Crypto = ({ resultado }) => {

    const img = `https://www.cryptocompare.com${resultado.IMAGEURL}`
    if (Object.keys(resultado).length === 0) return null
    return (
        <div className="col s12 m8 offset-m2 l12">
            <div className="card-panel grey lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                    <div className="col s4 text-align center">
                        <img src={img} alt="" className="circle responsive-img" />
                        {resultado.FROMSYMBOL}
                    </div>
                    <div className="col s10 left-align">
                        <span className="black-text s2">
                            <blockquote className='text-bold'>
                                Cotizacion del dia: {resultado.PRICE}
                                <p></p>
                                Precio más alto del dia: {resultado.HIGHDAY}
                                <p></p>
                                Precio más bajo del dia: {resultado.LOWDAY}
                                <p></p>
                                Variación de las últimas 24 horas: {resultado.VOLUME24HOUR}
                            </blockquote>
                        </span>


                    </div>
                </div>
                <div className='center-align grey-text'>
                    Ultima actualizacion: {resultado.LASTUPDATE}
                </div>
            </div>
        </div>
    )
}
// - Cotización del día
// - Precio más alto del día
// - Precio más bajo del día
// - Variación última 24hs.