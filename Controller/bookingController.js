const Books = require("../modal/bookingSchema");
const create = async (req, res) => {
    try {
        const data = req.body;
        const car = new Books(data);
        await car.save();
        res.status(201).json({ message: "Booking van created successfully", car });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const fetch = async (req, res) => {
    try {
        const cars = await Books.find();
        if (cars.length) {
            res.status(200).json(cars);
        } else {
            res.status(200).json({ message: "No Booking cars found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await Bike.updateOne({ _id: id }, data);
        if (result.nModified) {
            res.status(200).json({ success: true, message: "Booking updated successfully" });
        } else {
            res.status(404).json({ success: false, message: "Booking not found or no changes made" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Bike.deleteOne({ _id: id });
        if (result.deletedCount) {
            res.status(200).json({ message: "Booking deleted successfully" });
        } else {
            res.status(404).json({ message: "Booking not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    create,
    fetch,
    update,
    remove
};
