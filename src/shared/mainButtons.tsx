import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 bg-black text-[#FED702] rounded-full shadow-xl hover:shadow-2xl transition-all ${className}`}
    >
      {children}
    </button>
  );
};

interface MainButtonsProps {
  onProjectsClick?: () => void;
  onJoinUsClick?: () => void;
  className?: string;
}

export const MainButtons: React.FC<MainButtonsProps> = ({
  onProjectsClick,
  onJoinUsClick,
  className = "",
}) => {
  return (
    <div className={`flex justify-center gap-8 ${className}`}>
      <Button onClick={onProjectsClick}>Projects</Button>
      <Button onClick={onJoinUsClick}>Join us</Button>
    </div>
  );
};
