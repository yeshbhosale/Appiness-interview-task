import { GET_EMPLOYEES_INFO } from "./Types";
import data from "../../db.json";

export const getEmployeeDetails = () => dispatch => {
    const employeeInfo = data;
    dispatch({
        type: GET_EMPLOYEES_INFO,
        payload: employeeInfo
    });
}