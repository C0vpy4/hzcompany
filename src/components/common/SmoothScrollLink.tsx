"use client";

import React from 'react';

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const SmoothScrollLink = ({ href, children, className }: SmoothScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};