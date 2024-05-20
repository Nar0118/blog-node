import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Blog API',
      version: '1.0.0',
      description: 'Blog API with Posts, Categories, Tags, and Authors',
    },
    servers: [
      {
        url: 'http://localhost:2323',
      },
    ],
    tags: [
      { name: 'Posts', description: 'Operations related to posts' },
      { name: 'Categories', description: 'Operations related to categories' },
      { name: 'Tags', description: 'Operations related to tags' },
      { name: 'Authors', description: 'Operations related to authors' },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);
