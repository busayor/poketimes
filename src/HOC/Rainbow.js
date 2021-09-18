import React from 'react'

const Rainbow = (WrappedContainer) => {
    const colors = ['red', 'pink', 'orange', 'blue', 'yellow'];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const className = randomColor + '-text'

    return(props)=> {
        return(
            <div className={className}>
                <WrappedContainer {...props}/>
            </div>
        )
    }
}

export default Rainbow