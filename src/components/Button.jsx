function Button({
  children,
  href,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "bg-white text-black shadow-lg shadow-white/5 hover:bg-white/90 hover:shadow-white/10",
    secondary:
      "border border-white/20 text-white hover:bg-white hover:text-black",
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white px-6 py-3 text-sm font-medium transition-all duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export default Button;