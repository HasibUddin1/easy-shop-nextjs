'use client'

import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToasterContainer = () => {
    return (
        <Toaster
            position="top-center"
            reverseOrder={false}
        />
    );
};

export default ToasterContainer;