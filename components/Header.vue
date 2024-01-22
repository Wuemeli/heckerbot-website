<template>
    <header class="header" data-header>
        <div class="container">

            <a href="#" class="logo">
                <h1 style="color:#FFFFFF;">Heckerbot</h1>

            </a>

            <nav class="navbar" data-navbar>

                <div class="navbar-top">

                    <a href="#" class="logo">
                        <h2>Heckerbot</h2>

                    </a>

                    <button class="nav-close-btn" aria-label="close menu" data-nav-toggler>
                        <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                    </button>

                </div>

                <ul class="navbar-list">

                    <li>
                        <a href="#" class="navbar-link">Home</a>
                    </li>

                    <li>
                        <a href="#service" class="navbar-link">Services</a>
                    </li>

                    <li>
                        <a href="#stat" class="navbar-link">Stats</a>
                    </li>

                    <li>
                        <a href="#feature" class="navbar-link">Features</a>
                    </li>

                    <li>
                        <a href="/server" class="navbar-link">Server</a>
                    </li>

                </ul>

            </nav>

            <div class="btn-group">


                <a href="https" class="btn btn-primary">Invite Bot</a>
            </div>

            <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
                <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
            </button>

            <div class="overlay" data-overlay data-nav-toggler></div>

        </div>
    </header>
</template>