import React from "react";

export default function Titlebar() {
  return (
    <div className="my-3">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">
            Mobiles
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="/"
            role="button"
            aria-expanded="false"
          >
            Categories
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/">
                Smartphones
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Laptops
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Cameras
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="/">
                More
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link disabled"
            href="/"
            tabindex="-1"
            aria-disabled="true"
          >
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
}
