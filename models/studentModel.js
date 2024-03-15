import  mongoose  from "mongoose";
const studentSchema=new mongoose.Schema({
    fullName:{type:String,required:true},
    email: { type: String ,required:true, unique : true,lowercase:true },
    phonenumber: { type:String,required:true } ,
    nationalId: { type: String,required:true,unique : true,maxLength:14} ,
    gender: { type: String, required: true, enum: ['Male', 'Female'] },
},{timestamps:true});
const studentModel=mongoose.model("Student",studentSchema);
export default studentModel;
