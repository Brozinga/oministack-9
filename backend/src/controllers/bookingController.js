const Bookging = require('../models/bookingModel');
const User = require('../models/userModel');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const user = await User.findById(user_id);

        if (!user)
            return res.status(400).json({ error: "User not found" });


        const booking = await Bookging.create({
            user: user_id,
            spot: spot_id,
            date
        })

        await booking.populate('user').populate('spot').execPopulate();

        return res.json(booking);
    }
}