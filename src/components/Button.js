const Button = ({href, onClick, children}) => {
const baseClasses = "w-full text-center cursor-poiter text-base font-semibold rounded-lg px-6 py-3 border border-gray-800 transition-all duration-200 bg-white text-gray-800 hover:border-black hover:bg-gray-100";

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