import React, { useState } from "react";
import "../styles/AdminDashboard.css";
import Logo from "../assets/Frame.png";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import SchoolIcon from "@mui/icons-material/School";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UserManagement from "../components/UserManagement";
import GalleryManagement from "../components/GalleryManagement";

export default function AdminDashboard() {
  //to handle user,gallery and classes management
  const [isUser, setIsUser] = useState(true);
  const [isClass, setIsClass] = useState(false);
  const [isGallery, setIsGallery] = useState(false);

  const HandleIsUser = async () => {
    setIsUser(true);
    setIsClass(false);
    setIsGallery(false);
  };
  const HandleIsClass = async () => {
    setIsClass(true);
    setIsUser(false);
    setIsGallery(false);
  };
  const HandleIsGallery = async () => {
    setIsGallery(true);
    setIsClass(false);
    setIsUser(false);
  };
  return (
    <>
      <div className="Admin-Dashboard">
        <div className="Admin-Side-bar">
          <div className="A-menu-top">
            <div className="A-menu-top-raw">
              <div className="A-menu-login-logo">
                <div className="A-menu-logo">
                  <img src={Logo} alt="LegianPastry" />
                </div>
              </div>
            </div>
          </div>
          <div className="A-menu-middle">
            <div className="A-Nav-home">
              <button className="A-nav-button">
                <div className="A-Navcontent">
                  <div className="A-Navicon-home">
                    <div className="A-user-icon-circle">
                      <div className="A-user-icon">
                        <HomeIcon />
                      </div>
                    </div>
                  </div>
                  <span className="A-Navhome-text">Home</span>
                </div>
              </button>
            </div>
            <button className="A-admin-options">Admin Operations</button>
            <div className="A-Nav-user">
              <button className="A-nav-button" onClick={HandleIsUser}>
                <div className="A-usermanagement">
                  <div className="A-user-icon-circle">
                    <div className="A-user-icon">
                      <AccountCircleIcon />
                    </div>
                  </div>
                  <span className="A-usermanagement-text">User Management</span>
                </div>
              </button>
            </div>
            <div className="A-Nav-classes">
              <button className="A-nav-button" onClick={HandleIsClass}>
                <div className="A-classesmanagement">
                  <div className="A-class-icon-circle">
                    <div className="A-class-icon">
                      <SchoolIcon />
                    </div>
                  </div>

                  <span className="A-classesmanagement-text">
                    Classes Management
                  </span>
                </div>
              </button>
            </div>
            <div className="A-Nav-gallery">
              <button className="A-nav-button" onClick={HandleIsGallery}>
                <div className="A-gallerymanagement">
                  <div className="A-gallery-icon-circle">
                    <div className="A-gallery-icon">
                      <CollectionsIcon />
                    </div>
                  </div>

                  <span className="A-gallerymanagement-text">
                    Gallery Management
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div className="A-menu-bottom">
            <div className="A-menu-bottom-list">
              <div className="A-menu-bottom-nav">
                <div className="A-menu-bottom-content">
                  <div className="A-bottom-logo-content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 6C10.957 6.00132 9.95716 6.41622 9.21968 7.1537C8.4822 7.89118 8.0673 8.89104 8.06598 9.934H10.066C10.066 8.867 10.934 8 12 8C13.066 8 13.934 8.867 13.934 9.934C13.934 10.532 13.453 10.966 12.718 11.56C12.4779 11.7481 12.2472 11.948 12.027 12.159C11.029 13.156 11 14.215 11 14.333V15H13L12.999 14.367C13 14.351 13.032 13.981 13.44 13.574C13.59 13.424 13.779 13.274 13.975 13.116C14.754 12.485 15.933 11.532 15.933 9.934C15.9322 8.89106 15.5176 7.89104 14.7802 7.15347C14.0428 6.4159 13.0429 6.00106 12 6ZM11 16H13V18H11V16Z"
                        fill="black"
                      />
                      <path
                        d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="A-menu-bottom-c-text">Support</div>
                </div>
              </div>
              <div className="A-menu-bottom-nav">
                <div className="A-menu-bottom-content">
                  <div className="A-bottom-logo-content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 16C14.206 16 16 14.206 16 12C16 9.794 14.206 8 12 8C9.794 8 8 9.794 8 12C8 14.206 9.794 16 12 16ZM12 10C13.084 10 14 10.916 14 12C14 13.084 13.084 14 12 14C10.916 14 10 13.084 10 12C10 10.916 10.916 10 12 10Z"
                        fill="black"
                      />
                      <path
                        d="M2.84498 16.136L3.84498 17.866C4.37598 18.783 5.65398 19.127 6.57498 18.596L7.10398 18.29C7.68252 18.7451 8.32039 19.1192 8.99998 19.402V20C8.99998 21.103 9.89698 22 11 22H13C14.103 22 15 21.103 15 20V19.402C15.6793 19.1192 16.3172 18.7454 16.896 18.291L17.425 18.597C18.348 19.127 19.623 18.785 20.156 17.866L21.155 16.137C21.42 15.6777 21.4919 15.132 21.3548 14.6197C21.2177 14.1075 20.8829 13.6706 20.424 13.405L19.919 13.113C20.0263 12.3756 20.0263 11.6264 19.919 10.889L20.424 10.597C20.8827 10.3312 21.2174 9.89433 21.3544 9.38216C21.4914 8.86998 21.4197 8.32436 21.155 7.865L20.156 6.136C19.625 5.216 18.348 4.871 17.425 5.404L16.896 5.71C16.3174 5.25491 15.6796 4.8808 15 4.598V4C15 2.897 14.103 2 13 2H11C9.89698 2 8.99998 2.897 8.99998 4V4.598C8.32062 4.88084 7.6828 5.25459 7.10398 5.709L6.57498 5.403C5.65098 4.872 4.37498 5.216 3.84398 6.135L2.84498 7.864C2.57996 8.3233 2.50809 8.86901 2.64515 9.38126C2.78222 9.89352 3.117 10.3304 3.57598 10.596L4.08098 10.888C3.97321 11.6251 3.97321 12.3739 4.08098 13.111L3.57598 13.403C3.11714 13.669 2.78251 14.106 2.64547 14.6184C2.50843 15.1307 2.58018 15.6765 2.84498 16.136ZM6.17098 13.378C6.05806 12.9273 6.00064 12.4646 5.99998 12C5.99998 11.538 6.05798 11.074 6.16998 10.622C6.22272 10.4113 6.20537 10.1892 6.12056 9.98928C6.03576 9.78935 5.88811 9.6225 5.69998 9.514L4.57698 8.864L5.57498 7.135L6.71998 7.797C6.9067 7.90505 7.12344 7.94962 7.33765 7.92401C7.55185 7.89841 7.75198 7.80401 7.90798 7.655C8.5845 7.01156 9.40031 6.53281 10.292 6.256C10.4968 6.19347 10.6761 6.06683 10.8036 5.89473C10.931 5.72263 10.9999 5.51416 11 5.3V4H13V5.3C13.0001 5.51416 13.0689 5.72263 13.1964 5.89473C13.3238 6.06683 13.5032 6.19347 13.708 6.256C14.5995 6.53321 15.4152 7.0119 16.092 7.655C16.2481 7.80372 16.4482 7.89792 16.6624 7.92352C16.8765 7.94911 17.0932 7.90473 17.28 7.797L18.424 7.136L19.424 8.865L18.3 9.514C18.112 9.62262 17.9644 9.78948 17.8796 9.98938C17.7948 10.1893 17.7774 10.4113 17.83 10.622C17.942 11.074 18 11.538 18 12C18 12.461 17.942 12.925 17.829 13.378C17.7765 13.5888 17.7941 13.8109 17.8791 14.0108C17.964 14.2107 18.1118 14.3775 18.3 14.486L19.423 15.135L18.425 16.864L17.28 16.203C17.0933 16.0948 16.8765 16.0501 16.6623 16.0757C16.448 16.1013 16.2479 16.1958 16.092 16.345C15.4155 16.9884 14.5996 17.4672 13.708 17.744C13.5032 17.8065 13.3238 17.9332 13.1964 18.1053C13.0689 18.2774 13.0001 18.4858 13 18.7L13.002 20H11V18.7C10.9999 18.4858 10.931 18.2774 10.8036 18.1053C10.6761 17.9332 10.4968 17.8065 10.292 17.744C9.40048 17.4668 8.58476 16.9881 7.90798 16.345C7.75228 16.1954 7.55203 16.1007 7.33763 16.0753C7.12322 16.0498 6.90636 16.095 6.71998 16.204L5.57598 16.866L4.57598 15.137L5.69998 14.486C5.88817 14.3775 6.03593 14.2107 6.12091 14.0108C6.20588 13.8109 6.22346 13.5888 6.17098 13.378Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="A-menu-bottom-c-text">Settings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="Admin-Main-content">
          <div className="A-top-bar">
            <div className="A-topbar-container">
              <div className="A-tb-profile">
                <SupervisedUserCircleIcon />
                <span className="A-tb-admin">Admin Name</span>
              </div>
            </div>
          </div>

          {/*Here the changing components*/}
          {/*User Management*/}
          {isUser && (
            <>
              <div className="top-bar-head">
                <span className="top-bar-head-text">User Management</span>
              </div>
              <div className="top-bar-mainsection">
                <UserManagement />
              </div>
            </>
          )}

          {/*Class Management*/}
          {isClass && (
            <>
              <div className="top-bar-head">
                <span className="top-bar-head-text">Class Management</span>
              </div>
              <div className="top-bar-mainsection">class table</div>
            </>
          )}
          {/*Gallery Management*/}
          {isGallery && (
            <>
              <div className="top-bar-head">
                <span className="top-bar-head-text">Gallery Management</span>
              </div>
              <div className="top-bar-mainsection">
                <GalleryManagement />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
