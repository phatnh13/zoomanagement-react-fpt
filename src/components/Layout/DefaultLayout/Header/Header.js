import React from "react";

const Header = () =>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/buyingticket">Ticket</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/news">New</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="/map">Map</a>
      </li>
    </ul>
  </div>
</nav>

    )
}

export default Header
