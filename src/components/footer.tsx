import React from "react";

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full py-4 px-4 bg-white">
      <div className="">
        <ul className="flex gap-6 w-full items-center justify-center">
          <li className="">
            <a
              className="bg-black/90 text-white font-medium text-sm px-4 py-1 rounded hover:bg-black hover:scale-125"
              href="https://github.com/codesbyayush"
              data-icon="octicon-star"
              data-color-scheme="no-preference: light; light: light; dark: dark;"
              data-show-count="true"
              aria-label="Star awran5/react-one-minute-speed-typing-test-ts on GitHub"
            >
              Star
            </a>
          </li>

          <li className="">
            <a
              className="bg-black/90 text-white font-medium text-sm px-4 py-1 rounded hover:bg-black hover:scale-125"
              href="https://github.com/awran5/react-one-minute-speed-typing-test-ts/fork"
              data-icon="octicon-repo-forked"
              data-color-scheme="no-preference: light; light: light; dark: dark;"
              data-show-count="true"
              aria-label="Fork awran5/react-one-minute-speed-typing-test-ts on GitHub"
            >
              Fork
            </a>
          </li>
          <li className="">
            <a
              className="bg-black/90 text-white font-medium text-sm px-4 py-1 rounded hover:bg-black hover:scale-125"
              href="https://github.com/awran5"
              data-color-scheme="no-preference: light; light: light; dark: dark;"
              aria-label="Follow @awran5 on GitHub"
            >
              Follow
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
