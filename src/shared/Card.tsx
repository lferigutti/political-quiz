import PropTypes from "prop-types";

const Card = ({ title, children }) => {
  return (
    <div className="w-full sm:max-w-2xl bg-white p-4 sm:p-8 rounded-lg shadow-lg mt-4">
      <h1 className="text-3xl font-bold">
        {title}
      </h1>
      <div className="mt-4 text-lg space-y-2 flex flex-col">
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
