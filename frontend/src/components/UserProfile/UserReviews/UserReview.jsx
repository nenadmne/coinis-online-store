import React from "react";
import { Link } from "react-router-dom";
import Card from "../../../UI/Card";
import "./UserReview.css";

const UserReview = ({ username, reviewInfo }) => {
  return (
    <Card className="user-review-wrapper">
      <h2> {username}'s reviews</h2>
      {reviewInfo.length > 0 ? (
        reviewInfo.map((item, index) => (
          <div key={index} className="user-review">
            <div className="left-review-side">
              {item.review} ({item.reviewer_rating})
            </div>
            <Link className="user-review-image">
              <img src={item.thumbnail} />
            </Link>
          </div>
        ))
      ) : (
        <p className="notice-message"> You have not reviewed any item yet </p>
      )}
    </Card>
  );
};

export default UserReview;
