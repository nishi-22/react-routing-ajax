import React, {Component} from 'react';
import axios from "axios";

class Albums extends Component{
    state = {
        albums: []
    };
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then( response => {
                this.setState({albums: response.data});
            }).catch(function (error) {
            console.warn(error);
        });
    }
    render(){
        return (
            <div className="container-fluid">

                <div className="row p-3">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <table className="table table-striped table-bordered">
                            <thead style={{backgroundColor : '#53A1A9'}}>
                            <tr>
                            <th>User ID</th>
                            <th>ID</th>
                            <th>Title</th>
                            </tr>
                            </thead>
                            <tbody id="albums">
                            {this.state.albums.map(data=>{
                                return (
                                    <tr key={data.id}>
                                        <td>{data.userId}</td>
                                        <td>{data.id}</td>
                                        <td>{data.title}</td>
                                    </tr>
                                )
                            })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        )
    }


}

export default Albums;
