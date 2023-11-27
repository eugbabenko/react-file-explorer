import { Dropbox } from 'dropbox';

const fetch = window.fetch.bind(window);

const dbx = new Dropbox({
    accessToken: import.meta.env.VITE_APP_ACCESS_TOKEN,
    fetch,
});

export default dbx;
