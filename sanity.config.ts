// // 'use client'

// // /**
// //  * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
// //  */

// // import {visionTool} from '@sanity/vision'
// // import {defineConfig} from 'sanity'
// // import {structureTool} from 'sanity/structure'

// // // Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// // import {apiVersion, dataset, projectId} from './sanity/env'
// // import {schema} from './sanity/schemaTypes'
// // import {structure} from './sanity/structure'


// // export default defineConfig({
// //   basePath: '/studio',
// //   projectId,
// //   dataset,
// //   // Add and edit the content schema in the './sanity/schemaTypes' folder
// //   schema,
// //   plugins: [
// //     structureTool({structure}),
// //     // Vision is for querying with GROQ from inside the Studio
// //     // https://www.sanity.io/docs/the-vision-plugin
// //     visionTool({defaultApiVersion: apiVersion}),
// //   ],
// // })





'use client'

import {visionTool} from '@sanity/vision';
import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';

import {schema} from './sanity/schemaTypes/';
import {structure} from './sanity/structure';

// Directly use environment variables with fallback
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'lc1sx5h6';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2023-01-01'; // Replace with your API version

export default defineConfig({
  basePath: '/studio',
  projectId,    
  dataset,
  schema,
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ],
});









// 'use client'

// /**
//  * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
//  */

// import {visionTool} from '@sanity/vision'
// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'

// // Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// import {apiVersion, dataset, projectId} from './sanity/env'
// import {schema} from './sanity/schemaTypes'
// import {structure} from './sanity/structure'


// export default defineConfig({
//   basePath: '/studio',
//   projectId,
//   dataset,
//   // Add and edit the content schema in the './sanity/schemaTypes' folder
//   schema,
//   plugins: [
//     structureTool({structure}),
//     // Vision is for querying with GROQ from inside the Studio
//     // https://www.sanity.io/docs/the-vision-plugin
//     visionTool({defaultApiVersion: apiVersion}),
//   ],
// })





// 'use client'

// import {visionTool} from '@sanity/vision';
// import {defineConfig} from 'sanity';
// import {structureTool} from 'sanity/structure';

// import {schema} from './sanity/schemaTypes/';
// import {structure} from './sanity/structure';

// // Directly use environment variables with fallback
// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = 'lc1sx5h6';
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET = 'production';
// const apiVersion = '2023-01-01'; // Replace with your API version

// export default defineConfig({
//   basePath: '/studio',
//   projectId,    
//   dataset,
//   schema,
//   plugins: [
//     structureTool({structure}),
//     visionTool({defaultApiVersion: apiVersion}),
//   ],
// });
