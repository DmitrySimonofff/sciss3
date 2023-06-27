import React from "react";
import WalletConnectButton from "../WalletConnectButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">
          <img className="logo-1" height="27px" src="ims/logo.svg" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
<li class="nav-item">
<a class="nav-link active" aria-current="page" href="/">Home</a>
</li>
<li class="nav-item">
<a class="nav-link active" aria-current="page" href="/cabinet">Cabinet</a>
</li>
<li class="nav-item">
<a class="nav-link active" aria-current="page" href="/mint">Mint</a>
</li>
<li class="nav-item ss-item">
<a class="nav-link active" aria-current="page" href="/">
<img src="ims/s_fb.svg" alt="fb" />
</a>
</li>
<li class="nav-item ss-item">
<a class="nav-link active" aria-current="page" href="/">
<img src="ims/s_in.svg" alt="fb" />
</a>
</li>
<li class="nav-item ss-item">
<a class="nav-link active" aria-current="page" href="/">
<img src="ims/s_tw.svg" alt="fb" />
</a>
</li>
<li class="nav-item ss-item">
<a class="nav-link active" aria-current="page" href="/">
<img src="ims/s_inst.svg" alt="fb" />
</a>
</li>
</ul>
            <div class="d-flex">
              <WalletConnectButton />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
