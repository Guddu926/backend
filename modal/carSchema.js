const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehicleTypeSchema = new Schema({
    name: { type: String },
    modal: { type: String },
    category: {
        type: String,
        required: true
    }
});

const CarVehicle = mongoose.model('CarVehicle', VehicleTypeSchema);
module.exports = CarVehicle;