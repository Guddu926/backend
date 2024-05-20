const Van = require("../modal/vanSchema");
const create = async (req, res) => {
    try {
        const data = req.body;
        const van = new Van(data);
        await van.save();
        res.status(201).json({ message: "Van created successfully", van });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const fetch = async (req, res) => {
    try {
        const vans = await Van.find();
        if (vans.length) {
            res.status(200).json(vans);
        } else {
            res.status(200).json({ message: "No vans found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await Van.updateOne({ _id: id }, data);
        if (result.nModified) {
            res.status(200).json({ success: true, message: "Van updated successfully" });
        } else {
            res.status(404).json({ success: false, message: "Van not found or no changes made" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Van.deleteOne({ _id: id });
        if (result.deletedCount) {
            res.status(200).json({ message: "Van deleted successfully" });
        } else {
            res.status(404).json({ message: "Van not found" });
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
