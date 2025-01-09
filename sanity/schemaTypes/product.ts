 

// export const product = {
//     name:"Product Name",
//     title:"Product Title",
//     price:"Price",
//     orignalPrice:"Orignal Price",
//     type:"document",
// }

import { title } from "process";
import { defineType , defineField} from 'sanity'




export const product = {
    name:"product",
    title:"products",
    type:"document",

    fields:[
        defineField({
            
                name:"name",
                type:"string",
                title:"Product Name"
            }),


            defineField({
                name:"title",
                type:"string",
                title:"Product Title"
            }),

            defineField({
                name:"price",
                type:"number",
                title:"Product Price"
            }),
            defineField({
                name:"orignalPrice",
                type:"number",
                title:"Product Orignal Price"
            }),
            defineField({
                name:"description",
                type:"string",
                title:"description"
            }),
            defineField({
                name:"stock",
                type:"string",
                title:"stock"
            }),
            defineField({
                name:"image",
                type:"image",
                title:"image",
                options:{
                    hotspot:true
                }
            }),

            defineField({
                name:"Slug",
                type:"slug",
                title:"slug",
                options:{
                    source:"name"
                }
            }),


    ]
}