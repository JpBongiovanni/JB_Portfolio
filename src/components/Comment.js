import React from 'react';
import './Comments.css';


const Comments = () => {

    return (
    <div className="all">
        <div className="comment-box">
            <h2>Comments</h2>
            <form action="#">
                <input type="text" name="full_name" placeholder="User Name..." />;
                <textarea name="comment" placeholder="Type Your Comment..."></textarea>
                <button type="submit">Comment</button>
            </form>
        </div>
    </div>
    )
}

export default Comments; 