import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:{type:String,required:true,unique:true},
  password:{type:String,required:true},
  location:{type:String},
  skillsOffered:[{type:mongoose.Schema.Types.ObjectId, ref:'skill'}],
  skillsNeeded:[{type:mongoose.Schema.Types.ObjectId,ref:'skill'}],
  rating:{type:Number,default:0}
},
{
    timestamps:true
}
);


//  Hashing 

userSchema.pre('save', async () => {
    if(!this.isModified('password')){
        next();
    }
    const salt=await  bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);

});

userSchema.methods.matchPassword=async (enterdPassword) => {
    return  await bcrypt.compare(enterdPassword,this.password);
};

const User=mongoose.model('User',userSchema);

export default User;