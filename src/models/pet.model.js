const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sexEnum = ['male', 'female'];

const PetSchema = Schema(
	{
		name: { type: String, required: true },
		age: { type: Number, required: true },
		sex: { type: String, enum: sexEnum, required: true },
		image: {
			type: String,
			default: 'https://i0.pngocean.com/files/15/838/326/dog-paw-logo-dog.jpg',
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
