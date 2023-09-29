import ReviewList from "./ReviewList/ReviewList";
import UserList from "./UserList/UserList";
import "./UsersAndReviews.css";

const UsersAndReviews = () => {
  return (
    <div className="admin-list-wrapper">
      <UserList />
      <ReviewList />
    </div>
  );
};

export default UsersAndReviews;
