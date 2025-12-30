const express=require('express');
const app=express();

const PORT=process.env.PORT||3000;

app.use(express.json());

app.get('/',(req,res)=>{
    console.log(('Received a request at /'));
    res.status(200).json({
        message:'Server is running',
        status_code:200
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});