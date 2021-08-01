import express from 'express';
require('dotenv').config()
const app = express()
const port =(process.env.PORT as any) as number || 3000;


app.use(express.json());
app.use('/api', require('./routes/calculateBMI.ts'));


app.listen(process.env.PORT, () => {
  console.log(`app listening at http://localhost:${port}`)
})

export=app;

