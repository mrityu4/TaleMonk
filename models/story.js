var mongoose = require("mongoose");
var User = require("./user");
var storySchema = new mongoose.Schema({
    name: String,
    url: String,
    desc: String,
    viewed: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
            // unique: true
        }
    ]
});

module.exports = mongoose.model("Story", storySchema);
