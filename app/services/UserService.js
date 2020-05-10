const db = require("../models");
const Users = db.users;

export class UserService {
    async create(userData) {
        const newUser = new Users({
            username: userData.body.username,
            email: userData.body.email,
            password: userData.body.password,
            role: userData.body.role,
        });

        try {
            const response = await Users.save(newUser);

            return response;
        } catch(error) {
            return {
                message: error.message || "Some error occurred while creating the User."
            };
        }
    }

    async findAll() {
        try {
            const users = await Users.find();

            return users;
        } catch(error) {
            return {
                message: error.message || "Some error occurred while retrieving tutorials."
            }
        }
    }
}


/*exports.findOne = (req, res) => {
    const id = req.params.id;

    Users.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Tutorial with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Tutorial with id=" + id });
        });
};*/
