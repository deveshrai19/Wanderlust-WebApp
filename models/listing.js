const mongoose=require("mongoose");
const { type } = require("os");

const Schema=mongoose.Schema;


const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        default:"https://www.pexels.com/photo/happy-border-collie-in-poprad-landscape-32153042/",
        set:(v)=>v===""?"https://www.pexels.com/photo/happy-border-collie-in-poprad-landscape-32153042/":v,
    },
    price:Number,
    location:String,
    country:String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"

        }
    ]
});


const Listing=mongoose.model("Listing",listingSchema);

module.exports=Listing;