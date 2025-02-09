import React from 'react';
import Form from "next/form";
import {saveAction} from "@/app/server-action/serverAction";


export default function PageForm() {
    return (
        <div>

            <Form action={saveAction}>
                <input type={'text'} name={'title'} placeholder={'brand'}/>
                <input type={'text'} name={'year'} placeholder={'year'}/>
                <input type={'text'} name={'price'} placeholder={'price'}/>
                <button>create</button>
            </Form>



        </div>
    );
}
