import React from "react";

function Header() {
  return (
    <header className="container-fluid">
      <div className="logo float-left">
        <a><img src="#" />LOGO</a>
      </div>

      <nav className="float-right">
        <ul>
          <li><a href="/">home</a></li>
          <li><a href="/about">about</a></li>
          <li><a href="/portfolio">portfolio</a></li>
          <li><a href="/contact">contact</a></li>
        </ul>
      </nav>
    </header>

  )
}
export default Header;
