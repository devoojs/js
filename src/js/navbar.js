customElements.define('header-component',class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
  this.innerHTML = `
  <style>
    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #7f7f7f
    }

    ul {
      padding: 0;
    }

    ul li {
      list-style: none;
      display: inline;
    }

    a {
      font-weight: 700;
      margin: 0 25px;
      color: #7f7f7f;
      text-decoration: none;
    }

    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
  </style>
  <header>
    <nav>
      <ul>
      <li><a href="index.html">devoojs</a></li>
        <li><a href="header.html">HTML</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">JS</a></li>
      </ul>
    </nav>
  </header>
  `;
  }
});