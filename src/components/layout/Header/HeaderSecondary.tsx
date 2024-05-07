import { useNavigate } from "react-router-dom"
import logo from '../../../images/logo.svg';
import close from "../../../images/Close.svg";
import './Header.css';

function HeaderSecondary() {
  const navigate = useNavigate();
  return (
    <div className="headerPrimary p-3">
      <div className="rounded-full p-4 min-[400px]:p-[16.97px_20.89px_16.97px_52.22px] flex items-center justify-between">
        <div className="logo w-32">
          <img src={logo} alt="" />
        </div>
        <button className="rounded-full p-2 hover:bg-gray-50 border" onClick={()=>navigate("/")}>
          <img src={close} alt="" />
        </button>
      </div>
    </div>
  )
}

export default HeaderSecondary