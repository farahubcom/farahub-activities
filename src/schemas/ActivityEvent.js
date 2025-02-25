const mongoose = require("mongoose");
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;


const ActivityEventSchema = new Schema({
    identifier: { type: String, unique: true, lowercase: true },
    template: { type: Map, of: String }
}, {

    /**
     * Name of the collection
     * 
     * @var string
     */
    collection: "activities:activity_events"
});

ActivityEventSchema.plugin(mongooseLeanVirtuals);

module.exports = ActivityEventSchema;