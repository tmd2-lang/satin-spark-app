import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileContactSheet from "./MobileContactSheet";

interface BookConsultationButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const BookConsultationButton = ({ children, className, onClick }: BookConsultationButtonProps) => {
  const isMobile = useIsMobile();
  const [sheetOpen, setSheetOpen] = useState(false);

  if (isMobile) {
    return (
      <>
        <button
          className={className}
          onClick={() => {
            onClick?.();
            setSheetOpen(true);
          }}
        >
          {children}
        </button>
        <MobileContactSheet open={sheetOpen} onClose={() => setSheetOpen(false)} />
      </>
    );
  }

  return (
    <Link to="/contact" className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default BookConsultationButton;
