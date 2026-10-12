const paths = {
  apple: (
    <>
      <path d="M12 8c-1.2-1.8-3.3-2.2-5-1.2-2.7 1.8-2.1 6.2-.2 9.3 1.1 1.8 2.2 2.8 3.6 2.1 1-.5 1.7-.5 2.8 0 1.4.7 2.5-.3 3.6-2.1 1.9-3.1 2.5-7.5-.2-9.3C14.9 6 12.8 6.3 12 8Z" />
      <path d="M12 7c-.2-2 1-3.7 3.1-4" />
      <path d="M12.2 5.7c-1.8-1.5-3.6-1.3-4.8-.8" />
    </>
  ),
  baby: (
    <>
      <path d="M5 10a7 7 0 0 1 14 0v5a7 7 0 0 1-14 0v-5Z" />
      <path d="M8.5 12h.01M15.5 12h.01M9 16c1.8 1.4 4.2 1.4 6 0" />
      <path d="M8 7c.8-2 2.1-3 4-3s3.2 1 4 3" />
    </>
  ),
  bandage: (
    <>
      <path d="m4 16 12-12a3 3 0 0 1 4 4L8 20a3 3 0 0 1-4-4Z" />
      <path d="m9 11 4 4M11 9l4 4" />
      <circle cx="8" cy="16" r=".7" fill="currentColor" />
      <circle cx="16" cy="8" r=".7" fill="currentColor" />
    </>
  ),
  bottle: (
    <>
      <path d="M9 3h6v3l2 2v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8l2-2V3Z" />
      <path d="M9 6h6M7 11h10M10 15h4" />
    </>
  ),
  bowl: (
    <>
      <path d="M4 11h16a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7Z" />
      <path d="M7 21h10M8 8c0-1 .7-1.5.7-2.5M12 8c0-1 .7-1.5.7-2.5M16 8c0-1 .7-1.5.7-2.5" />
    </>
  ),
  capsule: (
    <>
      <path d="M7 17a5 5 0 0 1 0-7l3-3a5 5 0 0 1 7 7l-3 3a5 5 0 0 1-7 0Z" />
      <path d="m9 9 6 6" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 1.9-1.4L20 8H6" />
      <circle cx="10" cy="19" r="1.2" />
      <circle cx="17" cy="19" r="1.2" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  citrus: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v16M4 12h16M6.3 6.3l11.4 11.4M17.7 6.3 6.3 17.7" />
    </>
  ),
  clipboard: (
    <>
      <path d="M9 4h6l1 2h3v15H5V6h3l1-2Z" />
      <path d="M9 11h6M9 15h6" />
    </>
  ),
  "credit-card": (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </>
  ),
  droplet: <path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" />,
  file: (
    <>
      <path d="M6 3h8l4 4v14H6V3Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  flower: (
    <>
      <circle cx="12" cy="12" r="2.2" />
      <circle cx="12" cy="6.5" r="2.3" />
      <circle cx="17" cy="10" r="2.3" />
      <circle cx="15" cy="16" r="2.3" />
      <circle cx="9" cy="16" r="2.3" />
      <circle cx="7" cy="10" r="2.3" />
      <path d="M12 18v3m0 0 3 1m-3-1-3 1" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 13h3v6H6a2 2 0 0 1-2-2v-4Zm16 0h-3v6h1a2 2 0 0 0 2-2v-4Z" />
      <path d="M17 19a5 5 0 0 1-5 2" />
    </>
  ),
  heart: <path d="M20.8 8.8c0 4.1-8.8 10-8.8 10S3.2 12.9 3.2 8.8A4.3 4.3 0 0 1 12 6.5a4.3 4.3 0 0 1 8.8 2.3Z" />,
  home: (
    <>
      <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1V10Z" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4c-9 0-15 3.5-15 10a6 6 0 0 0 6 6c6.5 0 9-7 9-16Z" />
      <path d="M4 21c3-5 7-8 12-11" />
    </>
  ),
  lipstick: (
    <>
      <path d="M8 10h8v11H8zM7 21h10M9 10V6l3-3 3 3v4" />
      <path d="M9 6h6" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  money: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M7 10h.01M17 15h.01M12 9.5a2.5 2.5 0 1 0 0 5" />
    </>
  ),
  "medical-cross": (
    <>
      <path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7V3Z" />
    </>
  ),
  phone: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="2" />
      <path d="M10 18.5h4" />
    </>
  ),
  package: (
    <>
      <path d="m3 7 9-4 9 4v10l-9 4-9-4V7Z" />
      <path d="m3 7 9 4 9-4m-9 4v10m-4-16 9 4" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="m8 8 12 12M8 16 20 4M12 12l-2 2" />
    </>
  ),
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 5 5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  soap: (
    <>
      <path d="M7 8h10v12H7zM9 8V5h6v3M10 3h4" />
      <circle cx="17.5" cy="4" r="1" />
      <circle cx="19.5" cy="7" r=".7" />
    </>
  ),
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
  stethoscope: (
    <>
      <path d="M6 3v5a4 4 0 0 0 8 0V3M4 3h4m4 0h4" />
      <path d="M14 8v4a5 5 0 0 0 10 0v-1" />
      <circle cx="19" cy="8" r="2" />
      <circle cx="19" cy="8" r=".4" fill="currentColor" />
      <path d="M19 6V4a2 2 0 0 0-2-2h-1" />
    </>
  ),
  store: (
    <>
      <path d="M4 10v10h16V10M3 10l2-6h14l2 6" />
      <path d="M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0M9 20v-6h6v6" />
    </>
  ),
  tag: (
    <>
      <path d="M20 13 13 20 3 10V4h6l11 9Z" />
      <circle cx="7.5" cy="7.5" r="1" />
    </>
  ),
  thermometer: (
    <>
      <path d="M14 14.8V5a3 3 0 0 0-6 0v9.8a5 5 0 1 0 6 0Z" />
      <path d="M11 11v7" />
      <circle cx="11" cy="18" r="1.6" fill="currentColor" />
    </>
  ),
  tooth: (
    <>
      <path d="M6 4c2-1 4 .5 6 .5S16 3 18 4c3 1.5 2 6-1 9-1.4 1.4-1.7 7-3.7 7-1.3 0-1.3-5-2.3-5s-1 5-2.3 5C6.7 20 6.4 14.4 5 13 2 10 3 5.5 6 4Z" />
    </>
  ),
  trash: (
    <>
      <path d="M4 7h16M10 11v6m4-6v6M6 7l1 14h10l1-14M9 7V4h6v3" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v11H3zM14 10h4l3 3v4h-7" />
      <circle cx="7.5" cy="18" r="2" />
      <circle cx="17.5" cy="18" r="2" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  chevronLeft: (
    <>
      <path
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="48"
        d="M328 112 184 256l144 144"
      ></path>
    </>
  ),
};

function Icon({ name, size = 20, className = "icon" }) {
  const content = paths[name];

  if (!content) {
    throw new Error(`Unknown icon: ${name}`);
  }

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {content}
    </svg>
  );
}

export default Icon;
