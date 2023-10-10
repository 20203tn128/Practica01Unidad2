import express from "express";
import bodyParser from "body-parser";
import path from 'path';
import { userRouter } from "../modules/user/adapters/user.controller";
const cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname,'../public')));

app.use(
    cors({  // cors se utiliza para que se estblezca en la app que dominios pueden hacer uso de la app
        origin:'*'
    })
)
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json({limit:'20mb'}))

app.get('/',(req,res)=>{
    res.send('Server running...');
});

app.use('/api/user',userRouter);
export default app;