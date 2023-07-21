import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

export default function Rate({ count, rating }) {
  return (
    <div className="flex gap-x-1">
      {Array(count)
        .fill(null)
        .map((_, i) => {
          return <FaStar key={i} color={rating >= i + 1 ? "#E9AFFC" : ""} />;
        })}
    </div>
  );
}

Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
};

Rate.defaultProps = {
  count: 5,
  rating: 0,
};
