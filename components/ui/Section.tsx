import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  id
}) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-slate-light',
    gradient: 'bg-hero-gradient',
  };

  return (
    <section
      id={id}
      className={`section-padding ${bgClasses[background]} ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

export default Section;
