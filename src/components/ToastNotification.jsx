import { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

export function ToastNotification({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      id="toast-notification"
      className="fixed bottom-6 right-6 z-50 max-w-sm flex items-start gap-3 p-4 rounded-2xl glass-elevated bg-white/95 border border-black/8 shadow-2xl animate-in slide-in-from-bottom-4 duration-300"
      role="status"
      aria-live="polite"
    >
      <CheckCircle className="w-5 h-5 text-[#0071e3] shrink-0 mt-0.5" />
      <div className="text-xs sm:text-sm text-neutral-800 leading-snug font-medium">
        {message}
      </div>
      <button
        onClick={onClose}
        className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
        aria-label="Dismiss toast"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
