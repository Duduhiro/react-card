import './App.css';

function App() {
  return (
    <>
      <Card />
    </>
  );
}

let testText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a sem at orci laoreet mollis. Suspendisse pharetra eget diam vel dictum. Aliquam ut fringilla augue. Mauris consectetur feugiat justo, vel scelerisque libero. Nam hendrerit fermentum nisi, nec vestibulum tortor mattis ac. Ut laoreet hendrerit neque quis rutrum. Nulla facilisi. Suspendisse pharetra pellentesque suscipit. Nullam eget turpis gravida, vulputate velit vel, finibus nibh. Proin non odio eget nibh condimentum vehicula in ac velit. Donec sollicitudin urna quis laoreet accumsan. Proin tincidunt nulla id ligula volutpat, eget rhoncus justo molestie. Mauris placerat suscipit metus. Mauris auctor rhoncus metus eget faucibus."
let timText = "Happy Easter! 🐇🐣"

function Card() {
  return (
    <div className='card'>
      <Header name="Tim Cook" username="tim_cook" />
      <Message message={timText} date="11:55 · 09/04/23 ·" views="1,4M" />
      <PostStats bookmarks="27" likes="9.656" comments="512" />
    </div>
  );
}

function Header(props) {
  return (
    <div className='header'>
      <img id='profile' src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg" alt='profile-img'/>
      <div className='user-infos'>
        <div className='d-flex name-wrapper'>
          <p id='name'>{props.name}</p>
          <img id='verified' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png" alt='verified-logo' />
        </div>
        <p id='username'>@{props.username}</p>
      </div>
      <img id='logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt='logo-img'/>
    </div>
  );
}

function Message(props) {
  return (
    <div className='message'>
      <p id='message-text'>{props.message}</p>
      <div className='message-infos'>
        <p>{props.date}</p>
        <p><bold>{props.views}</bold> Views</p>
      </div>
    </div>
  );
}

function PostStats(props) {
  return (
    <div className='post-footer'>
      <div className='bookmarks'>
        <p><bold>{props.bookmarks}</bold> Bookmarks</p>
      </div>
      <div className='post-stats'>
        <div className='d-flex likes'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
          <p>{props.likes}</p>
        </div>
        <div className='d-flex comments'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
          </svg>
          <p>{props.comments}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
