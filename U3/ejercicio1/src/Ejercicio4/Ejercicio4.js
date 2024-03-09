import './Ejercicio4.css'

export default function Ejercicio4({imagen, titulo, texto}) {
  return (
    <>
    <div className="card" style={{width: "280px"}}>

        <img  className="card-img-top" src={imagen} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title" >{titulo}</h5>

            <p className="card-text">{texto}</p>

            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    </>
    
  );
}


