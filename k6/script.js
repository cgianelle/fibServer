import http from 'k6/http';
import { check, sleep } from 'k6';

// k6 run script.js

// export let options = {
//     stages: [
//       { duration: '30s', target: 20 },
//       { duration: '1m30s', target: 10 },
//     ],
//   };

// export let options = {
//     vus: 10000,
//     duration: '30s',
// };


export default function () {
    let number = Math.floor(Math.random() * 10);
    let url = `http://localhost:3184/fibonacci?term=${number}`
    let response = http.get(url);
    check(response, { 'status was 200': (r) => r.status == 200 });
    // sleep(1);
}
