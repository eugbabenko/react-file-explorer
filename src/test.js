import { Dropbox } from 'dropbox';

const dbx = new Dropbox({
    accessToken:
        'sl.BqeKDV07TCdiEBSkN0m_QCfTBeEaZSQE_VgVQAE7O8B2zrlD4XkxHrmxQacbWlRvX73Co3Q_JA93tcDvsaIO9pYrphb931D9G8gfqqTnZ20PCJfbb8hweEO90sdA9Dpx8cJw9bpu3iyY',
    fetch,
});

dbx.filesListFolder({
    path: '',
}).then((res) => console.log(res.result));
