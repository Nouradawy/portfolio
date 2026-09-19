import { useEffect } from "react";
import { X } from "lucide-react";
import PresentationApp from "@/features/whatsunity-presentation/src/App";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function WhatsunityPresentationModal({ open, onClose }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#05070a] text-white">
      {/* Floating Close Button */}
      <div className="no-print fixed top-4 right-4 z-[110]">
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-2xl backdrop-blur-xl transition-all hover:bg-white/20 hover:scale-110 active:scale-95"
          aria-label="Close presentation"
          title="Close (Esc)"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Presentation Root Content */}
      <div className="relative flex-1 h-full w-full overflow-auto">
        <PresentationApp />
      </div>
    </div>
  );
}
