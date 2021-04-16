import '../style/popupAddPost.css';
import close from '../image/close.svg';
import { createPost } from '../redux/actions';
import { connect } from 'react-redux';
import React from 'react';

class PopupAddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ownerPost: 'Lulu',
            idOwnerPost: '654321',
            avatarOwner: 'https://cdn.pixabay.com/photo/2021/03/14/10/13/girl-6093779__340.jpg',
            link: '',
            text: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUserData = this.handleUserData.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createPost(this.state);
    }

    handleUserData(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        return (
            <div className={`popup-edit ${this.props.isOpen && 'popup_is-opened'}`}>
                <div className="popup__content">
                    <img onClick={this.props.isClose} src={close} alt="" className="popup__close" />
                    <h3 className="popup__title">Новый пост</h3>
                    <form onSubmit={this.handleSubmit} className="popup__form" name="new">
                        <div>
                            <input value={this.props.urlAvatar} onChange={this.handleUserData} type="url" pattern='^(http|https):\/\/\w*.\w*.\w*.+' autoComplete="off" name="link"
                                className="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку" required />
                            <div className="error"></div>
                        </div>
                        <div>
                            <input value={this.props.urlAvatar} onChange={this.handleUserData} type="text" autoComplete="off" name="text" className="popup__input popup__input_type_name"
                                placeholder="Ваш текст для поста" required maxLength="30" minLength="2" />
                            <div className="error"></div>
                        </div>

                        <button className="button popup__button">+</button>
                    </form>
                </div>
            </div>
        )
    }
}

//export default PopupAddPost;
const mapDispatchToProps = {
    createPost,
};

// соединяем хранище с компоненотом
export default connect(null, mapDispatchToProps)(PopupAddPost);