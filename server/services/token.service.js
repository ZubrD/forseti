const jwt = require("jsonwebtoken");
const config = require("config");

class TokenService {
  // возвращает accessToken, refreshToken, expiresIn
  generate(myId) {
    const accessToken = jwt.sign(myId, config.get("accessSecretString"), {
      expiresIn: "1h",
    });

    const refreshToken = jwt.sign(myId, config.get("refreshSecretString"));
    return { accessToken, refreshToken, expiresIn: 3600 };
  }

  validateRefresh(refreshToken) {
    try {
      return jwt.verify(refreshToken, config.get("refreshSecretString"));
    } catch (e) {
      return null;
    }
  }
}

module.exports = new TokenService()