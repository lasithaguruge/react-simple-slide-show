import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

class Main extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Main;