import express from 'express';
import getCategoriesHandler from '../handlers/getCategoriesHandler.js';
import createCategoryHandler from '../handlers/createCategoryHandler.js';
import authorize from '../middleware/authorize.js';

const productRouter = express.Router();

productRouter.use(authorize);

productRouter.get('/categories', getCategoriesHandler);
productRouter.post('/categories', createCategoryHandler);

export default productRouter;