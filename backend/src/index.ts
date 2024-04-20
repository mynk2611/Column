import { Hono } from 'hono'
import userAuth from './routes/userAuth';
import column from './routes/column';
import { cors } from 'hono/cors';


const app = new Hono();

app.use('/*', cors());
app.route('/api/v1/user', userAuth);
app.route('/api/v1/column', column );

export default app
