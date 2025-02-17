// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2025-01-27.acacia",
// });

// export async function POST(req: Request) {
//   try {
//     const { items } = await req.json();

//     const lineItems = items.map((item: any) => ({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: item.productName,
//           images: [item.image], 
//         },
//         unit_amount: item.price * 100, 
//       },
//       quantity: item.quantity,
//     }));

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: lineItems,
//       mode: "payment",
//       success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success_url`, // Ensure full URL
//       cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel_url`, // Ensure full URL
//     });

//     return NextResponse.json({ id: session.id });
//   } catch (error) {
//     console.error("Stripe Error:", error);
//     return NextResponse.json({ error: "Failed to create Stripe session" }, { status: 500 });
//   }
// }








import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia", // Use the latest API version that is suitable for your needs
});

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    // Log the items data to inspect the structure
    console.log("Items received:", items);

    // Validate that the 'items' array is not empty and each item has required data
    if (!items || items.length === 0) {
      throw new Error("No items provided in the cart.");
    }

    const lineItems = items.map((item: any) => {
      // Check for missing or invalid product data
      if (!item.name || !item.price || !item.quantity || !item.image || !item.image.asset) {
        console.error("Invalid item details:", item); // Log the problematic item
        throw new Error("Missing required product details.");
      }

      // Extract image URL from asset reference (you might need to customize this if you have a CDN or storage service)
      const imageUrl = item.image.asset._ref; // Replace this logic as needed to get the actual image URL

      return {
        price_data: {
          currency: "usd", // Or your currency code
          product_data: {
            name: item.name, // Ensure 'productName' is passed correctly
            images: [imageUrl], // Ensure 'image' URL is passed correctly
          },
          unit_amount: item.price * 100, // Convert price to cents
        },
        quantity: item.quantity, // Quantity of the item in the cart
      };
    });

    // Create the Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success_url`, // Ensure success URL is correct
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel_url`, // Ensure cancel URL is correct
    });

    return NextResponse.json({ id: session.id });
  } catch (error: unknown) {
    // Type guard to check if the error is an instance of Error
    if (error instanceof Error) {
      console.error("Stripe Error:", error);
      return NextResponse.json({ error: error.message || "Failed to create Stripe session" }, { status: 500 });
    }

    // In case error is not an instance of Error
    console.error("Unknown error:", error);
    return NextResponse.json({ error: "An unknown error occurred." }, { status: 500 });
  }
}
