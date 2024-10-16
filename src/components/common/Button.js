const Button = ({href, onClick, children}) => {
const baseClasses = "w-48 h-12 flex items-center justify-center text-center cursor-pointer text-base font-semibold rounded-lg border border-gray-800 transition-all duration-200 bg-white text-gray-800 hover:border-black hover:bg-gray-100 overflow-hidden whitespace-nowrap";

if (href) {
    return (
        <a
        className={baseClasses}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
       <span className="truncate px-2">{children}</span>
        </a>
    );
}

return(
    <button 
    className={baseClasses}
    onClick={onClick}><span className="truncate px-2">{children}</span>
    </button>
);
};

export default Button;