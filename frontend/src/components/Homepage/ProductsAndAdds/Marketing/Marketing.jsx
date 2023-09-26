import { useState, useEffect } from "react";
import "./Marketing.css";

const Marketing = ({ items }) => {
  const getRandomAd = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };
  const [currentAd, setCurrentAd] = useState(getRandomAd());
  const [key, setKey] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newAd = getRandomAd();
      setCurrentAd(newAd);
      setKey((prevKey) => prevKey + 1);
    }, 10 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div key={key} className="add-wrapper">
      {currentAd.images.map((item, index) => (
        <img key={index} src={item} alt="Ad" />
      ))}
    </div>
  );
};
export default Marketing;
