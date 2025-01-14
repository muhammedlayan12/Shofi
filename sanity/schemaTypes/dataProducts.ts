export const productsData =  {
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
        name: 'title',
        type: 'string',
        title: 'Product Title',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      // {
      //   name: 'slug',
      //   type: 'slug',
      //   title: 'slug',
      //   source:{
      //     name:"title"
      //   }
      // },
      {
        name: 'discountedPrice',
        type: 'number',
        title: 'Discounted Price',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Original Price',
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
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
  