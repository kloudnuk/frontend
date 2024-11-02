
class SessionContext {

    //TODO - fetch UserDetails for the current user.
    //TODO - implement server side request handler.
    static userDetails = {
        "authorities": ["ADMIN", "Playground"],
        "name": "admin",
        "password": "Password1",
        "enabled": true
    };
}
export default SessionContext;