import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import Select from 'react-select';
import countryList from 'react-select-country-list';
import "./style.css";

export default function OtpVerification() {
    // const link="{{accountInfo.phoneNumber}}"

    const [number, setNumber] = useState('');
    const [numberSubmit, setNumberSubmit] = useState(false);
    const [otp, setOtp] = useState('');
    const [validOtp, setValidOtp] = useState(false);
    const opt = countryList().getData();
    
    const [options, setOption] = useState({
    option: opt,
    value: null,
    });
    const history = useHistory(); 
    const handleVerify = () =>history.push("/verified"); 
    const handleSubmit = (e) => {
    e.preventDefault();
    setNumberSubmit(true);

    if(otp.length===5)
    setValidOtp(true)

    setTimeout(function() {
        setValidOtp(false)
    }, 5000);
    }

    const changeHandler = value => {
    setOption({...options, value})
    }

    const handleClick = () => {
    setNumberSubmit(false);
    }

    return (
        <div>
            {
                (otp.length === 5 && otp%2 !==0 && validOtp && (<h2 className="invalid-otp">Invalid OTP</h2>))
            }
            {
                (otp.length === 5 && otp%2 ===0 && validOtp && (handleVerify()))
            }
            {/* {
                otp.length === 5 && otp%2 === 0 && validOtp && <h2>Hello, Your Phone number is successfully verified</h2>
            } */}
                <div className="parent-div"> 
                <div className="main">
                <div className="child-div">
                        <div className="header">
                            <div className="header-section">
                                {
                                    numberSubmit === true ? (<div className="left">Enter The Code</div>) : 
                                    (
                                        <div className="left">Log In With with Mobile Phone</div>
                                    ) 
                                }
                                <div className="right"><button class="bt"><i class="fas fa-times"></i></button></div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="action-space">
                            <div className="space">
                                <div className="OTP">
                                {
                                    numberSubmit === true ? (
                                    <div className="upper-content">
                                    Enter the code sent to your phone <div onClick={handleClick}>{number}  <i class="fas fa-pencil-alt"></i></div>
                                    </div>
                                    ) : (
                                    <div className="upper-content">
                                    A Code will be sent to your Mobile phone number
                                    </div>
                                    )
                                }
                                {
                                    numberSubmit === true ? (
                                    <div className="input-area">
                                    <input type="tel" id="phone" name="phone" pattern="[0-9]{5}" onChange={e => setOtp(e.target.value)} required></input>
                                    </div>
                                    ) : (
                                    <div className="input-area1">
                                        <div className="dropdown">
                                        <Select
                                            options={options.option}
                                            value={options.value}
                                            onChange={changeHandler}
                                            required
                                        />
                                        </div>
                                         <div className="field"><input type="tel" id="phone" name="phone" value={number} onChange={event => setNumber(event.target.value)} pattern="[0-9]{10}" required></input></div> 
                                    </div>
                                    )
                                }
                                    {
                                       numberSubmit === true  ? <div className="btn"><input type="submit" className="btnn" value="Verify"/></div>  : <><div className="btn"><input type="submit" className="btnn" value="Get The Code"/></div><div className="footer">Didn't get the code? <a href="#">Click here</a></div></>
                                    }

                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div> 
                </div>
        </div>
    )
}

