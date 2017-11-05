const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//jm
const outlineSchema = new Schema({
        _projectId: {
            type: Schema.Types.ObjectId,
            ref: "Project" 
    },
        outline: {type: String, required: false}
});
 
const Outline = mongoose.model("Outline", outlineSchema);

module.exports = Outline;