// A link is "real" only if it's a non-empty URL (not "#").
export const isRealLink = (url) =>
  typeof url === "string" && url.trim() !== "" && url.trim() !== "#";
