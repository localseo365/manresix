import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-[#FF6B00]" />
      </div>
      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}