import React from "react";
import { Link } from "react-router-dom";
import Card from "../../../UI/Card";
import Button from "../../../UI/Button";
import "./UserInformations.css";

const UserInformations = ({ userInfo }) => {
  return (
    <Card className="account-info">
      <h2> Account informations </h2>
      {userInfo && (
        <ul>
          <li>
            name: <span>{userInfo[0].name}</span>
          </li>
          <li>
            username: <span>{userInfo[0].username}</span>
          </li>
          <li>
            email: <span>{userInfo[0].email}</span>
          </li>
          <li>
            country: <span>{userInfo[0].country}</span>
          </li>
        </ul>
      )}
      <div className="btns">
        <Link>
          <Button name="Edit" className="btn btn-block btn-outline-dark" />
        </Link>
        <Button
          name="Delete my account"
          className="btn btn-block btn-outline-dark"
        />
      </div>
    </Card>
  );
};

export default UserInformations;
