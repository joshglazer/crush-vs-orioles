import React from "react"
import { FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-orioles">
      <div className="w-full sm:flex justify-between p-2 sm:p-4 text-sm">
        <p className="w-full sm:w-1/2 text-white text-center sm:text-left pb-2 sm:pb-0">
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

        <p className="w-full sm:w-1/2 text-white text-center sm:text-right">
          <a
            href="https://github.com/joshglazer/crush-vs-orioles"
            className="font-bold no-underline text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="inline mr-1" />
            Source Code on GitHub
          </a>
        </p>
      </div>
    </footer>
  )
}
