export interface Employee {
    "id": number;
    "payrollNumber": string;
    "forenames": string;
    "surname": string;
    "dateOfBirth": string;
    'telephone': string;
    'mobile': string;
    'address': string;
    'address2': string;
    'postcode': string;
    'emailHome': string;
    'startDate': string;
}

export interface EmployeeRequest {
    'session': string;
    'entity': Employee;
}