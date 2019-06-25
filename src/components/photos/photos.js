import React, {Component} from 'react';
import axios from "axios";

class Photos extends Component {
    state = {
        photosData : []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then( response => {
                this.setState({photosData: response.data});
            }).catch(function (error) {
            console.warn(error);
        });
    }

    render() {
        return (
            <div className="container-fluid">

                <div className="row p-3">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <table className="table table-bordered">
                            <thead style={{backgroundColor: '#53A1A9'}}>
                            <tr>
                            <th>Album ID</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Image URL</th>
                            <th>Thumbnail Image</th>
                            </tr>
                            </thead>
                            <tbody>

                                            {this.state.photosData.map(data=>{
                                                return (
                                                    <tr key={data.id}>
                                                        <td>{data.albumId}</td>
                                                        <td>{data.id}</td>
                                                        <td>{data.title}</td>
                                                        <td><a href={data.url}>{data.url}</a></td>
                                                        <td><img src={data.thumbnailUrl} style={{borderRadius: '80px', height:'80px'}}/></td>
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

export default Photos;
