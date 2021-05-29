import mongoose from "mongoose";

const schoolSchema = mongoose.Schema({
	name: String,
	about: String,
	location: String,
	admissions: String,
	image: String,
});

const School = mongoose.model("School", schoolSchema);

export default School;
