// // import { createClient } from '@sanity/client'
// // import axios from 'axios'
// // import dotenv from 'dotenv'
// // import { fileURLToPath } from 'url'
// // import path from 'path'

// // // Load environment variables from .env.local
// // const __filename = fileURLToPath(import.meta.url)
// // const __dirname = path.dirname(__filename)
// // dotenv.config({ path: path.resolve(__dirname, '../.env.local') })
// // // Create Sanity client
// // const client = createClient({
// //   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
// //   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
// //   useCdn: false,
// //   token: process.env.SANITY_API_TOKEN,
// //   apiVersion: '2021-08-31'
// // })

// // async function uploadImageToSanity(imageUrl) {
// //   try {
// //     console.log(`Uploading image: ${imageUrl}`)
// //     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
// //     const buffer = Buffer.from(response.data)
// //     const asset = await client.assets.upload('image', buffer, {
// //       filename: imageUrl.split('/').pop()
// //     })
// //     console.log(`Image uploaded successfully: ${asset._id}`)
// //     return asset._id
// //   } catch (error) {
// //     console.error('Failed to upload image:', imageUrl, error)
// //     return null
// //   }
// // }

// // async function importData() {
// //   try {
// //     console.log('Fetching products from Dummy JSON API...')
// //     const response = await axios.get('https://dummyjson.com/products')
// //     const products = response.data.products // Dummy JSON returns products in a 'products' field
// //     console.log(`Fetched ${products.length} products`)
// //     for (const product of products) {
// //       console.log(`Processing product: ${product.title}`)
// //       let imageRef = null
// //       if (product.image) {
// //         imageRef = await uploadImageToSanity(product.image)
// //       }
// //       const sanityProduct = {
// //         _type: 'product',
// //         id: product.id, 
// //         title: product.title,
// //         description: product.description,
// //         discountedPrice: product.discountedPrice || (product.price * (1 - product.discountPercentage / 100)), // Calculating discount if not provided
// //         price: product.price,
// //         category: product.category,
// //         image: imageRef ? {
// //           _type: 'image',
// //           asset: {
// //             _type: 'reference',
// //             _ref: imageRef,
// //           },
// //         } : undefined,
// //       }
// //       console.log('Uploading product to Sanity:', sanityProduct.title)
// //       const result = await client.create(sanityProduct)
// //       console.log(`Product uploaded successfully: ${result._id}`)
// //     }
// //     console.log('Data import completed successfully!')
// //   } catch (error) {
// //     console.error('Error importing data:', error)
// //   }
// // }

// // importData()





// import { createClient } from '@sanity/client';
// import axios from 'axios';
// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// import path from 'path';

// // Load environment variables from .env.local
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// // Create Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
//   apiVersion: '2021-08-31',
// });

// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`);
//     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
//     const buffer = Buffer.from(response.data);
//     const asset = await client.assets.upload('image', buffer, {
//       filename: imageUrl.split('/').pop(),
//     });
//     console.log(`Image uploaded successfully: ${asset._id}`);
//     return asset._id;
//   } catch (error) {
//     console.error('Failed to upload image:', imageUrl, error);
//     return null;
//   }
// }

// async function importData() {
//   try {
//     console.log('Fetching products from Layan ki API...');
//     const response = await axios.get('https://layan-ki-api.vercel.app/api/products');
//     const products = response.data.products;
//     console.log(`Fetched ${products.length} products`);

//     for (const product of products) {
//       console.log(`Processing product: ${product.title}`);
//       let imageRef = null;

//       // Upload the first image from the images array if available
//       if (product.images && product.images.length > 0) {
//         imageRef = await uploadImageToSanity(product.images[0]);
//       }

//       const sanityProduct = {
//         _type: 'productsData',
//         id: product.id.toString(),
//         title: product.title,
//         description: product.description,
//         discountedPrice: product.price * (1 - product.discountPercentage / 100),
//         price: product.price,
//         category: product.category,
//         // slug: product.title,
//         image: imageRef
//           ? {
//               _type: 'image',
//               asset: {
//                 _type: 'reference',
//                 _ref: imageRef,
//               },
//             }
//           : undefined,
//       };

//       console.log('Uploading product to Sanity:', sanityProduct.title);
//       const result = await client.create(sanityProduct);
//       console.log(`Product uploaded successfully: ${result._id}`);
//     }
//     console.log('Data import completed successfully!');
//   } catch (error) {
//     console.error('Error importing data:', error);
//   }
// }

// importData();





import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31'
});


async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop()
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function importData() {
  try {
    console.log('migrating data please wait...');

    // API endpoint containing car data
    // const response = await axios.get("https://layan-ki-api.vercel.app/api/products");
    // const products = response.data.data;
    // console.log("products ==>> ", products);
    const response = await fetch("https://layan-ki-api.vercel.app/api/products");
  const products =await response.json();
  console.log("products ==>> ", products);

    for (const product of products) {
      let imageRef = null;
      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }

      const sanityProduct = {
        _type: 'productsData',
        id: product.id,  // Unique identifier for the product
        name: product.name,  // Product name
        price: product.price,  // Original price
        oldPrice: product.oldPrice,  // Previous price (optional)
        rating: product.rating,  // Rating (e.g., '4.6')
        stockStatus: product.stockStatus,  // Stock status ('In Stock' or 'Out of Stock')
        description: product.description,  // Detailed product description
        image: imageRef ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageRef,  // Reference to the image asset
          },
        } : undefined,  // Handle image reference if exists
      };
      

      await client.create(sanityProduct);
    }

    console.log('Data migrated successfully!');
  } catch (error) {
    console.error('Error in migrating data ==>> ', error);
  }
}

importData();