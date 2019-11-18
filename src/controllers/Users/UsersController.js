import DBManager from '../../utils/dbmanager';
import APIResponse from '../../utils/apiresponse';

export default class UsersController {
    constructor() {
        this.dbmanager = new DBManager();
    }

    async get(params) {
        let rows = [];

        if (!params) rows = await this.dbmanager.exec("SELECT * FROM user");
        else rows = await this.dbmanager.exec(
            "SELECT * FROM user WHERE userId = ?",
            [params.userid]);

        return new APIResponse(rows, params);
    }
}