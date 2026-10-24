import { useState } from "react";

// Renders an <img>; if it fails to load (or no src), renders `fallback`.
function SafeImage({ src, alt, className, fallback, ...rest }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return fallback;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}

export default SafeImage;
