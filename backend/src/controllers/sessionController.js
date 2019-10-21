const User = require('../models/userModel');

module.exports = {
    async store(req, res) {
        const { name, email } = req.body;

        let user = await User.findOne({ email });

        if (!user)
            user = await User.create({ name, email, active: true })

        return res.json(user)
    }
}