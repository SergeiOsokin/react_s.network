import './style/Popupeditor.css';
import close from './image/close.svg';
import React from 'react';

class PopupEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlAvatar: '',
            nameUser: '',
            userID: '',
            // принимаем функцию, для установки новых значений
            handleSubmit: props.setNewData
        }
        this.handleUserData = this.handleUserData.bind(this)
        this.handleSubmitQQ = this.handleSubmitQQ.bind(this)
    }

    handleUserData(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmitQQ(event) {
        event.preventDefault()
        this.state.handleSubmit({
            urlAvatar: this.state.urlAvatar,
            name: this.state.nameUser,
            id: this.state.userID
        })
        this.props.isClose();
    }

    render() {
        return (
            <div className={`popup-edit ${this.props.isOpen && 'popup_is-opened'}`}>
                <div className="popup-edit__content">
                    <img onClick={this.props.isClose} src={close} alt="" className="popup-edit__close" />
                    <h3 className="popup-edit__title">Редактировать профиль</h3>
                    <form onSubmit={this.handleSubmitQQ} className="popup-edit__form" name="newEdit">
                        <div>
                            <input value={this.props.urlAvatar} onChange={this.handleUserData} type="text" autoComplete="off" name="urlAvatar"
                                pattern="^(http|https):\/\/\w*.\w*.\w*.+"
                                className="popup-edit__input popup-avatar__input_type_name" placeholder="Ссылка на аватар" required />
                            <div className="error">{this.state.errMsg}</div>
                        </div>
                        <div>
                            <input value={this.props.name} onChange={this.handleUserData} type="text" autoComplete="off" name="nameUser" className="popup-edit__input popup-edit__input_type_name"
                                placeholder="Имя" required maxLength="30" minLength="2" />
                            <div className="error">{this.state.errMsg}</div>
                        </div>
                        <div>
                            <input value={this.props.id} onChange={this.handleUserData} type="text" autoComplete="off" name="userID"
                                className="popup-edit__input popup-edit__input_type_about-self" placeholder="придумайте ID" required maxLength="30"
                                minLength="2" />
                            <div className="error">{this.state.errMsg}</div>
                        </div>
                        <button className="button popup-edit__button">Сохранить</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PopupEditor;