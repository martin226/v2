export default function CurvedArrow({ className }) {
  return (
    <div className={`flex items-end opacity-0 animate-[fadeIn_0.5s_ease-in_forwards] ${className}`}>
      <div className="relative">
        <p className="text-sm text-stone-600 dark:text-stone-400 font-medium mb-1 whitespace-nowrap">
          psst... try this!
        </p>
        <svg
          width="40"
          height="30"
          viewBox="0 0 40 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform -scale-x-100 rotate-[15deg]"
        >
          <path
            d="M5 2C5 2 20 2 25 8C30 14 30 25 30 25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-stone-400"
          />
          <path
            d="M25 20L30 25L22 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-stone-400"
          />
        </svg>
      </div>
    </div>
  );
} 