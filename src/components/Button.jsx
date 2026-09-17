function Button({
  children,
  href,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "bg-white text-black hover:bg-white/90",
    secondary:
      "border border-white/20 text-white hover:bg-white hover:text-black",
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export default Button;