import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return (
            <div>
                <sup>
                    {this.props.trademark}
                </sup> 
            </div>
        )
    }
}

export default Footer;