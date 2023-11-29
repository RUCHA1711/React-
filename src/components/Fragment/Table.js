// React Fragment Example: 
import React from "react";

const Table = ({ children, style }) => {
    return <div>{children}</div>;
};

const TableData = () => {
    return (
        <React.Fragment>
            <td>John Doe</td>
            <td>16</td>
            <td>Developer</td>;
        </React.Fragment>
    );
}

function App() {
    return (
        <Table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Occupation</th>
            </tr>
            <TableData />
        </Table>
    );
}
export default App;