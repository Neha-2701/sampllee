const express=require('express')
const app=express();
require('dotenv').config();
const port = process.env.PORT || 3030 ;

console.log(port)
app.get('/', (req,resp)=>{
    resp.send("done mooj ho gye")
})
app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });