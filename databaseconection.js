const {createPool}=require('mysql');
const pool=createPool({

host:"192.168.1.240",
user:"cad",
password:"password",
database:"cad_ps",
connectionLimit:10

})

pool.query("update student set address='madurai' where id=3",(err,output,fields)=>{
    
    if(err){
    return console.log(err);
}

return console.log(output);


});