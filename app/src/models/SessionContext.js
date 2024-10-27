class SessionContext {
    constructor() {
        //TODO - fetch UserDetails for the current user.
        //TODO - implement server side request handler.
        this.userDetails = {
            "authorities": ["ADMIN", "Playground"],
            "name": "",
            "password" : "",
            "enabled": true
        };
    }
}