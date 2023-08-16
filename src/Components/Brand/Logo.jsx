import Logotipe from "../../Assets/imgs/Brand.svg";

const Logo = ({ logotipe }) => {
  return (
    <img className="img-fluid" src={logotipe || Logotipe} alt="Logotipe" />
  );
};

export default Logo;
