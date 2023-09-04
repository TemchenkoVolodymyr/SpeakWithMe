const jwt = require("jsonwebtoken");

const signToken = (id) => {
   return jwt.sign({
      id: id
   }, "i-should-create-my-extra-long-secret", {
      expiresIn: "90d"
   })
};

exports.createToken = (id,statusCode,data,res) => {
   const token = signToken(id)

   res.cookie('jwt', token, {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // дни через которые куки удаляться
      secure: true, // production - true , development = false
      httpOnly:true,
   })
   //////
// data.password = undefined    пока закоментил потому что в userFuncs не могу видить пароль для login
   if (data) {
      res.status(statusCode).json({
         status: "success",
         token,
         data: {
            user: data
         }
      })
   } else {
      res.status(statusCode).json({
         status: "success",
         token
      })
   }
}