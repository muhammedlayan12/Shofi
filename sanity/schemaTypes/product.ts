 

// // export const product = {
// //     name:"Product Name",
// //     title:"Product Title",
// //     price:"Price",
// //     orignalPrice:"Orignal Price",
// //     type:"document",
// // }

// import { title } from "process";
// import { defineType , defineField} from 'sanity'




// export const product = {
//     name:"product",
//     title:"products",
//     type:"document",

//     fields:[
//         defineField({
            
//                 name:"name",
//                 type:"string",
//                 title:"Product Name"
//             }),

//             defineField({
            
//                 name:"id",
//                 type:"number",
//                 title:"Product id"
//             }),

//             defineField({
//                 name:"title",
//                 type:"string",
//                 title:"Product Title"
//             }),

//             defineField({
//                 name:"price",
//                 type:"number",
//                 title:"Product Price"
//             }),
//             defineField({
//                 name:"Slug",
//                 type:"slug",
//                 title:"Product slug",
//                 source:{
//                     name:"name"
//                 }
//             }),
//             defineField({
//                 name:"orignalPrice",
//                 type:"number",
//                 title:"Product Orignal Price"
//             }),
//             defineField({
//                 name:"description",
//                 type:"string",
//                 title:"description"
//             }),
//             defineField({
//                 name:"stock",
//                 type:"string",
//                 title:"stock"
//             }),
//             defineField({
//                 name:"image",
//                 type:"image",
//                 title:"image",
//                 options:{
//                     hotspot:true
//                 }
//             }),

//             // defineField({
//             //     name:"Slug",
//             //     type:"slug",
//             //     title:"slug",
//             //     options:{
//             //         source:"id"
//             //     }
//             // }),


//     ]
// }





import { defineType, defineField } from 'sanity';

export const product = defineType({
    name: "product",
    title: "Products",
    type: "document",

    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Product Name"
        }),
        defineField({
            name: "id",
            type: "number",
            title: "Product ID"
        }),
        defineField({
            name: "title",
            type: "string",
            title: "Product Title"
        }),
        defineField({
            name: "price",
            type: "number",
            title: "Product Price"
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Product Slug",
            options: {
                source: "name"
            }
        }),
        defineField({
            name: "orignalPrice",
            type: "number",
            title: "Product Original Price"
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Description"
        }),
        defineField({
            name: "stock",
            type: "string",
            title: "Stock"
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Image",
            options: {
                hotspot: true  
            }
        }),
    ]
});
