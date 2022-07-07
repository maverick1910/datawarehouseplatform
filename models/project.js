var mongoose=require("mongoose")
var siteSchema =mongoose.Schema({
    name:String,
    content:String,
    version:String,
    reviewer:String,
    labeldata:String,
    versionlabel:String,
    acessid:String,
    link:String,
});
var Site =mongoose.model("Site",siteSchema);
module.exports=Site;