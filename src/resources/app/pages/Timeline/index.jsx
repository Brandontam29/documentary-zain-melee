import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
    return (
        <>
            <Helmet>
                <title>Zain is Melee</title>
                <meta name="description" content="Page not found" />
            </Helmet>
            <div>
                Timeline
            </div>
        </>
    );
};

export default NotFoundPage;
