import React from 'react';

export default function Title(props) {

    return (
        <div className='title'>
            <div className='text-title'>
                <h1 className='text-name'>{props.name}<span>  </span>
                    <span>{props.title}</span>
                </h1>
            </div>
        </div>
    );

}

