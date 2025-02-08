import React from 'react';
import {getAllCars} from "@/app/services/api.cars.services";

const CarsComponent = async () => {

   const cars = await getAllCars();
   console.log(cars);
    return (
        <div>
            {
                cars.map((car)=><div key={car.id}>{car.id}{car.brand}{car.price}</div>)
                }
        </div>
    );
};

export default CarsComponent;