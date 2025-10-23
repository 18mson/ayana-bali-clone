"use client";

interface Toast {
  title: string;
  description?: string;
  duration?: number;
}

export const useToast = () => {
  const toast = ({ title, description }: Toast) => {
    // For now, we'll use a simple alert
    // In a real application, you'd want to use a proper toast library
    alert(`${title}\n${description || ''}`);
  };

  return { toast };
};