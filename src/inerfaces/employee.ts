export interface Employee {
    id: string;
    first_name: string;
    last_name: string;
    name: string;
    display_name: string;
    date_of_birth?: Date;
    avatar_url?: string;
    personal_phone_number: string;
    work_email: string;
    job_title?: string;
    department: string;
    hire_date?: Date;
    tenure?: number;
    work_anniversary?: Date;
    employments?: {
        start_date: number;
        title: number;
        manager_id: string;
    }[]
}


export interface BombooHREmployee {
    id: number,
    displayName: string,
    firstName: string,
    lastName: string,
    gender: string,
    dateOfBirth: Date,
    workEmail: string
    jobTitle: string,
    workPhone: string,
    hireDate: Date,
    department: string,
    mobilePhone: string
}
