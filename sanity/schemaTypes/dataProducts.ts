// export const productsData =  {
//     name: 'productsData',
//     type: 'document',
//     title: 'ProductsData',
//     fields: [
//       {
//         name: 'id',
//         type: 'string',
//         title: 'Product ID',
//       },
//       {
//         name: 'title',
//         type: 'string',
//         title: 'Product Title',
//       },
//       {
//         name: 'description',
//         type: 'text',
//         title: 'Description',
//       },
//       // {
//       //   name: 'slug',
//       //   type: 'slug',
//       //   title: 'slug',
//       //   source:{
//       //     name:"title"
//       //   }
//       // },
//       {
//         name: 'discountedPrice',
//         type: 'number',
//         title: 'Discounted Price',
//       },
//       {
//         name: 'price',
//         type: 'number',
//         title: 'Original Price',
//       },
//       {
//         name: 'category',
//         type: 'string',
//         title: 'Category',
//       },
//       {
//         name: 'image',
//         type: 'image',
//         title: 'Product Image',
//         options: {
//           hotspot: true,
//         },
//       },
//     ],
//   };
  

export const productsData = {
  name: 'productsData',
  type: 'document',
  title: 'ProductsData',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'Product ID',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Original Price',
    },
    {
      name: 'oldPrice',
      type: 'number',
      title: 'Old Price',
    },
    {
      name: 'rating',
      type: 'string',
      title: 'Rating',
    },
    {
      name: 'stockStatus',
      type: 'string',
      title: 'Stock Status',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
      options: {
        hotspot: true,
      },
    },
  ],
};
