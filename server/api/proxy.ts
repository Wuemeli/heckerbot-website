import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
    try {
        const response = this.$axios.$get('http://paid1.daki.cc:4043/stats');
        return response;
    } catch (error) {
        console.error(`Error making GET request: ${error}`);
    }
});