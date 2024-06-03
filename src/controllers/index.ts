import { Request, Response } from "express"
import { UserServices } from "../services"


export const UserController = async (req: Request, res: Response) => {
    console.log("ahhhah")
    try {
        await UserServices()
        res.status(201).json("Usuario creado correctamente ");
    } catch (error) {
        res.status(200).json({ message: error })
    }
}