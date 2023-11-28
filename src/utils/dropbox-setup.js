import { Dropbox } from 'dropbox';

// Alias the fetch method from the global window object
const fetch = window.fetch.bind(window);

// Create a new Dropbox instance with the provided access token and fetch method
const dbx = new Dropbox({
    accessToken: import.meta.env.VITE_APP_ACCESS_TOKEN,
    fetch,
});

export default dbx;
