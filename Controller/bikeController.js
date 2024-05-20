const Bike = require("../modal/bikeSchema");

const create = async (req, res) => {
    try {
        const data = req.body;
        const bike = new Bike(data);
        await bike.save();
        res.status(201).json({ message: "Bike created successfully", bike });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const fetch = async (req, res) => {
    try {
        const bikes = await Bike.find();
        if (bikes.length) {
            res.status(200).json(bikes);
        } else {
            res.status(200).json({ message: "No bikes found" });
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
            res.status(200).json({ success: true, message: "Bike updated successfully" });
        } else {
            res.status(404).json({ success: false, message: "Bike not found or no changes made" });
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
            res.status(200).json({ message: "Bike deleted successfully" });
        } else {
            res.status(404).json({ message: "Bike not found" });
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
