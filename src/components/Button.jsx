import PropTypes from "prop-types";

export default function Button({
  text = "",
  variant = "",
  color = "",
  custom = "",
  onClick,
}) {
  const contained = variant === "contained";
  const outlined = variant === "outlined";

  let variantStyle = "";

  if (contained) {
    switch (color) {
      case "primary":
        variantStyle =
          "bg-primary dark:bg-white dark:text-black border border-transparent text-white hover:bg-black/5 dark:hover:bg-white/90 hover:text-black";
        break;
      case "secondary":
        variantStyle =
          "bg-secondary border border-primary dark:text-black hover:bg-black/5 dark:hover:bg-white/90";
        break;
      case "light":
        variantStyle =
          "bg-light text-black border border-primary hover:bg-black/5 dark:hover:bg-white/90";
        break;
      default:
        break;
    }
  }

  if (outlined) {
    switch (color) {
      case "primary":
        variantStyle =
          "border border-primary dark:border-white hover:bg-black/5 dark:hover:bg-white/90";
        break;
      case "secondary":
        variantStyle =
          "border border-secondary hover:bg-black/5 dark:hover:bg-white/90";
        break;
      case "light":
        variantStyle =
          "border border-light hover:bg-black/5 dark:hover:bg-white/90";
        break;
      default:
        break;
    }
  }

  return (
    <button
      className={`${variantStyle} ${custom} rounded-full px-4 py-2 font-medium transition-all ease-in-out duration-300`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  custom: PropTypes.string,
  onClick: PropTypes.func,
};
