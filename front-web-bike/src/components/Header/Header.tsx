import React from "react";
import Link from "next/link";
import { ShoppingBag, Heart, User } from "lucide-react";
import { NAV_ITEMS } from "@/shared/constants/navigation";
import { HeaderProps } from "@/shared/types/navigation";

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 bg-black flex items-center justify-between">
      <Link href="/" className="flex-shrink-0 flex items-start">
        <span className="text-white font-extrabold text-2xl tracking-tighter uppercase font-sans">
          Montblanc
        </span>
        <span className="text-white text-[10px] leading-none ml-1 mt-1">
          &#10022;
        </span>
      </Link>

      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex items-center space-x-12">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-white text-xs font-bold tracking-[0.2em] uppercase hover:text-gray-300 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center space-x-6 flex-shrink-0">
        <button
          className="text-orange-500 hover:text-orange-400 transition-colors"
          aria-label="Cart"
        >
          <ShoppingBag size={20} strokeWidth={1.5} />
        </button>

        <button
          className="text-orange-500 hover:text-orange-400 transition-colors"
          aria-label="Wishlist"
        >
          <Heart size={20} strokeWidth={1.5} />
        </button>

        <button
          className="text-orange-500 hover:text-orange-400 transition-colors"
          aria-label="User Profile"
        >
          <User size={20} strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
};

export default Header;
