import React, {FC} from 'react';

type Props = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined
    }>
}

const CreatePage: FC<Props> =async ({searchParams}) => {

    const awaitedSearchParams =  await searchParams;


    return (
        <div>
            This is page after create {awaitedSearchParams.brand}
        </div>
    );
};

export default CreatePage;