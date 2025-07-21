import React from "react";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({className}) => {
  return (
    <header className={`h-20 w-full border-b-1 px-2 flex justify-between items-center box ${className}`}>
      <span>Header</span>
      <nav className="w-75">
        User
      </nav>
    </header>
  )
}

export default Header;