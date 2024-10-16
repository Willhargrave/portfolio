import { useEffect } from "react";

const AnimatedBackground = () => {
    useEffect(() => {
        const styleEl = document.createElement('style');
        const keyFrames = `
          @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(10px, 10px) rotate(2deg); }
            50% { transform: translate(0, 15px) rotate(0deg); }
            75% { transform: translate(-10px, 10px) rotate(-2deg); }
          }
        `;
        styleEl.innerHTML = keyFrames;
        document.head.appendChild(styleEl);
        return () => document.head.removeChild(styleEl);
      }, []);
    
      return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute inset-0 bg-gray-100">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute opacity-10 bg-gray-300"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 200 + 50}px`,
                  height: `${Math.random() * 100 + 20}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animation: `float ${Math.random() * 20 + 30}s linear infinite`
                }}
              />
            ))}
          </div>
        </div>
      );
    };
    
    
  
  export default AnimatedBackground;