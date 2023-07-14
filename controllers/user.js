const User = require("../Model/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken") ;


exports.register = async(req,res) => {
    try {
        const {firstname , name , email ,password} = req.body;
        const foundUser = await User.findOne({email})
        if (foundUser) {
            return res.status(400).send({errors : [{ msg : "email already used..."}]})
        }

        const saltRounds = 10 ;
        const hashPassword = await bcrypt.hash(password , saltRounds)

        const newUser = new User({...req.body})
        newUser.password = hashPassword;

        await newUser.save()

        const token  = jwt.sign({
            id : newUser._id
        } , process.env.SCRT_KEY , {expiresIn : "48h"}  )

        res.status(200).send({success : [{msg : "registration successfully..."}] , user : newUser , token })
 
    } catch (error) { 
       res.status(400).send({errors : [{msg: "try again"}]})
    }
}

exports.login = async (req, res) => {
    try {
        const {email , password} = req.body ;
        const foundUser = await User.findOne({email})
        if (!foundUser) {
            return res.status(400).send({errors : [{msg : "user not found"}]})
        }
        const checkPassword = await bcrypt.compare(password ,foundUser.password )
        if(!checkPassword) {
            return res.status(400).send({errors : [{msg : "Please verify your password"}]})
        }

        const token = jwt.sign({
            id : foundUser._id
        }, process.env.SCRT_KEY , {expiresIn : "48h"}  )

        res.status(200).send({success : [{msg : "welcome back"}], user : foundUser ,token })

    } catch (error) {
        return res.status(400).send({errors : [{msg : "Please verify your information"}]})    
    }
}

exports.updateUserPassword = async (req, res) => {
    const { oldPassword, password , confirmedpassword } = req.body;
    const{_id}= req.params;
    try {
      // get user
      const user = await User.findById(req.params);
      if (!user) {
          return res.status(400).send('User not found');
      }
  
      // validate old password
      const isValidPassword = await bcrypt.compare(oldPassword, user.password);
      if (!isValidPassword) {
          return res.status(400).send({ errors : [{ msg : "Please check your old password "}]});
      }
      
        if (password !== confirmedpassword)
        {
          return res.status(400).send({ errors : [{ msg : "Please verify your new password "}]});
        }
      // hash new password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // update user's password
      user.password = hashedPassword;
  
      const updatedUserPassword = await user.save();
  
      return res.json({success : [{msg:"Your password has been changed successfully"}] ,user : updatedUserPassword});
  
    } catch (err) {
      return res.status(400).send({errors : [{ msg : "Please retry later "}]});
    }
  };
  