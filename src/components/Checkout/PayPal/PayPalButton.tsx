import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { PayPalButtonsComponentProps } from "@paypal/paypal-js/types/components/buttons";

  

const PayPalButton = () => {

    const [{ isPending }] = usePayPalScriptReducer();
    const paypalbuttonTransactionProps: PayPalButtonsComponentProps  = { style: { layout: "vertical" },
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
       async onApprove(data: any, actions: { order: { capture: (arg0: {}) => Promise<{ payer: { name: { given_name: any; }; }; }>; }; }) {
        const details = actions.order.capture({});
        alert(
          "Transaction completed by" +
          ((await details)?.payer.name.given_name ?? "No details")
        );
        alert("Data details: " + JSON.stringify(data, null, 2));
      }
    };
    return (
      <>
        {isPending ? <h2>Load Smart Payment Button...</h2> : null}
        <PayPalButtons {...paypalbuttonTransactionProps} />
      </>
    );
  }
  
  export default PayPalButton