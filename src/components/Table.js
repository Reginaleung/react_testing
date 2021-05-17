import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'
import Table from 'react-bootstrap/Table'
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>image</th>
                <th>api</th>
            </tr>
        </thead>
    )
}
const TableBody = (props) => {
    const rows = props.informationData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.image}</td>
                <td>{row.api}</td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}
class Table_1 extends Component {
    render() {
        const {informationData } = this.props

        return (
            <Table>
                <TableHeader />
                <TableBody informationData={informationData} />
            </Table>
        )
    }
}
export default Table_1