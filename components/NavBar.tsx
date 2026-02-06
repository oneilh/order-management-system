"use client";

import { RiGroupLine } from "react-icons/ri";
import { LuShoppingBag } from "react-icons/lu";
import Profile from "./Profile";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const Links = [
    {
      name: "Group Buys",
      icon: <RiGroupLine />,
      href: "/group_buys/",
    },
    {
      name: "Single Buys",
      icon: <LuShoppingBag />,
      href: "/single_buys",
    },
  ];

  return (
    <nav className="flex justify-between items-center p-2 border border-gray-300 rounded-2xl">
      <section className="flex gap-2 items-center">
        {Links.map((link) => {
          const isActive = pathname.startsWith(link.href);

          return (
            <Link
              href={link.href}
              key={link.name}
              className={`
                flex gap-2 items-center py-2 px-4 rounded-xl
                transition-colors duration-300
                
                ${
                  isActive
                    ? "bg-red-500/20 text-red-500 "
                    : "text-neutral-500 hover:bg-red-500/10"
                }
              `}
            >
              {link.icon}
              <p>{link.name}</p>
            </Link>
          );
        })}
      </section>

      <Profile />
    </nav>
  );
};

export default NavBar;
