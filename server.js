const {format}=require("date-fns")
const express=require("express");
const cors=require("cors")

const app=express();
app.use(express.json())

app.use(cors());

try{
app.listen(4000, () =>
      console.log("Server Running at http://localhost:4000/")
    );
}catch(error){
    console.log(error.message)
}
app.post('/',(request,response)=>{
    const {date}=request.body
    const date_obj =new Date(date);
    if(date_obj=='Invalid Date'){
        response.status(400)
        response.send('Invalid Date')
    }else{
        response.status(200)
        response.send({
            day:format(date_obj,'EEEE'),
            date:format(date_obj,'do'),
            month:format(date_obj,'MMMM'),
            year:format(date_obj,'yyyy')
        })
    }
    
})