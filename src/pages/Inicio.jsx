import CuadroFoto from "../elements/CuadroFoto";

const Inicio = () => {
  return (
    <div className="container py-5">
      <div className="row">
          <div className="col-md-4">
             <CuadroFoto titulo={"Aretes"} imagen={"/assets/img/Aretes.jpg"} btnText={"Ver mas"} btnLink={"/Accesorios/Aretes"}/>
          </div>
          <div className="col-md-4">
              
          </div>
          <div className="col-md-4">
             
          </div>
      </div>
    </div>
  );
}
export default Inicio;