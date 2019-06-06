import service from "../service/customerService";

export const createCustomer = (name: string, age: number, gender: string) => {
    service.save();
    return true;
}