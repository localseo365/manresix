import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export function NavLink({ href, children, mobile }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`text-white hover:text-[#FF6B00] transition-colors ${
        mobile ? 'block py-2' : ''
      }`}
    >
      {children}
    </a>
  );
}