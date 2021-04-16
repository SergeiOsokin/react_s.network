import '../style/Profile.css'
import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // тут к нам приходит функция, которая устанавливает состояние для попапа-редактора профиля
            // openEditor: props.openEditor,
            // тут к нам приходит функция, которая устанавливает текущие данные в попап
            //setDataPopUp: props.setDataPopUp
        }
    }

    
    render() {
        //console.log('Не должно быть')
        return (
            <section className='block_profile'>
                <div className='profile__img_container' style={{backgroundImage: `url(${this.props.userData.userUrlAvatar})`}} ></div>
                <p className='profile__name'>{this.props.userData.userName}</p>
                <p className='profile__id'>{this.props.userData.userID}</p>
                <button className='button profile__button_message'>Message</button>
                <button onClick={() => {
                    this.state.openEditor()
                }} className='button profile__button_edit'>Edit</button>
            </section>
        )
    }
}

export default Profile