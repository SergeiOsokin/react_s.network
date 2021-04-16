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

  const [urlAvatar, setURL] = React.useState('https://cdn.pixabay.com/photo/2021/02/06/06/29/dog-5987025__340.jpg');
  const [nameUser, setName] = React.useState('Сергей MAIN');
  const [idUser, setID] = React.useState('1');

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
  // console.log(postsArr)
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
        <div className='posts-place'>
          <Posts />
          <ServerPost />
        </div>
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
