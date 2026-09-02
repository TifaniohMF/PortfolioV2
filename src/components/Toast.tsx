import React from 'react';
import { Check, Info, Copy } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastProps {
  toasts: ToastMessage[];
  removeToast: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, removeToast }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none max-w-md w-full px-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 rounded-xl border shadow-xl backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-3 bg-white/95 dark:bg-[#0d2a4e]/95 border-sky-500/30 text-slate-900 dark:text-white"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
              {toast.type === 'copied' ? (
                <Copy className="w-3.5 h-3.5" />
              ) : (
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              )}
            </div>
            <span className="text-xs sm:text-sm font-medium">{toast.text}</span>
          </div>
          <button
            type="button"
            onClick={() => removeToast(toast.id)}
            className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            aria-label="Dismiss toast"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};
