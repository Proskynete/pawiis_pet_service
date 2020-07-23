const Pet = require('../models/pet.model');

const create = async (req, res) => {
	const { name, age, gender, owner } = req.body;

	try {
		const hasPet = await Pet.findOne({ owner });

		if (hasPet) {
			return res.status(406).json({
				status: 406,
				error: `${err}`,
				message: `Only one pet per person`,
			});
		}

		const newPet = new Pet({
			name,
			age,
			gender,
			owner,
			created_at: Date.now(),
			updated_at: Date.now(),
			last_login: Date.now(),
		});

		const savedPet = await newPet.save();

		res.status(201).json({
			pet: savedPet,
		});
	} catch (error) {
		return res.status(500).json({
			status: 500,
			error,
			message: `Server Error`,
		});
	}
};

const get = async (req, res) => {
	const { owner } = req.query;

	try {
		const pet = await Pet.findOne({ owner });

		if (!pet) {
			return res.status(404).json({
				status: 404,
				error: `${err}`,
				message: `Pet not found`,
			});
		}

		res.status(200).json({
			status: 200,
			pet,
		});
	} catch (error) {
		return res.status(500).json({
			status: 500,
			error,
			message: `Server Error`,
		});
	}
};

const getAll = async (_, res) => {
	try {
		const pets = await Pet.find({});

		if (!pets) {
			return res.status(404).json({
				status: 404,
				error: `${err}`,
				message: `User not found`,
			});
		}

		res.status(200).json({
			status: 200,
			pets,
		});
	} catch (error) {
		return res.status(500).json({
			status: 500,
			error,
			message: `Server Error`,
		});
	}
};

module.exports = {
	create,
	get,
	getAll,
};
