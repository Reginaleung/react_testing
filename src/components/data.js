import React, { Component } from "react";
import {Table } from "semantic-ui-react";
import contacts from './data.json';

class data extends Component {

    //render() {
    //    return (
    //        <Table singleLine>
    //            <Table.Header>
    //                <Table.Row>
    //                    <Table.HeaderCell>Image</Table.HeaderCell>
    //                    <Table.HeaderCell>Detect Api</Table.HeaderCell>
                    
    //                </Table.Row>
    //            </Table.Header>

    //            <Table.Body>
    //                {contacts.map(el => {
    //                    return (
    //                        <Table.Row key={el.request_id}>
    //                            <Table.Cell>{el.request_id}</Table.Cell>
                               
    //                                {contacts.faces.map(a => {
    //                                    <Table.Row>{a.face_token} </Table.Row>
    //                                })}
                                    
                                   
                               
    //                        </Table.Row>
    //                    );
    //                })}
    //            </Table.Body>
    //        </Table>
    //    );
    //}
    render() {
        return (
            <div className="test">
                {contacts.faces.map(elem => (
                    <div>
                        <p>{elem.face_token}</p>
                       
                    </div>
                ))
                }
            </div>
        );
    }
}
export default data;
