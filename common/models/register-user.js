"use strict";

module.exports = function (Registeruser) {

  Registeruser.userlogin = async  (credentials) => {
    try {
      if (credentials.email && credentials.password && credentials.password.length >= 6) {
        await Registeruser.create(credentials);
        let user = await Registeruser.login(credentials);
        if (user) {
          return { jwt_token: user.accessToken };
        }
      } else {
        if (credentials.password.length >= 6) {
          throw new Error("please provide proper credentials 'email' and 'password' ");
        } else {
          throw new Error("Password length atleast 6 characters min");
        }

      }
    } catch (error) {
      throw error;
    }
  };
  Registeruser.remoteMethod("userlogin", {
    isStatic: true,
    accepts: [
      {
        arg: "credentials",
        type: "object"
      }
    ],
    returns: {
      arg: "user",
      root: true
    },
    http: {
      path: "/userlogin",
      verb: "post"
    }
  });
};
