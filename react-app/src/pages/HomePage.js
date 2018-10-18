import React, { Component } from 'react';
import { Table} from 'react-bootstrap'

class Home extends Component {

    render() {
        return (
            <Table responsive='true' bordered='true' condensed='true' hover='true'>
                <thead>
                    <tr>
                        <th>Show name ↑</th>
                        <th>Language</th>
                        <th>Genres</th>
                        <th>Status of show</th>
                        <th>Rating ↑</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Comedy, Action, Science-Fiction</td>
                        <td>Otto</td> 
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Comedy, Action, Science-Fiction</td>
                        <td>Action</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>Comedy</td>
                        <td>Larry the Bird</td>
                        <td>Comedy, Action, Science-Fiction</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}


export default Home;
