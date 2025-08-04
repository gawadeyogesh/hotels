const mongoose=require("mongoose");

// given 
// define the person schema
const personSchemea=new mongoose.Schema(
{
    name:{
        type:String,
        required:true  // name is required the mandatory field for structure 
    },
    age:{
        type:Number
    },
    work:
    {
        type:String,
        enum:['chef'],
        required:true
    },
    mobile:
    {
        type:String,
        required:true
    },

    email:
    {
        type:String,
        required:true,
        unique:true
    },
    address:
    {
        type:String
    },
    salary:
    {
        type:Number,
        required:true
    }
  
});



// create the person model
const personModel=mongoose.model('person',personSchemea);
// export the person model
module.exports=personModel;