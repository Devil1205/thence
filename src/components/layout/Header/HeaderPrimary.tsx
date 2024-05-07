import { useNavigate } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import './Header.css';

function HeaderPrimary() {
  const navigate = useNavigate();
  return (
    <div className="headerPrimary p-3">
      <div className="border border-[#EAEAEA] rounded-full p-[16.97px_20.89px_16.97px_52.22px] flex flex-col items-center justify-between min-[560px]:flex-row gap-4">
        <div className="logo w-32">
          <img src={logo} alt="" />
        </div>
        <div className="buttonsGroup space-x-4 space-y-4 min-[560px]:space-y-0">
          <button className="thenceBtn thenceBtnPrimary" onClick={()=>{navigate("/register")}}>Get Projects</button>
          <button className="thenceBtn thenceBtnSecondary">Onboard Talent</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderPrimary