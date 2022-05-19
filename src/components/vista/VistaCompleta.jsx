import React, { useState } from 'react'
import FormProducto from '../FormProducto/FormProducto'
import Modal from '../FormProducto/Modal/Modal'
import ListProductos from '../ListProductos/ListProductos'

const VistaCompleta = () => {

    const [creacion, setcreacion] = useState(false)
    const [productoEditado, setProductoEditado] = useState(null)

  return (
    <>
        <div className='container container-fluid'>
            <header className='d-flex'>PRODUCTOS</header>

            <div className='row'>
                <div className='col-12'>
                    <FormProducto />
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <ListProductos setProductoEditado={setProductoEditado}/>
                </div>
            </div>
        </div>
        {productoEditado ? <Modal producto={productoEditado} setProductoEditado={setProductoEditado}/> : ''}
    </>
  )
}

export default VistaCompleta