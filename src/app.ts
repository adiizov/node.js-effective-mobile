import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import route from "./routes/route";
import requestsRoutes from "./routes/requests.routes";

const app = express();

app.use(express.json());

app.use('/', route);
app.use('/api/requests', requestsRoutes);

app.use(errorHandler);

export default app;