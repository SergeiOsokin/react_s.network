import '../style/Popupeditor.css';
import close from '../image/close.svg';
import React from 'react';
import { connect } from 'react-redux';
import { setProfileInfo } from '../redux/actions';

class PopupEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlAvatar: this.props.profileInfo.urlAvatar,
            nameUser: this.props.profileInfo.nameUser,
            userID: this.props.profileInfo.userID,
        }
        this.handleUserData = this.handleUserData.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUserData(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const { urlAvatar, nameUser, userID } = this.state;
        this.props.setProfileInfo({
            urlAvatar,
            nameUser,
            userID
        })
        // this.props.isClose();
    }

    render() {
        return (
            <div className={`popup-edit ${this.props.isOpen && 'popup_is-opened'}`}>
                <div className="popup-edit__content">
                    <img onClick={this.props.isClose} src={close} alt="" className="popup-edit__close" />
                    <h3 className="popup-edit__title">Редактировать профиль</h3>
                    <form onSubmit={this.handleSubmit} className="popup-edit__form" name="newEdit">
                        <div>
                            <input value={this.state.urlAvatar} onChange={this.handleUserData} type="text" autoComplete="off" name="urlAvatar"
                                pattern="^(http|https):\/\/\w*.\w*.\w*.+"
                                className="popup-edit__input popup-avatar__input_type_name" placeholder="Ссылка на аватар" required />
                            <div className="error">{this.state.errMsg}</div>
                        </div>
                        <div>
                            <input value={this.state.nameUser} onChange={this.handleUserData} type="text" autoComplete="off" name="nameUser" className="popup-edit__input popup-edit__input_type_name"
                                placeholder="Имя" required maxLength="30" minLength="2" />
                            <div className="error">{this.state.errMsg}</div>
                        </div>
                        <div>
                            <input value={this.state.userID} onChange={this.handleUserData} type="text" autoComplete="off" name="userID"
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
// теперь в props есть функция устанавливающая новую информацию в хранилище
const mapDispatchToProps = {
    setProfileInfo,
};

const mapStateToProps = (state) => {
    return {
        profileInfo: state.profile.profile,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupEditor);