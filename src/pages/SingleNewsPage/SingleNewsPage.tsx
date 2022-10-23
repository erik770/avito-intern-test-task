import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const SingleNewsPage: FC = () => {
    let id  = useParams();
    console.log(id);

    return (
        <div>
            hello
        </div>
    );
};

export default SingleNewsPage;