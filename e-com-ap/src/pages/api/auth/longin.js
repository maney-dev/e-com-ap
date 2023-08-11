import User from "../../../../models/User";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { email, password } = req.body


            const user = await User.findOne({ email })


            if (!user) {
                return res.status(500).json({ msg: "L'e-mail ou le mot de passe est erroné" })
            }

            // hashedpassword, normal password

            // normal pass, hashedpasword
            const comparePass = await bcrypt.compare(password, user.password)
            if (!comparePass) {
                return res.status(500).json({ msg: "L'e-mail ou le mot de passe est erroné" })
            }

            const { password: hashedPass, ...others } = user._doc

            const token = jwt.sign({ id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '5h' })

            return res.status(200).json({ token, others })
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}