import '../style/main.css';
import Profile from './Profile';
import Posts from './Posts';
import AddPost from './AddPost';
import PopupEditor from './PopupEditor';
import PopupAddPost from './PopupAddPost';
import React from 'react';
import ServerPost from './ServerPost';

function Main() {

  // Хук. isEditProfilePopupOpen - состоние, setisEditProfilePopupOpen - функция для изменения состояния
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPostPopupOpen, setisAddPostPopupOpen] = React.useState(false);

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

  return (
    <div>
      <main className='main'>
        {/* передаем функцию, которая будет менять состоние у попапа (другого компонента)  */}
        <Profile openEditor={handleEditProfileClick} />
        <section className='posts-place'>
          <Posts />
          <ServerPost />
        </section>
        <AddPost openAddPoster={handleAddPostClick} />
      </main>
      <section className='popups'>
        {/* попапу передаем текущее состяние и функцию для изменения состояния (закрытия попапа) */}
        <PopupEditor
          isOpen={isEditProfilePopupOpen}
          isClose={closeAllPopups}
        />
        <PopupAddPost isOpen={isAddPostPopupOpen} isClose={closeAllPopups} />
      </section>
    </div>
  );
}

export default Main;
