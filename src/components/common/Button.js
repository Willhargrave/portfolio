const Button = ({href, onClick, children}) => {
const baseClasses = "w-48 h-12 font-cinzel flex items-center pl-4 text-base font-semibold rounded-lg border border-gray-800 transition-all duration-200 bg-white text-gray-800 hover:border-black hover:bg-gray-100 gap-2";

if (href) {
    return (
        <a
        className={baseClasses}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
      {children}
        </a>
    );
}

return(
    <button 
    className={baseClasses}
    onClick={onClick}>{children}
    </button>
);
};

export default Button;