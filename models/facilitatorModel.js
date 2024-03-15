import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    title:{
      type:String,
      required:true,
      },
      description:{
          type:String,
          required:true,
          unique:true
      }
  }
  );

const facilitatorShcema=new  mongoose.Schema({
   fullName:{
    type:String,
    required:true
   },
   email:{
     type: String,
     unique : true ,
     lowercase : true ,
    // trim : true ,
     //validate(value) {
      // if (!validator.isEmail(value)) {
        // throw new Error("Invalid Email");
     //  }
    // }
   },
   phone:{
    type:String,
    required:true
   },
   nationalId:{
    type:String,
    required:true,
    unique:true,
    length:14
   },
   courses: [courseSchema],
   role:{
    type:String,
    required:true,
    enum:["Technical Facilitator","Assistant Technical Facilitator"],
    default:"Male"
   }
},{timestamps:true});
const facilitatorModel=mongoose.model( "facilitator",facilitatorShcema);
export default facilitatorModel;