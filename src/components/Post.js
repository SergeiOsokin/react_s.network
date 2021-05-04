import '../style/Post.css';
import React from 'react';

function Post({ post }) {

    function isLike(event) {
        event.target.closest('.post__like').classList.toggle('post__like_liked');
        // это для будущего, чтобы снимать лайк и передавать на сервер нужный id
        //event.target.closest(".post").getAttribute("owner");
    }
    // иначе новый пост ломался из-за undefined
    function countLike(arr) {
        if(!arr) {return 0};
        return arr.length
    }

    return (
        <div className='post' owner={`${post.idOwnerPost}`}>
            <div className='post__header'>
                <div className='post__img_autor' style={{ backgroundImage: `url(${post.avatarOwner})` }}></div>
                <p className='post__img_id'>{post.ownerPost}</p>
                <button className='post__menu'>...</button>
            </div>

            <img src={`${post.link}`} className='post__img' alt='' />
            <div className='post__buttons'>
                <div className='like-container'>
                    <button className='post__like' onClick={isLike}></button>
                    <p className='post__like-sum'>{countLike(post.likes)}</p>
                </div>
                {/* <button className='post__share' onClick={share}>Share</button>                 */}
                <a href={`https://vk.com/share.php?url=${document.URL}&title=TitleExam&description=Tratata&image=${post.link}`} target="_blank">Share VK</a>
            </div>
            <p className='post__test'>{post.text}</p>
        </div>
    );
}

export default Post