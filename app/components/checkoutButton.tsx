// "use client";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe("pk_test_51QoAeFAihC5EsjjeZIVkibtDmEon3AHr9Jw6kPm5Fy0Skxj4M2Bt54KAGqS2TKACFCv7LELgJAmxN1BXMBCWYR1300K8XXqhc5");

// export default function CheckoutButton() {
//   const handleCheckout = async () => {
//     const stripe = await stripePromise;

//     const response = await fetch("/api/checkout", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         items: [
//           {
//             productName: "T-Shirt",
//             image: "https://example.com/tshirt.jpg",
//             price: 2000, // $20.00
//             quantity: 1,
//           },
//         ],
//       }),
//     });

//     const data = await response.json();
//     if (!response.ok) {
//       console.error("Checkout Error:", data.error);
//       return;
//     }

//     const result = await stripe?.redirectToCheckout({ sessionId: data.id });

//     if (result?.error) {
//       console.error("Stripe Redirect Error:", result.error);
//     }
//   };

//   return (
//     <button onClick={handleCheckout} className="bg-blue-500 text-white p-3 rounded">
//       Checkout with Stripe
//     </button>
//   );
// }

"use client";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51QoAeFAihC5EsjjeZIVkibtDmEon3AHr9Jw6kPm5Fy0Skxj4M2Bt54KAGqS2TKACFCv7LELgJAmxN1BXMBCWYR1300K8XXqhc5");

export default function CheckoutButton({ checkoutItems }: { checkoutItems: any[] }) {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: checkoutItems, // Pass the actual items from the cart
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("Checkout Error:", data.error);
      return;
    }

    const result = await stripe?.redirectToCheckout({ sessionId: data.id });

    if (result?.error) {
      console.error("Stripe Redirect Error:", result.error);
    }
  };

  return (
    <button onClick={handleCheckout} className="bg-blue-500 text-white p-3 rounded">
      Checkout with Stripe
    </button>
  );
}
