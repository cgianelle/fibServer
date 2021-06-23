# Running the K6 Tests
~~~~
$ k6 run --vus 1000 --duration 120s script.js 

          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: script.js
     output: -

  scenarios: (100.00%) 1 scenario, 1000 max VUs, 2m30s max duration (incl. graceful stop):
           * default: 1000 looping VUs for 2m0s (gracefulStop: 30s)


running (2m01.3s), 0000/1000 VUs, 344571 complete and 0 interrupted iterations
default ✓ [======================================] 1000 VUs  2m0s

     ✓ status was 200

     checks.....................: 100.00% ✓ 344571 ✗ 0     
     data_received..............: 81 MB   665 kB/s
     data_sent..................: 33 MB   273 kB/s
     http_req_blocked...........: avg=208.23µs min=1µs     med=2µs      max=205.71ms p(90)=3µs      p(95)=4µs     
     http_req_connecting........: avg=183.8µs  min=0s      med=0s       max=172.47ms p(90)=0s       p(95)=0s      
     http_req_duration..........: avg=349.13ms min=20.05ms med=307.98ms max=1.66s    p(90)=466.77ms p(95)=501.41ms
     http_req_receiving.........: avg=34.72µs  min=13µs    med=31µs     max=12.64ms  p(90)=50µs     p(95)=59µs    
     http_req_sending...........: avg=17.27µs  min=5µs     med=11µs     max=44.34ms  p(90)=19µs     p(95)=24µs    
     http_req_tls_handshaking...: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s      
     http_req_waiting...........: avg=349.08ms min=20.01ms med=307.92ms max=1.66s    p(90)=466.73ms p(95)=501.37ms
     http_reqs..................: 344571  2839.847084/s
     iteration_duration.........: avg=349.43ms min=20.12ms med=308.09ms max=1.68s    p(90)=467.03ms p(95)=501.69ms
     iterations.................: 344571  2839.847084/s
     vus........................: 324     min=324  max=1000
     vus_max....................: 1000    min=1000 max=1000

~~~~