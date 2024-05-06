import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerContainer bg-[#F5F5F5] p-8 rounded-3xl">
        <div className="flex flex-col min-[750px]:flex-row justify-between gap-8">
            <div className="text-[#1C1C1C]"><b>©</b> Talup 2023. All rights reserved</div>
            <div className="flex space-x-8">
                <Link to="/tnc">Terms & Conditions</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer