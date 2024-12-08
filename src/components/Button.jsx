import btnIcon from "../assets/button-icon.png";

const Button = ({text}) => {
  return (
    <button className="text-sm text-primary flex justify-center items-center gap-3">
      {text}
      <img src={btnIcon} alt="btn-icon" />
    </button>
  );
};

export default Button;
