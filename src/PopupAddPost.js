import './style/popupAddPost.css';
import close from './image/close.svg';
import Posts from './Post';
import React from 'react';

class PopupAddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ownerPost: '123456',
            idOwnerPost: '654321',
            link: '',
            text: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUserData = this.handleUserData.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        // this.state.handleSubmit({
        //     ownerPost: this.state.ownerPost,
        //     idOwnerPost: this.state.idOwnerPost,
        //     imagePost: this.state.imagePost,
        //     textPost: this.state.textPost
        // })
        this.props.isClose();
    }

    handleUserData(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
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

export default PopupAddPost;