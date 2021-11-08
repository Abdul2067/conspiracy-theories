import mongoose from "mongoose"

const Schema = mongoose.Schema

const theorySchema = new Schema({ 
  title: String,
  description: String,
  owner: {type: Schema.Types.ObjectId, "ref": "Profile"}
}, {
  timestamps: true
})

const Theory = mongoose.model("Theory", theorySchema)

export {
  Theory
}