abstract class AuthService {

    static async getUser(username: String, password: String): Promise<object> {
        return {};
    }

    static async changePassword(token: String, password: String): Promise<object> {
        return {};
    }
}

export default AuthService;