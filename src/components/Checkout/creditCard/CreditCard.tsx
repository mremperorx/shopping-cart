import React, {useState} from 'react';
import Cleave from 'cleave.js/react';


import './CreditCard.css';
import { imageUrls } from './CreditCardImges';



const CreditCard = () => {
  const [creditCardNum, setCreditCardNum] = useState('#### #### #### ####');
  const [cardType, setCardType] = useState('')
  const [cardHolder, setCardHolder] = useState('Your Full Name');
  const [expireMonth, setExpireMonth] = useState('MM');
  const [expireYear, setExpireYear] = useState('YYYY');
  const [cardTypeUrl, setCardTypeUrl] = useState('https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png');
  
  const handleNum = (e: { target: { rawValue: React.SetStateAction<string>; }; }) => {
    setCreditCardNum(e.target.rawValue);
    
  }

  const handleType = (type: React.SetStateAction<string>) => {
    setCardType(type);
    console.log(type);

    if(type === "visa") {
      setCardTypeUrl(imageUrls[0]);
      console.log("Visa")
    } else if(type === "mastercard") {
      setCardTypeUrl(imageUrls[1]);
      console.log("Mastercard")
    } else if(type === "discover") {
      setCardTypeUrl(imageUrls[2]);
      console.log("Discover")
    } else if(type === "amex") {
      setCardTypeUrl(imageUrls[3]);
      console.log("Amex")
    } else if(type === "diners") {
      console.log("Diners")
      setCardTypeUrl(imageUrls[4])
    } else if(type === "jcb") {
      console.log("JCB");
      setCardTypeUrl(imageUrls[5]);
    }
  }
  
  const handleCardHolder = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCardHolder(e.target.value);
  }

  const handleExpMonth = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setExpireMonth(e.target.value);
  }

  const handleExpYear = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setExpireYear(e.target.value);
  }


  return (
       <div className="flex">
        <form id="form">
            <div id="card">
                <div className="header">
                    <div className="sticker"></div>
                    <div>
                      <img className="logo" src={cardTypeUrl} alt="Card logo"/>
                    </div>
                </div>
                <div className="body">
                    <h2 id="creditCardNumber">{creditCardNum}</h2>
                </div>
                <div className="footer">
                    <div>
                        <h5>Card Holder</h5>
                        <h3>{cardHolder}</h3>
                    </div>
                    <div>
                        <h5>Expires</h5>
                        <h3>{expireMonth} / {expireYear}</h3>
                    </div>
                </div>
            </div>

            <div className="input-container mt">
                <h4>Enter card number</h4>
                <Cleave
                  
                  options={{
                    creditCard: true,
                    onCreditCardTypeChanged: handleType
                  }}
                  onChange={handleNum}
                  placeholder="Please enter your credit card number"
                />
            </div>

            <div className="input-container">
                <h4>Card Holder</h4>
                <input onChange={handleCardHolder} type="text" placeholder="Please enter your full name" required/>
            </div>

            <div className="input-grp">
                <div className="input-container">
                    <h4>Expiration Year</h4>
                    <select value={expireYear} onChange={handleExpYear}>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                </div>
                <div className="input-container">
                <h4>Month</h4>
                <select value={expireMonth} onChange={handleExpMonth}>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                    </select>
                </div>
                <div className="input-container">
                    <h4>CVV</h4>
                    <input type="password" placeholder="CVV" required/>
                </div>
            </div>

            <button>{`Submit ${cardType} payment`}</button>
        </form>
    </div>
  );
}

export default CreditCard;