import logo from 'C:/Users/User/Desktop/react_testing/src/logo.svg';

import React, { Component } from 'react'
import Table from './Table'

class Data1 extends Component {
    render() {
        const information = [
            {
                image: '1',
                api: 'face detect',
            },
            {
                image: '2',
                api: 'face detect',
            },
            {
                image: '3',
                api: 'face detect',
            },
            {
                image: '4',
                api: 'face detect',
            },
        ]
        return (
            <div className="container">
                <Table informationData={information} />
            </div>
        )
    }
}



export default Data1;