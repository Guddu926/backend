const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    vehicle: { type: Schema.Types.ObjectId, ref: 'Vehicle', required: true },
    customerName: { type: String, required: true },
    bookingDate: { type: Date, required: true }
});

module.exports = mongoose.model('Booking', BookingSchema)