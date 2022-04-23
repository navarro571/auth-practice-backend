const { config } = require("../config/config");

class JWTService {
    
    static sign(payload) {
        const token = jwt.sign(payload, config.jwtSecret);
        return {
            user,
            token
        };
    }
}

module.exports = JWTService;