export const ReactIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="2.5" />
      <ellipse
        cx="12"
        cy="12"
        rx="11"
        ry="4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="11"
        ry="4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="11"
        ry="4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
};
