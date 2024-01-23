<template>
    <section class="section animate-fade" aria-label="top servers">
        <div class="container" id="top">
            <h2 class="h2 section-title text-center">Trusted by {{ stats.guilds }} Servers</h2>
            <p class="section-text text-center">Keeping over {{ stats.users }} users safe and secure </p>
            <br>
            <div class="justify">
                <Vue3Marquee :direction="'normal'" :pause-on-hover="true" @on-pause="playState = 'paused'"
                    @on-resume="playState = 'playing'" :clone="true" :duration="20">

                    <div v-for="(server) in topServers.slice(0, topServers.length / 4)" :key="server.id"
                        class="max-w-sm p-6 rounded-lg shadow  hover:bg-neutral-800">
                        <img :src="server.avatar" alt="server icon"
                            class="w-24 h-24 mx-auto mb-4 rounded-full animate-slide" />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ server ?
                                server.name : '' }}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{{ server ? server.memberCount : '' }}
                            Users</p>
                    </div>


                </Vue3Marquee>

                <Vue3Marquee :direction="'reverse'" :pause-on-hover="true" @on-pause="playState = 'paused'"
                    @on-resume="playState = 'playing'" :clone="true" :duration="30">

                        <div v-for="(server) in topServers.slice(0, topServers.length / 1)" :key="server.id"
                            class="max-w-sm p-6 rounded-lg shadow  hover:bg-neutral-800">
                            <img :src="server.avatar" alt="server icon"
                                class="w-24 h-24 mx-auto mb-4 rounded-full animate-slide" />
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ server ?
                                    server.name : '' }}</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{{ server ? server.memberCount : '' }}
                                Users</p>
                        </div>

                </Vue3Marquee>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    data() {
        return {
            topServers: [],
            stats: []
        }
    },
    mounted() {
        fetch('https://api.heckerbot.dev/stats').then(response => response.json()).then(response => {
            this.topServers = response.topGuilds;
            this.stats = response;
        });
    }
}
</script>