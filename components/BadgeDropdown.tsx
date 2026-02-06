"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { OrderStatus } from "@/utils/orderStatuses"; // Ensure path is correct

const statusStyles: Record<string, string> = {
  PROCESSING: "bg-blue-50 text-blue-700 border-blue-200",
  PACKAGING: "bg-indigo-50 text-indigo-700 border-indigo-200",
  SHIPPING: "bg-sky-50 text-sky-700 border-sky-200",
  READY_FOR_PICKUP: "bg-violet-50 text-violet-700 border-violet-200",
  DELIVERED: "bg-emerald-50 text-emerald-700 border-emerald-200",
  FAILED_PROCESSING: "bg-rose-50 text-rose-700 border-rose-200",
  FAILED_SHIPPING: "bg-red-50 text-red-700 border-red-200",
  REFUND_PENDING: "bg-amber-50 text-amber-700 border-amber-200",
  Default: "bg-slate-50 text-slate-600 border-slate-200",
};

interface BadgeDropdownProps {
  values: string[];
  defaultValue: string;
  onChange: (val: any) => void;
}

export default function BadgeDropdown({
  values,
  defaultValue,
  onChange,
}: BadgeDropdownProps) {
  const [selected, setSelected] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const formatText = (text: string) => 
    text.toLowerCase().replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    setSelected(val);
    onChange(val);
    setIsOpen(false);
  };

  const currentStyle = statusStyles[selected] || statusStyles["Default"];

  return (
    <div className="relative inline-block" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1 rounded-md border text-[11px] font-black tracking-tight transition-all ${currentStyle} hover:brightness-95 active:scale-95`}
      >
        <span>{formatText(selected)}</span>
        <FaChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-60 origin-top-right rounded-xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.15)] border border-slate-100 z-50 overflow-hidden">
          <div className="max-h-64 overflow-y-auto p-1.5">
            <div className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest sticky top-0 bg-white">
              Update Status
            </div>
            <div className="space-y-0.5">
              {values.map((status) => (
                <button
                  key={status}
                  onClick={() => handleSelect(status)}
                  className={`flex w-full items-center justify-between px-3 py-2 text-sm rounded-lg transition-all ${status === selected ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:bg-slate-50"}`}
                >
                  <span className={status === selected ? "font-bold" : "font-medium"}>{formatText(status)}</span>
                  <div className={`w-2 h-2 rounded-full border ${statusStyles[status]?.split(' ')[0] || 'bg-slate-200'}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}