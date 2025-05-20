import express from 'express';
import itemRoutes from './routes/itemRoutes';
import { errorHandler } from './middlewares/errorHandler';
import route from "./routes/route";

const app = express();

app.use(express.json());

app.use('/', route);
app.use('/api/items', itemRoutes);

app.use(errorHandler);

export default app;