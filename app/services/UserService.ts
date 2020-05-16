import { IUserValues } from "../interfaces/user";
import userModel from "../models/user.model";

export class UserService {
    async create(userData: IUserValues) {
        const newUser = new userModel({
            username: userData.username,
            email: userData.email,
            password: userData.password,
            role: userData.role,
        });

        try {
            const response = await newUser.save();

            return response;
        } catch(error) {
            return {
                message: error.message || "Some error occurred while creating the User."
            };
        }
    }

    async findOne(id: string) {
        try {
            const user = await userModel.find({'_id': id});

            return user;
        } catch(error) {
            return {
                message: error.message || "Some error occurred while creating the User."
            };
        }
    }

    async findAll() {
        try {
            const users = await userModel.find();

            return users;
        } catch(error) {
            return {
                message: error.message || "Some error occurred while retrieving tutorials."
            }
        }
    }
}
