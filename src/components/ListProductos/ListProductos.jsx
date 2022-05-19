import axios from "axios";
import React, { useEffect, useState } from "react";
import { firebase } from "../../firebase";

const ListProductos = ({ setProductoEditado }) => {
  const [productList, setproductList] = useState([]);
  const [id, setid] = useState("");
  const [edicion, setEdicion] = useState(false);
  
  const eliminar = async (id) => {
    try {
      const db = firebase.firestore();
      await db.collection("productos").doc(id).delete();
      const aux = productList.filter((item) => item.id !== id);
      setproductList(aux);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerDatos = async () => {
    try {
      const db = firebase.firestore();
      const data = await db.collection("productos").get();
      const arrayData = data.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      //console.log(arrayData)

      setproductList(arrayData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  });

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Imagen</th>
            <th scope="col">Codigo</th>
            <th scope="col">Nombre</th>
            <th scope="col">proveedor</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Fecha de vencimiento</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((producto) => {
            return (
              <tr key={producto.id}>
                <th scope="row"><img src="https://picsum.photos/50" alt="foto" /></th>
                <th scope="row">{producto.codigo}</th>
                <td>{producto.nombre}</td>
                <td>{producto.proveedor}</td>
                <td>{producto.precio}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.fecha}</td>
                <td>{producto.descripcion}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    value={producto.id}
                    onClick={() => setProductoEditado(producto)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => eliminar(producto.id)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListProductos;
