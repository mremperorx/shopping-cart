import {  PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";




const paypalScriptOptions: PayPalScriptOptions = {
  "client-id":"AfrBINDzhhCNSljvEalntU5XI79wcP6b005LGNlgin6A3fTn3KaSigasDjX4f0hZ4OJpHtWPxuh05PZV",
  currency: "USD"
};

export default function PayPal() {
  return (
    <div className="text-center mt-20">
      <PayPalScriptProvider options={paypalScriptOptions}>
        <PayPalButtons  style={{ color: "blue", shape: "pill", label: "pay", height: 40 }}/>
      </PayPalScriptProvider>
      <img className="mx-auto" src="https://i.ibb.co/SJh0BtX/qrcode.png" />
    </div>
    
  );
}
