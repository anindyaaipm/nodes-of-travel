"use client";

export default function PrintGuideButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn-editorial-outline-dark !px-4 !py-2 text-[0.65rem] sm:!px-5 sm:!py-2.5"
      title="Print this page or regenerate the PDF (Save as PDF)"
    >
      Print page
    </button>
  );
}
