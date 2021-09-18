import React,  { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import { deletePost} from '../actions/postActions'

class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        // redirect the user back to the home page using the push function
        this.props.history.push('/')
    }
    render () {
        console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">
                    {this.props.post.title}
                </h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )

        return (
            <div className="container">
                <h4>{ post }</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    // console.log(id)
    return {
        post: state.posts.find(post => Number(post.id) === Number(id))
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deletePost: (id) => { dispatch(deletePost(id))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)