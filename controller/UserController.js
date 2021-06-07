let UserService = require('../service/UserService.js');

class UserController {
    static async saveUser(req, res) {
        try {
            let status = await UserService.saveUser(req.body);
            if (status != null) {
                res.status(200).json({ message: "Success" });
                console.log("User Added Successfully");
            }
        }
        catch (err) {
            res.status(400).json({ errorMessage: err.message });
        }
    }

    static async updateUser(req, res) {
        let phoneno = req.params.phoneno;
        let result = await UserService.updateUser(phoneno, req.body);
        if (result != null) {
            res.status(200).json({ message: "Updated Successfully" });
        }
        else {
            res.status(400).json({ message: "Failed to update" });
            console.log(err);
        }
    }

    static async getUser(req, res) {
        let phoneno = req.params.phoneno;
        let result = await UserService.getUser(phoneno);
        res.send(result);
    }

    static async deleteUser(req, res) {
        let phoneno = req.params.phoneno;
        let result = await UserService.deleteUser(phoneno);
        if (result.rowCount > 0) {
            res.status(200).json({ message: "User Deleted Successfully" });
        }
        else {
            res.status(400).json({ message: "Failed to Delete User" });
        }
    }

}

module.exports = UserController;