import HeaderSecondary from '../layout/Header/HeaderSecondary'
import "./Success.css";
import success from "../../images/success.svg";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {

    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        if (count === 0) {
            navigate("/");
        }
        const interval = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000)
        return () => clearInterval(interval);
    }, [count])


    return (
        <>
            <HeaderSecondary />
            <div className="registerSuccess p-4">
                <div className="flex flex-col items-center mx-auto">
                    <img src={success} alt="" />
                    <div className="py-5 flex flex-col items-center max-w-[718px] space-y-4">
                        <h2 className="text-[#2DA950]">Success Submitted</h2>
                        <h3 className="text-[#1C1C1C] text-[45px] sm:text-[56px]">Congratulations</h3>
                        <p className="text-[#727272] text-lg sm:text-[24px]">Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
                    </div>
                </div>
                <div>
                    Redirecting you to Homepage in <b>{count} Seconds</b>
                </div>
            </div>
        </>
    )
}

export default Success