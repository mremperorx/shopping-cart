import {  PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import PayPalButton from "./PayPalButton";



const paypalScriptOptions: PayPalScriptOptions = {
  "client-id":"AfrBINDzhhCNSljvEalntU5XI79wcP6b005LGNlgin6A3fTn3KaSigasDjX4f0hZ4OJpHtWPxuh05PZV",
  currency: "USD"
};

const PayPal = ()  => {
  return (
    <div className="text-center mt-20">
      <PayPalScriptProvider options={paypalScriptOptions}>
        <PayPalButton />
      </PayPalScriptProvider>
    </div>
  );
}


export default PayPal