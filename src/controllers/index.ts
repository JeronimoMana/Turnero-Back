import { Request, Response } from "express"
import { UserServices } from "../services"


export const UserController = async (req: Request, res: Response) => {
    console.log("ahhhah")
    try {
        await UserServices()
    } catch (error) {
        res.status(200).json({ message: error })
    }
}