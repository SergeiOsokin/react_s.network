import '../style/AddPost.css'
import React from 'react';

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openAddPoster: props.openAddPoster
        }

    }

    render() {
        return (
            <div className='add-post'>
                <button onClick={this.state.openAddPoster} className='button add-post_button'>Add post</button>
            </div>
        )
    }
}

export default AddPost