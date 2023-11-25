import { Dropbox } from 'dropbox';

const dbx = new Dropbox({
    accessToken:
        'sl.BqjRsD19gEUQVeQYnFlnY4ybsEFhTHNrEJUI6wABaWWCP8M4RxtvwBIgpKDlE4rm2cjPVJ8pR5GEpTy192VgqjS2B0II0UAnd6xZ6izQlOZM3Jc-g-07tjncdnne7hioYPpIls8iMTcs',
    fetch,
});

dbx.filesListFolder({
    path: '',
}).then((res) => console.log(res.result));
