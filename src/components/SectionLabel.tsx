interface SectionLabelProps {
  label: string;
  dark?: boolean;
}

const SectionLabel = ({ label, dark = false }: SectionLabelProps) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-8 h-px bg-swann-gold" />
    <span
      className="font-body text-[11px] uppercase tracking-[0.15em] text-swann-gold"
    >
      {label}
    </span>
  </div>
);

export default SectionLabel;
