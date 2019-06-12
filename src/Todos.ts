import request from "request-promise";

class Todos {
    static async all() {

        let options = {
            uri: "https://jsonplaceholder.typicode.com/todos",
            method: "GET",
            json: true
        }

        return request(options)
            .then(response => response);

    }
}

export default Todos;