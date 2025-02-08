import {ICars} from "@/app/models/ICars";


export const getAllCars = async ():Promise<ICars[]> =>{
     const cars = await fetch('http://owu.linkpc.net/carsAPI/v1/cars')
        .then(value => value.json());

     return cars;
}