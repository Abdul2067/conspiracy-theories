import mongoose from "mongoose"

const Schema = mongoose.Schema

const evidenceSchema = new Schema({
  content: String,
  owner: {type: Schema.Types.ObjectId, "ref": "Profile"}
}, {
  timestamps: true
})

const theorySchema = new Schema({ 
  title: String,
  description: String,
  evidence: [evidenceSchema],
  owner: {type: Schema.Types.ObjectId, "ref": "Profile"}
}, {
  timestamps: true
})

const Theory = mongoose.model("Theory", theorySchema)

export {
  Theory
}