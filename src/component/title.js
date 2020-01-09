import React from 'react';

export default function Title(props) {

    return (
        <div className='title'>
            <div className='text-title'>
                <h1 className='text-name'>{props.name}
                    <div>{props.title}</div>
                </h1>
            </div>
        </div>
    );

}

