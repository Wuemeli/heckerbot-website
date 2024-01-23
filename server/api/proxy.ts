export default defineEventHandler(async (event) => {
    const response = await fetch('http://45.13.226.22:4043/stats');
    return response;
});