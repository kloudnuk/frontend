
class SessionContext {

    //TODO - fetch UserDetails for the current user.
    //TODO - implement server side request handler.
    static userDetails = {
        "authorities": ["ADMIN", "Playground"],
        "name": "admin",
        "password": "Password1",
        "enabled": true
    };

    static webserverEndpoint = {
        "proto": "https",
        "baseUrl": "kloudnuk.com",
        "apiUrl": "api/v1"
    }
}
export default SessionContext;