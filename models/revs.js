var mongoose=require("mongoose")
var revSchema =mongoose.Schema({
    name:String,
    rname:String,
    reviewtype:String,
    remarks:String,
});
var Review =mongoose.model("Review",revSchema);
module.exports=Review;