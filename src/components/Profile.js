import '../style/Profile.css'
import React from 'react';
import { connect } from 'react-redux';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // тут к нам приходит функция, которая устанавливает состояние для попапа-редактора профиля
            openEditor: props.openEditor,
        }
    }

    
    render() {
        return (
            <section className='block_profile'>
                <div className='profile__img_container' style={{backgroundImage: `url(${this.props.profileInfo.urlAvatar})`}} ></div>
                <p className='profile__name'>{this.props.profileInfo.nameUser}</p>
                <p className='profile__id'>{this.props.profileInfo.userID}</p>
                <button className='button profile__button_message'>Message</button>
                <button onClick={this.state.openEditor} className='button profile__button_edit'>Edit</button>
            </section>
        )
    }
}

// сохраняем определенное состояние для компонента, только то, которое нужно. Берем состояние из редюсера posts
const mapStateToProps = (state) => {
    return {
        profileInfo: state.profile.profile,
    };
};

export default connect(mapStateToProps, null)(Profile);