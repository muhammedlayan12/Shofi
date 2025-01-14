import { type SchemaTypeDefinition } from 'sanity'
import {product} from "./product";
import { productsData } from './dataProducts';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,productsData],
}


 