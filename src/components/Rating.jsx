import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Rating({ rating }) {
  return (
    <div className="flex gap-3">
    <div className="flex items-center gap-1 text-yellow-400 my-2.5">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return <FaStar key={star} />;
        } else if (rating >= star - 0.5) {
          return <FaStarHalfAlt key={star} />;
        } else {
          return <FaRegStar key={star} />;
        }
      })}
    </div>
    <div className="font-bold py-1">{rating}/5</div>
    </div>
  );
}

export default Rating;