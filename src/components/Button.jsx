import React from 'react';

const Button = ({id, title, leftIcon, rightIcon, addition}) => {
  return (
    <button className={`cursor-pointer group relative bg-yellow-300 text-black md:text-xs text-[10px] md:px-6 px-3 py-2 md:py-[10px] rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg z-50 ${addition} w-fit`}>
      <div className="relative flex items-center justify-center gap-2">
        <div>
            {leftIcon}
        </div>
        <span className="relative inline-block overflow-hidden">
          <span className="block transition-transform duration-300 group-hover:-translate-y-full uppercase font-nav">
            {title}
          </span>
          <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0 uppercase font-nav">
            {title}
          </span>
        </span>
        <div>
            {rightIcon}
        </div>
      </div>
    </button>
  );
}

export default Button;
