const initState = {
    posts:[
        {id: 1, title:'sunt aut facere repellat provident', body:'The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more'},
        {id: 2, title:'occaecati excepturi optio reprehenderit', body:'The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more'},
        {id: 3, title:'occaecati excepturi optio reprehenderit', body:'The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type ===  'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state
}

export default rootReducer