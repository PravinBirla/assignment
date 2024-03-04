import express from "express";
import { Request, Response } from "express-serve-static-core";
import { Error } from "../errors/Error";
import { Employee } from "../inerfaces/employee";
import { fetchEmployeeData } from "../services/api-service";


export const router = express.Router();

router.get('/employees/:employeeId', async (request: Request, response: Response) => {
    try {
        const { employeeId } = request?.params;
        if (employeeId) {
            const result: Employee = await fetchEmployeeData(employeeId);
            response.send(result);
        } else {
            response.status(400).send(new Error(400, "Bad Request", "Employee id is required"))
        }
    } catch (error) {
        response.status(error.response.status).send(new Error(error.response.status, error.response.statusText, error.message));
    }
})
