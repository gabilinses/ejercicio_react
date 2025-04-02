import { Link } from "react-router-dom";

const CuadroFoto = ({ titulo, imagen, btnText, btnLink }) => {
  return (
    <div className="text-center my-4" style={{ backgroundColor: "#EEF4F7", padding: "20px", borderRadius: "8px" }}>
      <h3 className="font-weight-bold" style={{ color: "#1D2427", marginBottom: "20px" }}>
        {titulo}
      </h3>
      <img src={imagen} alt={titulo} className="img-fluid my-3" style={{ maxWidth: "90%" }} />
      <Link to={btnLink}className="btn" style={{backgroundColor: "#7C8B93",color: "#EEF4F7",padding: "10px 20px",textDecoration: "none",borderRadius: "5px"}}>
        {btnText}
      </Link>
    </div>
  );
};

export default CuadroFoto;