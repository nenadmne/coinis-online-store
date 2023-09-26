import OrderedProducts from "./UserProducts/OrderedProducts";
import UserReview from "./UserReviews/UserReview";
import UserInformations from "./UserInformations/UserInformations";
import UserPassword from "./UserPassword/UserPassword.jsx";
import "./UserProfile.css";

const UserProfile = () => {
  const username = "Nenad995";
  const reviewInfo = [];
  const userInfo = [
    {
      name: "Nenad",
      username: username,
      country: "Montenegro",
      email: "cosovicnenad14@gmail.com",
    },
  ];

  return (
    <section className="user-wrapper">
      <UserInformations userInfo={userInfo} />
      <UserPassword />
      <UserReview reviewInfo={reviewInfo} username={username} />
      <OrderedProducts username={username} />
    </section>
  );
};

export default UserProfile;
