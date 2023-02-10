import "./Badge.css";

const Badge = ({ vote }) => {
  return <span className="badge"> {Math.round(vote * 10) / 10}</span>;
};
export default Badge;
