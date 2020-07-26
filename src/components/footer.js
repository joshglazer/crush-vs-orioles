import React from "react"

export default function Footer() {
  return (
    <footer className="bg-orange-600">
      <div className="w-full md:flex justify-between p-4 md:p-8 text-sm">
        <p className="w-full md:w-1/2 text-white text-center md:text-left pb-2 md:pb-0">
          A{" "}
          <a
            href="https://www.linkedin.com/in/joshglazer/"
            className="font-bold no-underline text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Josh Glazer
          </a>{" "}
          Project
        </p>

        <p className="w-full md:w-1/2 text-white text-center md:text-right">
          <a
            href="https://github.com/joshglazer/crush-vs-orioles"
            className="font-bold no-underline text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <FaGithub />  */}
            Source Code on GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}
