import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="page-header">
        <h2 className="page-title">Profile</h2>
        <ul className="breadcrumb">
          <li className="breadcrumb__item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb__item active">Profile</li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
