const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genderEnum = ['male', 'female'];

const PetSchema = Schema(
	{
		name: { type: String, required: true },
		age: { type: Number, required: true },
		gender: { type: String, enum: genderEnum, required: true },
		image: {
			type: String,
			default: 'https://image.flaticon.com/icons/png/512/194/194279.png',
		},
		owner: { type: Schema.ObjectId, ref: 'User', required: true },
		created_at: { type: Date },
		updated_at: { type: Date },
		last_login: { type: Date },
	},
	{
		collection: 'Pet',
	}
);

module.exports = mongoose.model('Pet', PetSchema);
