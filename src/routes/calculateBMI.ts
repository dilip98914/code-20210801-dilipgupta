import express from 'express';
const router = express.Router();
import {calculateBMI} from '../controllers/calculateBMI';

router.post('/calculateBMI', (req, res) => {
  const {data}=req.body;
  if(!data) res.status(400).json({
    message:'Data Missing!'
  });
  try{
    res.status(200).send(calculateBMI(data));
  }catch(err){
    res.status(500).json({
      message:'Internal Server Error'
    });
  }
});

export=router;