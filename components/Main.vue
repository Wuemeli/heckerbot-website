<template>
    <section class="hero" aria-label="home">
        <div class="container">

            <div class="hero-banner">
                <figure class="hero-banner">
                    <img src="/images/icon.png"
                        width="799" height="823" alt="hero banner" class="w-100">
                </figure>
            </div>
            <div class="hero-content">

                <h1 class="h1 hero-title">Heckerbot: Your Discord Buddy</h1>

                <p class="hero-text">
                    Heckerbot has multiple features which makes your work easier. It is a multipurpose bot which can be
                    used in many ways such as: Backuping, Fun, Games, Utility and things that makes your Life easier
                </p>

                <div class="btn-group">
                    <a href="/invite" class="btn btn-primary">Invite Bot</a>

                    <a href="#" class="play-btn">
                        <div class="icon">
                            <ion-icon name="logo-discord" aria-hidden="true"></ion-icon>
                        </div>

                        <span class="span"><a href="/support">Support Server</a></span>
                    </a>
                </div>

            </div>
        </div>
    </section>

    <section class="section promo" aria-label="promo">
        <div class="container" id="service">

            <h2 class="h2 section-title text-center">What Bot Offers?</h2>

            <p class="section-text text-center">
                It was made under Discord TOS & this bot follows all the policies of Discord
            </p>

            <ul class="grid-list">

                <li>
                    <div class="promo-card bg-gray">

                        <div class="card-icon">
                            <ion-icon name="code-slash-outline" aria-hidden="true"></ion-icon>
                        </div>

                        <h3 class="h3 card-title">Slash Command</h3>

                        <p class="card-text">
                            Recently we have moved to slash command. / is used in every command of this bot
                        </p>

                        <a href="https://discord.com/blog/slash-commands-are-here" class="btn-link">
                            <span class="span">Explore More</span>

                            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                        </a>

                    </div>
                </li>

                <li>
                    <div class="promo-card bg-gray">

                        <div class="card-icon">
                            <ion-icon name="cog-outline" aria-hidden="true"></ion-icon>
                        </div>

                        <h3 class="h3 card-title">Discord Buttons</h3>

                        <p class="card-text">
                            To make the bot more reliable, we have added buttons in this bot which makes your work easier
                        </p>

                        <a href="https://discordjs.guide/interactions/buttons.html#building-and-sending-buttons"
                            class="btn-link">
                            <span class="span">Explore More</span>

                            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                        </a>

                    </div>
                </li>

                <li>
                    <div class="promo-card bg-gray">

                        <div class="card-icon">
                            <ion-icon name="shield-checkmark-outline" aria-hidden="true"></ion-icon>
                        </div>

                        <h3 class="h3 card-title">Trusted Security</h3>

                        <p class="card-text">
                            All the data of the user is kept in a safe place. In case of the need to remove the data, you
                            can contact us
                            anytime
                        </p>

                        <a href="https://www.mongodb.com/" class="btn-link">
                            <span class="span">Explore More</span>

                            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                        </a>

                    </div>
                </li>

            </ul>

        </div>
    </section>

    <section class="stats" aria-label="statistics">
        <div class="container" id="stat">

            <div class="stats-content">

                <h2 class="h2 section-title">Our Bot is in all over Worldwide Coverage</h2>

                <p class="section-text">
                    Our developers worked very hard on this bot & we achieved many things. Thanks to all the servers and
                    users
                    for using this bot
                </p>

                <p class="section-text">
                    This bot was chosen by many servers; they liked the features of this bot. We have received many positive
                    reviews
                    on our bot
                </p>

                <ul class="stats-list">

                    <li>
                        <div class="stats-card bg-gray">

                            <h3 class="h3 card-title">{{ stats.users}}</h3>

                            <p class="card-text">
                                Total Users
                            </p>

                        </div>
                    </li>

                    <li>
                        <div class="stats-card bg-gray">

                            <h3 class="h3 card-title">{{ stats.guilds }}</h3>

                            <p class="card-text">
                                Total Servers
                            </p>

                        </div>
                    </li>

                    <li>
                        <div class="stats-card bg-gray">

                            <h3 class="h3 card-title">{{ stats.votes }}</h3>

                            <p class="card-text">
                                Total Votes
                            </p>

                        </div>
                    </li>

                </ul>

            </div>

            <figure class="stats-banner">
                <img src="/images/stats-banner.png" width="797" height="454" alt="map" class="w-100">
            </figure>

        </div>
    </section>

    <section class="section instruction" aria-label="instruction">
        <div class="container" id="feature">

            <h2 class="h2 section-title text-center">Features of Bot</h2>

            <p class="section-text text-center">
                Heckerbot has many features, but here are some main features of this bot.
            </p>

            <ul class="grid-list">

                <li>
                    <div class="instruction-card bg-gray">

                        <div class="card-icon">
                            <ion-icon name="shield-checkmark-outline"></ion-icon>
                         </div>

                        <h3 class="h3 card-title">Backuping</h3>

                        <p class="card-text">
                            You can backup your Server with one single Command and load it anytime you want
                            You can also setup that the Bot Backups your Server automatically Daily
                        </p>

                    </div>
                </li>

                <li>
                    <div class="instruction-card bg-gray">

                        <div class="card-icon">
                            <ion-icon name="game-controller-outline"></ion-icon>
                        </div>

                        <h3 class="h3 card-title">Fun</h3>

                        <p class="card-text">
                            We offer utillity commands and fun commands. You can use the fun commands to make your server
                            more fun. Like Games and a reminder system
                        </p>

                    </div>
                </li>

                <li>
                    <div class="instruction-card bg-gray">

                        <div class="card-icon">
                            <ion-icon name="utility-outline"></ion-icon>
                        </div>

                        <h3 class="h3 card-title">Utility</h3>

                        <p class="card-text">
                            We offer commands to make your work easier. You can use the utility commands to make your server
                            such as emojichannels, serverinfo etc
                        </p>

                    </div>
                </li>

                <li>
                    <div class="instruction-card bg-gray">

                    <div class="card-icon">
                        <ion-icon name="information-circle-outline"></ion-icon>
                    </div>

                    <h3 class="h3 card-title">Internet Tools</h3>


                        <p class="card-text">
                            We offer commands such as whois, ipinfo, dnslookup etc
                        </p>
                    </div>
                </li>

            </ul>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            stats: [],
        }
    },
    mounted() {
        fetch('http://paid1.daki.cc:4043/stats').then(response => response.json()).then(response => {
            this.stats = response;
        });
    }
}
</script>