import React from 'react';

export default function Title({ name, title }) {

    return (
        <div className='title'>
            <div className='text-title'>
                <h1 className='text-name'>{name}
                    <div>{title}</div>
                </h1>
            </div>
        </div>
    );

}

