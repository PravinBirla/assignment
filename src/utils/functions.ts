import { addYears, differenceInYears } from 'date-fns';
import { BombooHREmployee, Employee } from '../inerfaces/employee';

export const calculateWorkAnniversary = (startDate: Date): Date => {
    const start: Date = new Date(startDate);
    const years: number = differenceInYears(new Date(), start)
    return addYears(start, years == 0 ? 1 : years);
}

export const calculateEmployeeTenure = (startDate: Date, endDate: Date): number => {
    return differenceInYears(endDate, startDate);
}

export const mapDataToEmployeeObject = (data: BombooHREmployee): Employee => {
    const tenure: number = calculateEmployeeTenure(data.hireDate, new Date());
    const work_anniversary: Date = calculateWorkAnniversary(data.hireDate);

    return {
        id: data.id.toString(),
        first_name: data.firstName,
        last_name: data.lastName,
        display_name: data.displayName,
        name: data.firstName + " " + data.lastName,
        date_of_birth: data.dateOfBirth,
        work_email: data.workEmail,
        job_title: data?.jobTitle,
        department: data.department,
        hire_date: data.hireDate,
        tenure,
        work_anniversary,
        personal_phone_number: data.mobilePhone
    };
}
