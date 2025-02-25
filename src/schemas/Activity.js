const mongoose = require("mongoose");
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;


const ActivitySchema = new Schema({
    event: { type: ObjectId, ref: 'ActivityEvent', required: true },
    user: { type: ObjectId, ref: 'User', required: true },
    // link: { type: ObjectId, refPath: 'linkModel' },
    // linkModel: { type: String },
    references: [{
        reference: { type: ObjectId, refPath: 'references.referenceModel' },
        referenceModel: String
    }],
    createdAt: { type: Date, required: true },
}, {

    /**
     * Name of the collection
     * 
     * @var string
     */
    collection: "activities:activities"
});

ActivitySchema.plugin(mongooseLeanVirtuals);

module.exports = ActivitySchema;