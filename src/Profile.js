import './style/Profile.css'
import React from 'react';
import ReactDOM from 'react-dom';
import PopupEditor from './PopupEditor';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Undefined',
            id: 'XXXXXX',
            urlPhoto: 'https://cdn.pixabay.com/photo/2019/12/26/10/44/horse-4720178__340.jpg',
            // тут к нам приходит функция, которая устанавливает состояние для попапа-редактора профиля
            openEditor: props.openEditor 
        }
    }


    render() {
        return (
            <section className='block_profile'>
                <div className='profile__img_container'></div>
                <p className='profile__name'>{this.state.name}</p>
                <p className='profile__id'>{this.state.id}</p>
                <button className='button profile__button_message'>Message</button>
                <button onClick={this.state.openEditor} className='button profile__button_edit'>Edit</button>
            </section>
        )
    }
}

export default Profile