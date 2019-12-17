let url = ''  // nginx

if (window.location.hostname == "127.0.0.1") url = 'http://127.0.0.1:3600' // 'http://localhost:3600'


export const appConfig = {
    apiUrl: url,
    domenName: 'http://r4.okm.pub'
}