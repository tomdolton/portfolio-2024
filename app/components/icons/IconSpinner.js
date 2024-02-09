export default function IconSpinner({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#F0F0F0"
        strokeWidth="6"
        r="37"
        strokeDasharray="174.35839227423352 60.119464091411174"
        transform="matrix(1,0,0,1,0,0)"
      ></circle>
    </svg>
  );
}
