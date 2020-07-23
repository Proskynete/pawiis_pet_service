const Pet = require('../models/pet.model');

const create = (req, res) => {
	const { name, age, sex, owner } = req.body;

	const newPet = new Pet({
		name,
		age,
		sex,
		owner,
		created_at: Date.now(),
		updated_at: Date.now(),
		last_login: Date.now(),
	});

	newPet.save((err, pet) => {
		if (err)
			return res.status(500).json({
				status: 500,
				error: `${err}`,
				message: `Server Error`,
			});

		res.status(200).json({
			pet,
		});
	});
};

const getByID = (req, res) => {
	const userID = req.params.userID;

	User.findById(userID, (err, user) => {
		if (err)
			return res.status(500).json({
				status: 500,
				error: `${err}`,
				message: `Server Error`,
			});

		if (!user)
			return res.status(404).json({
				status: 404,
				error: `${err}`,
				message: `User not found`,
			});

		res.status(200).json({
			status: 200,
			profile: 'user-details',
			user,
		});
	});
};

module.exports = {
	create,
	getByID,
};
