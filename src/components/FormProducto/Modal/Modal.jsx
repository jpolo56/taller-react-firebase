import React, { useEffect, useState } from "react";
import {firebase} from '../../../firebase'

const Modal = ({ producto, setProductoEditado }) => {
  const productoId = producto.id;
  const [nombre, setnombre] = useState(producto.nombre);
  const [proveedor, setproveedor] = useState(producto.proveedor);
  const [precio, setprecio] = useState(producto.precio);
  const [cantidad, setcantidad] = useState(producto.cantidad);
  const [fecha, setfecha] = useState(producto.fecha);
  const [descripcion, setdescripcion] = useState(producto.descripcion);
  const [codigo, setcodigo] = useState(producto.codigo);
  const [productoE, setproductoE] = useState(null)


  useEffect(() => {
    setproductoE({
      nombre: nombre,
      proveedor: proveedor,
      precio: precio,
      cantidad: cantidad,
      fecha: fecha,
      descripcion: descripcion,
      codigo: codigo
    })
  
    
  })
  
  
  const editarProducto = async () =>{
    

   

     try{
         const db = firebase.firestore()
         await db.collection('productos').doc(productoId).update(productoE)
    

     }catch(error){
         console.log(error)
     }

    
} 


  return (
    <>
      <div className="modal d-block" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Editar Producto</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setProductoEditado(null)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-control">
                
                <div className="row">
                  <div className="col 3">
                    <label htmlFor="nombreProducto" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombreProducto"
                      placeholder="Pera"
                      value={nombre}
                      onChange={(e) => {
                        setnombre(e.target.value);
                        console.log(nombre);
                      }}
                    ></input>
                  </div>
                  <div className="col 3">
                    <label htmlFor="descripcionProducto" className="form-label">
                      Proveedor
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="descripcionProducto"
                      placeholder="EMPRESA"
                      value={proveedor}
                      onChange={(e) => setproveedor(e.target.value)}
                    ></input>
                  </div>
                  <div className="col 3">
                    <label htmlFor="precio" className="form-label">
                      Precio
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="precio"
                      placeholder="8"
                      value={precio}
                      onChange={(e) => setprecio(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col 3">
                    <label htmlFor="cantidad" className="form-label">
                      Cantidad
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="cantidad"
                      placeholder="8"
                      value={cantidad}
                      onChange={(e) => setcantidad(e.target.value)}
                    ></input>
                  </div>
                  <div className="col 3">
                    <label htmlFor="precio" className="form-label">
                      FECHA VENCIMIENTO
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="fecha"
                      placeholder="8"
                      value={fecha}
                      onChange={(e) => {
                        setfecha(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="col 3">
                    <label htmlFor="codigo" className="form-label">
                      CODIGO PRODUCTO
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="codigo"
                      placeholder="8"
                      value={codigo}
                      onChange={(e) => setcodigo(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col 3">
                    <label htmlFor="Descripcion" className="form-label">
                      Descripcion
                    </label>
                    <textarea
                      className="form-control"
                      id="Descripcion"
                      value={descripcion}
                      onChange={(e) => setdescripcion(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={editarProducto}
                  >
                    EDITAR
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={()=>setProductoEditado(null)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
