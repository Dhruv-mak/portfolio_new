"use client";
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  isActive: boolean;
  icon: ReactNode;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function NavLink({ href, isActive, icon, label, onClick }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`flex items-center space-x-1 hover:text-amber-400 transition-colors ${isActive ? 'text-amber-400' : 'text-gray-300'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      {icon}
      <span>{label}</span>
      {isActive && (
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full"
          layoutId="nav-underline"
        />
      )}
    </motion.a>
  );
}