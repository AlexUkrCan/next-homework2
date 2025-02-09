'use server';

import sql from 'better-sqlite3';
import {revalidatePath} from "next/cache";

const db = sql('meals.db')

export const saveAction= async (formData:FormData)=>{
    console.log(formData)
    console.log('saveAction')

    const brandValue = formData.get('brand');
    db.prepare('insert into meals(brand) values(?)')
        .run(brandValue);
    revalidatePath('/');
}