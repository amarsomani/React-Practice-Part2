import React, { Component } from 'react'
import axios from 'axios';

export class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts : [],
             error : ''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{ console.log(res);
                this.setState({
                    posts : res.data
                })
            }
        )
        .catch(err => {console.log(err)
                this.setState({
                    error : 'Error retrieving data'    
                })
            }
        )
    }
    
    render() {
        const {posts,error} = this.state
        return (
            <div>
                List of Posts
                {
                    posts.length ? posts.map(post => <div key ={post.id}>{post.title}</div>) : null
                }
                {
                    error ? <div>{error}</div> : null
                }
            </div>
        )
    }
}

export default PostList
