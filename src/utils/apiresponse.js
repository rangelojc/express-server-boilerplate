export default class APIResponse {
    constructor(data, params, code) {
        this.statusCode = 404;
        this.params = {};
        this.data = [];

        if (code) {
            this.statusCode = code;
        }
        if (data) {
            this.statusCode = 200;
            this.data = data;
        }
        if (params) {
            this.params = params;
        }
    }
}