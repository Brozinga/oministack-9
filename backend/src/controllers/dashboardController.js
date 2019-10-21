const Spot = require('../models/spotModel');
const User = require('../models/userModel');

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user)
            return res.status(400).json({ error: "User not found" });

        const spots = await Spot.find({ user: user_id });

        return res.json(spots);

    }
}