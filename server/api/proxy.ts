export default defineEventHandler(async (event) => {
    const response = await fetch('http://paid1.daki.cc:4043/stats');
    return response;
});