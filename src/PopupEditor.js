import './style/Popupeditor.css';
import Profile from './Profile'
import close from './image/close.svg';
import React from 'react';

// function PopupEditor(props) {
//     return (
//         <div className="popup-edit popup_is-opened">
//             <div className="popup-edit__content">
//                 <img src={close} alt="" className="popup-edit__close" />
//                 <h3 className="popup-edit__title">Редактировать профиль</h3>
//                 <form className="popup-edit__form" name="newEdit">
//                     <div>
//                         <input type="text" autoComplete="off" name="nameavatar"
//                             className="popup-edit__input popup-avatar__input_type_name" placeholder="Ссылка на аватар" required />
//                         <div className="error"></div>
//                     </div>
//                     <div>
//                         <input type="text" autoComplete="off" name="nameEdit" className="popup-edit__input popup-edit__input_type_name"
//                             placeholder="Имя" required maxLength="30" minLength="2" />
//                         <div className="error"></div>
//                     </div>
//                     <div>
//                         <input type="text" autoComplete="off" name="aboutSelfEdit"
//                             className="popup-edit__input popup-edit__input_type_about-self" placeholder="придумайте ID" required maxLength="30"
//                             minLength="2" />
//                         <div className="error"></div>
//                     </div>
//                     <button className="button popup-edit__button">Сохранить</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

class PopupEditor extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isClose: props.isOpen
    //     }
    //     this.handleClosePopup = this.handleClosePopup.bind(this)
    // }

    // handleClosePopup() {
    //     console.log('qweqwe')
    //     this.setState({
    //         isClose: !this.state.isClose
    //     })
    // }

    render() {
        // console.log(this.state.isClose)
        return (
            <div className={`popup-edit ${this.props.isOpen && 'popup_is-opened'}`}>
                <div className="popup-edit__content">
                    <img onClick={this.props.isClose} src={close} alt="" className="popup-edit__close" />
                    <h3 className="popup-edit__title">Редактировать профиль</h3>
                    <form className="popup-edit__form" name="newEdit">
                        <div>
                            <input type="text" autoComplete="off" name="nameavatar"
                                className="popup-edit__input popup-avatar__input_type_name" placeholder="Ссылка на аватар" required />
                            <div className="error"></div>
                        </div>
                        <div>
                            <input type="text" autoComplete="off" name="nameEdit" className="popup-edit__input popup-edit__input_type_name"
                                placeholder="Имя" required maxLength="30" minLength="2" />
                            <div className="error"></div>
                        </div>
                        <div>
                            <input type="text" autoComplete="off" name="aboutSelfEdit"
                                className="popup-edit__input popup-edit__input_type_about-self" placeholder="придумайте ID" required maxLength="30"
                                minLength="2" />
                            <div className="error"></div>
                        </div>
                        <button className="button popup-edit__button">Сохранить</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PopupEditor;