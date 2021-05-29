import School from "../models/school.js";
import mongoose from "mongoose";

export const getAllSchools = async (req, res) => {
	try {
		const allSchools = await School.find();
		res.status(200).json({ data: allSchools });
	} catch (error) {
		res.status(404).json({ error });
	}
};

export const createSchool = async (req, res) => {
	const school = req.body;
	const newSchool = new School(school);

	try {
		await newSchool.save();
		res.status(201).json({ school: newSchool });
	} catch (error) {
		res.status(409).json({ error });
	}
};

export const deleteSchool = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send(`No school with id: ${id}`);

	await School.findByIdAndRemove(id);

	res.json({ message: "School deleted successfully." });
};

export const updateSchool = async (req, res) => {
	const school = req.body;

	try {
		const updatedSchool = await School.findByIdAndUpdate(school._id, school, { new: true });
		res.status(201).json({ school: updatedSchool });
	} catch (error) {
		res.status(409).json({ error });
	}
};
