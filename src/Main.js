import './style/main.css';
import Profile from './Profile';
import Posts from './Post';
import AddPost from './AddPost';
import PopupEditor from './PopupEditor';
import PopupAddPost from './PopupAddPost';

function Main() {
  return (
    <div>
      <main className='main'>
        <Profile />
        <Posts />
        <AddPost />
      </main>
      <section className='popups'>
        {/* <PopupEditor /> */}
        {/* <PopupAddPost /> */}
      </section>
    </div>
  );
}

export default Main;
