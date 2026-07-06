import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({

  nombre:{
    type:String,
    required:true,
    trim:true
  },

  categoria:{
    type:String,
    required:true
  },

  precio:{
    type:Number,
    required:true,
    min:0
  },

  stock:{
    type:Number,
    required:true,
    min:0
  },

  activo:{
    type:Boolean,
    default:true
  },

  tags:[String],

  talles:String,

  marca:String,

  garantia:Number,

  material:String

},
{
  strict:false
});

export default mongoose.model("Producto", productoSchema);