abstract class MailerService {

    static async send(username: String, password: String): Promise<object> {
        return {};
    }

    static async changePassword(token: String, password: String): Promise<object> {
        return {};
    }

    static async recovery(email: String): Promise<object> {
        return {};
    }
}

export default MailerService;