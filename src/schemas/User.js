const mongoose = require("mongoose");
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');

const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;


const UserSchema = new Schema({}, { timestamps: true });

UserSchema.plugin(mongooseLeanVirtuals);

module.exports = UserSchema;