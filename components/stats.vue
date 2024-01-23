<template>
    <ServerMarquee />

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

                            <h3 class="h3 card-title">{{ stats.users }}</h3>

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
</template> 

<script>
export default {
    data() {
        return {
            stats: [],
        }
    },
    mounted() {
        fetch('/api/proxy').then(response => response.json()).then(response => {
            this.stats = response;
        });
    }
}
</script>