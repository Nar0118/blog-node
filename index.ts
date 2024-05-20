import express from 'express';
import { connectDatabase } from './database';
import authorRoutes from './src/routes/author.routes';
import categoryRoutes from './src/routes/category.routes';
import postRoutes from './src/routes/post.routes';
import tagRoutes from './src/routes/tag.routes';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';

const app = express();
app.use(express.json());


app.use('/authors', authorRoutes);
app.use('/categories', categoryRoutes);
app.use('/posts', postRoutes);
app.use('/tags', tagRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

connectDatabase().then(() => {
  app.listen(2323, () => {
    console.log('Server is running on http://localhost:2323');
  });
});
