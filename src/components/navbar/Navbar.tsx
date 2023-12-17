import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src="logo.svg" alt="logo" />
            <span>Dataly</span>
        </div>
        <div className="icons">
            <img src="search.svg" alt="search" />
            <img src="app.svg" alt="search" />
            <img src="expand.svg" alt="search" />
            <div className="notification">
                <img src="/notifications.svg" alt="" />
                <span>1</span>

            </div>
            <div className="user">
                <img src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <span>Blatter</span>

            </div>
            <img src="settings.svg" alt="" />
        </div>
    </div>
  );
}