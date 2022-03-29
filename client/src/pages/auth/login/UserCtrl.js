const User = require('./client/src/pages/auth/login/User')



const UserCtrl = {
    register: async (req, res) => {
        try {
            const {name, email, password} = req.body
        
            if(!name || !email || !password)
                return res.status(400).json({msg: "Please fill in all fields."})

            if(!validateEmail(email))
                return res.status(400).json({msg: "Invalid emails."})

            const user = await User.findOne({email})
            if(user) return res.status(400).json({msg: "This email already exists."})

            if(password.length < 6)
                return res.status(400).json({msg: "Password must be at least 6 characters."})

                const passwordHash = await bcrypt.hash(password, 12)
    
    
                res.json({msg: "Register Success! Please activate your email to start."})
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        }
    }

        
    
