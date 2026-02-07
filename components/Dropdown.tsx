"use client";
import { capitalize } from "@/utils/capitalize";
import { ORDER_STATUSES } from "@/utils/dropdown/orderStatuses";
import { STATUS_STYLES } from "@/utils/dropdown/statusStyles";
import { useEffect, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

type Props = {
  id: string;
  openId: string | null;
  setOpenId: (id: string | null) => void;
  status: string; // ALL CAPS from backend
};

const Dropdown = ({ id, openId, setOpenId, status }: Props) => {
  const [selected, setSelected] = useState(status);
  const isOpen = openId === id;

  useEffect(() => {
    setSelected(status);
  }, [status]);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenId(isOpen ? null : id);
  };

  const styles = STATUS_STYLES[selected] ?? {
    bg: "bg-gray-100",
    border: "border-gray-300",
    text: "text-gray-700",
  };

  return (
    <div className="relative flex flex-col gap-2">
      {/* Button */}
      <div
        className={`w-fit flex gap-2 items-center px-2 py-0.5 text-sm rounded-lg cursor-pointer border
          ${styles.bg} ${styles.border} ${styles.text}`}
        onClick={toggleDropdown}
      >
        {capitalize(selected)}
        <div className={`rounded-full border ${styles.border}`}>
          <IoChevronDownOutline className={styles.text} />
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-9 max-md:right-0 bg-white border border-gray-300 rounded-lg z-20 shadow-md p-2 text-sm">
          {ORDER_STATUSES.map((statusItem) => {
            const isSelected = selected === statusItem;
            const itemStyles = STATUS_STYLES[statusItem];

            return (
              <div
                key={statusItem}
                className={`px-3 py-2 cursor-pointer rounded-md
                  ${
                    isSelected
                      ? `${itemStyles.bg} ${itemStyles.text}`
                      : "hover:bg-gray-100"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelected(statusItem);
                  setOpenId(null);
                }}
              >
                {capitalize(statusItem)}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
