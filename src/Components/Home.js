import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

class Home extends Component {
    // state = {
    //     posts: []
    // }
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             // console.log(res)
    //             this.setState({
    //                 // use slice method to get just 10 records
    //                 posts: res.data.slice(0,10)
    //             })
    //         })
    // }

    render() {
        // console.log(this.props)
        const { posts } = this.props
        const postsList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        {/* <img src={Pokeball} alt="A pokeball"/> */}
                        <div className="card-content red-text">
                            <Link to={'/' + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">
                 No post yet
            </div>
        )
        return(
            <div className="container home">
                <h4 className="center">Home Page</h4>
                {postsList}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

// connect here is a Higher Order Component (HOC) but it is also a function
export default connect(mapStateToProps)(Home)