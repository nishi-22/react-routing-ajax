import React, {Component} from 'react';
import axios from "axios";



class Posts extends Component{
    state = {
        posts: []
    };
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( response => {
                this.setState({posts: response.data});
            }).catch(function (error) {
            console.warn(error);
        });
    }
    render(){
        return (
            <div>
                <div className="m-5">
                    <table className="table table-striped">
                        <thead style={{backgroundColor: '#53A1A9'}}>
                        <tr>
                            <th>UserId</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>

                        </tr>
                        </thead>
                        <tbody>
                        {this.state.posts.map(data=>{
                            return (
                                <tr key={data.id}>
                                    <td>{data.userId}</td>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.body}</td>

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

export default Posts;
