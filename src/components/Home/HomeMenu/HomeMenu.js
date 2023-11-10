import { Col } from 'react-bootstrap';
import "./HomeMenu.css"
import { Link } from 'react-router-dom';
const HomeMenu = ({handleClose}) => {
  const emptyUser = {
    userId: 0,
    userName: "",
    email: "",
    role: "",
    token: "",
    expiration: ""
  };
  let userName = "";
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!localStorage.getItem("loginUser")) {
    localStorage.setItem("loginUser", JSON.stringify(emptyUser));
    localStorage.setItem("isLoggedIn", "false");
  } else {
    userName = JSON.parse(localStorage.getItem("loginUser")).userName;
  }

  return (
    <>
      <div className='navigation-wrapper'>
        <Col className='navigation-list__left col-md-6'>
          <ul>
            <li className='navigation-list__logo'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="50" height="47" viewBox="0 0 85.04 85.04">
                <path id="Tagestickets_x5F_V2" d="M23.73 37.82c.09-.67-.55-1.2-1.19-1l-7.66 2.43c-.09.03-.17.04-.26.04-.39 0-.75-.27-.84-.68-.09-.44.2-.87.63-1.01l20.14-6.39c.51-.16 1.07.18 1.12.76.03.4-.26.76-.64.89l-3.45 1.09c-.93.29-.82 1.64.14 1.79l14.48 2.2c.53.08 1.01-.31 1.06-.85.03-.32.15-.7.42-1.16.05-.09.12-.17.2-.24 1.17-.96 2.73-.37 3.11.89.11.36.1.73.01 1.07-.15.52.22 1.05.75 1.14l10.01 1.52c.14.02.28.01.41-.03l2.11-.65c.49-.15.76-.66.61-1.15l-1.66-5.43c-.16-.52-.73-.78-1.23-.58-.13.05-.26.1-.4.14-3.41 1.04-7.03-1.05-7.74-4.64-.18-.9-.6-6.2 4.62-7.08.52-.09.82-.67.66-1.17l-1.66-5.42c-.15-.49-.66-.76-1.15-.61l-11.17 3.43c.03.07.06.15.09.23.3 1.01-.27 2.08-1.28 2.38-.15.04-.3.07-.45.08-.86.05-1.67-.5-1.93-1.36-.02-.07-.04-.14-.05-.21l-36 11.04c-.49.15-.76.66-.61 1.15l7.42 24.18c.15.49.66.76 1.15.61l7.75-2.38c.34-.11.6-.4.64-.76l1.84-14.26zm24.56-8.75c1.45 1.17.89 3.06-.51 3.48-.15.04-.3.07-.45.08-.86.05-1.67-.5-1.93-1.36-.42-1.4.84-2.9 2.61-2.34.1.02.2.07.28.14zm-4.62-5.84c1.17-1.45 3.06-.88 3.47.52.3 1.01-.27 2.07-1.28 2.38-.15.05-.3.07-.45.08-1.25.07-2.4-1.12-1.89-2.7.03-.1.08-.19.15-.28zM13.02 34.56c-.39 0-.75-.27-.84-.69-.09-.44.21-.87.64-1.01l8.55-2.66c.52-.16 1.07.19 1.11.77.03.4-.26.76-.65.88l-8.56 2.66c-.08.04-.17.05-.25.05zm66.27 9.93l-11.33-1.67c0 .1 0 .2-.02.3-.13.93-.9 1.6-1.8 1.65-.12.01-.24 0-.37-.01-1.05-.15-1.78-1.12-1.63-2.17.02-.11.04-.21.07-.31l-37.54-5.55c-.54-.08-1.05.3-1.13.84l-3.69 24.97c-.08.54.3 1.05.84 1.13l37.69 5.57v-.04c.15-1.05 1.12-1.78 2.17-1.63 1.05.15 1.78 1.12 1.63 2.17 0 .02-.01.04-.02.06l11.14 1.65c.54.08 1.05-.3 1.13-.84l.81-5.49c.08-.57-.34-1.09-.92-1.14-.12-.01-.24-.02-.36-.04-3.33-.49-5.63-3.59-5.14-6.92.49-3.33 3.59-5.63 6.92-5.14l.36.06c.57.12 1.12-.25 1.2-.82l.81-5.49c.09-.55-.28-1.06-.82-1.14zm-48.39-.1l9.52 1.45c.46.07.78.5.71.97-.06.42-.43.72-.84.72-.04 0-.09 0-.13-.01l-9.52-1.45c-.46-.07-.78-.5-.71-.97s.5-.78.97-.71zm19.99 9.82c-.04 0-.09 0-.13-.01l-20.99-3.22c-.46-.07-.78-.51-.71-.97.07-.46.51-.78.97-.71l20.99 3.22c.46.07.78.51.71.97-.06.42-.42.72-.84.72zm14.23 8.86c-.13.93-.9 1.6-1.8 1.65-.12.01-.24 0-.37-.02-1.05-.15-1.78-1.12-1.63-2.17.15-1.05 1.12-1.78 2.17-1.63 1.05.14 1.78 1.12 1.63 2.17zm.94-6.66c-.13.93-.9 1.6-1.8 1.65-.12.01-.25 0-.37-.01-1.05-.15-1.78-1.12-1.63-2.17.15-1.05 1.12-1.78 2.17-1.63 1.05.14 1.78 1.12 1.63 2.16zm.94-6.65c-.13.93-.9 1.6-1.8 1.65-.12.01-.25 0-.37-.02-1.05-.15-1.78-1.12-1.63-2.17.15-1.05 1.12-1.78 2.17-1.63 1.05.15 1.78 1.12 1.63 2.17z">
                </path>
              </svg>
            </li>
            <li><h1 className='navigation__title'>Ticket</h1></li>
            <li>
            <Link className='navigation__link' to='/viewticket' onClick={handleClose}>
              View Ticket
            </Link>
            </li>
            <li>
            <Link className='navigation__link' to='/buyingticket' onClick={handleClose}>
              Ticket Cart
            </Link>
            </li>
            <li>
            <Link className='navigation__link' to='/searchorder' onClick={handleClose}>
              Check Order
            </Link>
            </li>
          </ul>
          <ul>
            <li className='navigation-list__logo'>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="47" fill="currentColor" className="bi bi-newspaper" viewBox="0 0 16 16">
                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
              </svg>
            </li>
            <li><h1 className='navigation__title'>News</h1></li>
            <li>
            <Link className='navigation__link' to='/zoo-news' onClick={handleClose}>
              View News
            </Link>
            </li>
          </ul>
        </Col>
        <Col className='navigation-list__right col-md-3'>
          <ul>
            <li className='navigation-list__logo'>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="47" fill="currentColor" className="bi bi-map-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z" />
              </svg>
            </li>
            <li><h1 className='navigation__title'>Map</h1></li>
            <li>
            <Link className='navigation__link' to='/map' onClick={handleClose}>
              View Map
            </Link>
            </li>
            <li className='navigation_comment'></li>
          </ul>
          <ul>
            <li className='navigation-list__logo'>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="47" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              </svg>
            </li>
            <li><h1 className='navigation__title'>Opening Hours</h1></li>
            <li>
            <Link className='navigation__link' to='/opening-hours' onClick={handleClose}>
              View Hours
              </Link>
            </li>

          </ul>
        </Col>
        <Col className='navigation-list__right col-md-2'>
          <ul>
            <li>
              
              {isLoggedIn === "false" ? (
              <Link className='navigation__link' to='/login' onClick={handleClose}>
              <h1 className='navigation__title'>Login</h1>
              </Link>
              ) : (
              <>
              <Link className='navigation__link' to='/user/profile' onClick={handleClose}>
              <h1 className='navigation__title'>{userName}</h1>
              </Link>
              <Link className='navigation__link' to='/login'>
              <h1 style={{fontWeight: 'normal', fontSize: '1rem'}} className='navigation__title'>Return to management</h1>
              </Link>
              </>
              )}
        
            </li>
          </ul>
        </Col>
      </div>
    </>
  );
}
export default HomeMenu


