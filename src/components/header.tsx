import React from "react";

function Header() {
  return (
    <header className="flex bg-gray-50 w-full px-4 py-3">
      <nav className="flex justify-between items-center gap-8 w-full rounded border-2 border-black/10 py-2">
        <a className="" href="/" aria-label="home">
          <span className="text-lg font-bold px-4 py-2">monkeytype</span>
        </a>
      </nav>
    </header>
  );
}

export default Header;
