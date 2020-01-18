import React, { Component } from 'react';

class Notfound extends Component {
    render() {
        console.log(this.props.location)
        return (
            <div className='pagenotfound'>
                <h1>ERROR</h1>
                <h1>404</h1>
                <h2>PAGE NOT FOUND</h2>
                <h3>The requested URL
                    <span>{this.props.location.pathname}
                    </span> was not found</h3>


            </div>
        );
    }
}

export default Notfound;