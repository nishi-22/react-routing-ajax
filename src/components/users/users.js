import React, {Component} from 'react';
import axios from "axios";

class Users extends Component {
    state={
        userData: []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
    .then( response => {
            this.setState({userData: response.data});
        }).catch(function (error) {
            console.warn(error);
        });
    }
    render(){
        return (
            <div className="container-fluid">


                <div className="row p-3">
                    <table className="table table-striped table-bordered">
                        <thead style={{backgroundColor: '#53A1A9'}}>
                        <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email Id</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.userData.map(data=>{
                            return (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                    <td>{data.address.street} , {data.address.suite},{data.address.city},{data.address.zipcode}</td>
                                    <td>{data.phone}</td>
                                    <td><a href={data.website}>{data.website}</a></td>
                                    <td>{data.company.name}</td>

                                </tr>
                            )
                        })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }

}

export default Users;
