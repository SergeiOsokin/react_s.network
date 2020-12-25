import './style/main.css';
import Profile from './Profile';
import Posts from './Post';
import AddPost from './AddPost';
import PopupEditor from './PopupEditor';
import PopupAddPost from './PopupAddPost';
import React from 'react';
import postsArr from './posts'

function Main() {

  // Хук. isEditProfilePopupOpen - состоние, setisEditProfilePopupOpen - функция для изменения состояния
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPostPopupOpen, setisAddPostPopupOpen] = React.useState(false);

  const [urlAvatar, setURL] = React.useState('https://cdn.pixabay.com/photo/2020/06/16/16/00/covid-5306374__340.png');
  const [nameUser, setName] = React.useState('Сергей MAIN');
  const [idUser, setID] = React.useState('1212');

  // меняет внутреннее состояние на противоположное
  function handleEditProfileClick() {
    setisEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPostClick() {
    setisAddPostPopupOpen(!isAddPostPopupOpen);
  }


  function closeAllPopups() {
    setisEditProfilePopupOpen(false);
    setisAddPostPopupOpen(false);
  }

  function setDataUSer(data) {
    setURL(data.urlAvatar)
    setName(data.name)
    setID(data.id)
  }

  return (
    <div>
      <main className='main'>
        {/* передаем функцию, которая будет менять состоние у попапа (другого компонента)  */}
        <Profile openEditor={handleEditProfileClick} 
        userData={{
          userName: nameUser,
          userID: idUser,
          userUrlAvatar: urlAvatar
        }}
          setDataPopUp={setDataUSer}
        />
        <Posts />
        {/* <Posts arrPosts={postsArr} /> */}
        <AddPost openAddPoster={handleAddPostClick} />
      </main>
      <section className='popups'>
        {/* попапу передаем текущее состяние и функцию для изменения состояния (закрытия попапа) */}
        <PopupEditor
          isOpen={isEditProfilePopupOpen}
          isClose={closeAllPopups}
          setNewData={setDataUSer}
        />
        <PopupAddPost isOpen={isAddPostPopupOpen} isClose={closeAllPopups} />
      </section>
    </div>
  );
}

export default Main;
