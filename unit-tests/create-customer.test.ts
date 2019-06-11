import request from "request-promise";
import url from "url";

let baseUrl = "http://localhost:3000";
let api = "create";

let options = {
    uri: url.resolve(baseUrl, api),
    method:"POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: {
        "name": "Yudhaamanyu",
        "email": "yudhaamanyu.subbiah@travelex.com",
        "mobile": "8883338383"
    },
    json: true
}

request(options)
    .then(response => console.log(response));