import { PayPalButtons, usePayPalScriptReducer} from "@paypal/react-paypal-js";
import { PayPalButtonsComponentProps } from "@paypal/paypal-js/types/components/buttons";


 export default function PayPalButton() {
 
  const [{ isPending }] = usePayPalScriptReducer();
  const paypalbuttonTransactionProps: PayPalButtonsComponentProps = {
    style: { layout: "vertical" },
    createOrder(data: any, actions: { order: { create: (arg0: { purchase_units: { amount: { value: string; }; }[]; }) => any; }; }) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: "0.01"
            }
          }
        ]
      });
    },
    onApprove(data: any, actions: { order: { capture: (arg0: {}) => Promise<any>; }; }) {
  
      return actions.order.capture({}).then((details: { payer: { name: { given_name: any; }; }; }) => {
        alert(
          "Transaction completed by" +
            (details?.payer.name.given_name ?? "No details")
        );

        alert("Data details: " + JSON.stringify(data, null, 2));
      });
    }
  };
  return (
    <>
      {isPending ? <h2>Load Smart Payment Button...</h2> : null}
      <PayPalButtons {...paypalbuttonTransactionProps}
      style={{ color: "blue", shape: "pill", label: "pay", height: 40 }}
      />
    </>
  );
}
