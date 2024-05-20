const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehicleTypeSchema = new Schema({
    vehicleName: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    modelYear: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    vehicleType: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const VehicleType = mongoose.model('VehicleType', VehicleTypeSchema);
module.exports = VehicleType;
