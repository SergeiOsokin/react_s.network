import './style/popupAddPost.css'
import React from 'react';

class PopupAddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            close: ''
        }
        this.handleClosePopup = this.handleClosePopup.bind(this)
    }

    handleClosePopup() {
        this.setState({
            close: ''
        })
    }

    render() {
        return (
            <div className={"popup-edit " + `${this.state.close}`}>
                <div className="popup__content">
                    <img onClick={this.handleClosePopup} src="../image/close.svg" alt="" className="popup__close" />
                    <h3 className="popup__title">Новая публикация</h3>
                    <form className="popup__form" name="new">
                        <div>
                            <input type="url" pattern='^(http|https):\/\/\w*.\w*.\w*.+' autoComplete="off" name="link"
                                className="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку" required />
                            <div className="error"></div>
                        </div>
                        <div>
                            <input type="text" autoComplete="off" name="name" className="popup__input popup__input_type_name"
                                placeholder="Ваш текст для картинки" required maxLength="30" minLength="2" />
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