import React from 'react';

interface SlideWrapperProps {
  title: string;
  children: React.ReactNode;
}

const SlideWrapper: React.FC<SlideWrapperProps> = ({ title, children }) => {
  return (
    <div className="slide-wrapper">
      <h2 className="slide-title">{title}</h2>
      <div className="slide-content">
        {children}
      </div>
    </div>
  );
};

export default SlideWrapper;