const Car = require("../modal/carSchema");

const create = async (req, res) => {
    try {
        const data = req.body;
        const car = new Car(data);
        await car.save();
        res.status(201).json({ message: "Car van created successfully", car });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const fetch = async (req, res) => {
    try {
        const cars = await Car.find();
        if (cars.length) {
            res.status(200).json(cars);
        } else {
            res.status(200).json({ message: "No cars found" });
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
            res.status(200).json({ success: true, message: "Car updated successfully" });
        } else {
            res.status(404).json({ success: false, message: "Car not found or no changes made" });
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
            res.status(200).json({ message: "Car deleted successfully" });
        } else {
            res.status(404).json({ message: "Car not found" });
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
