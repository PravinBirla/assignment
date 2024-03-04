import axios, { AxiosResponse } from 'axios';
import { API_BASE_URL, BAMBOOHR_API_KEY, COMPANY_DOMAIN } from '../../config';
import { Employee } from '../inerfaces/employee';
import { ImageSize } from '../utils/enums';
import { mapDataToEmployeeObject } from '../utils/functions';


const headers = {
    'authorization': `Basic ${BAMBOOHR_API_KEY}`,
    'accept': 'application/json'
}


export const fetchEmployeeData = async (employeeId: string): Promise<Employee> => {
    debugger
    const fields = ['id', 'firstName', 'lastName', 'gender', 'displayName', 'jobTitle', 'dateOfBirth', "workEmail", "hireDate", "department", "mobilePhone"];
    const response: AxiosResponse = await axios.get(`${API_BASE_URL}employees/${employeeId}`, {
        params: {
            fields: fields.join(","),
            companyDomain: COMPANY_DOMAIN,
        },
        headers
    })

    const employee: Employee = mapDataToEmployeeObject(response.data);
    employee.avatar_url = await fetchPhotoUrl(employee.id);
    return employee
}

export const fetchPhotoUrl = async (employeeId: string): Promise<string> => {
    const response: AxiosResponse = await axios.get(`${API_BASE_URL}employees/${employeeId}/photo/${ImageSize.Original}`, {
        params: {
            companyDomain: COMPANY_DOMAIN,
        },
        headers
    })

    return response.data;
}
