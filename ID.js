/ *
Quantumult X 1.0.3 加ID

QX 1.0.3：
^  ^https:\/\/(raw.githubusercontent|\w+\.github)\.(com|io)\/.*\.js$ url script-response-body https://raw.githubusercontent.com/eR1zxNO/Rewrite/master/ID.js

MitM = raw.githubusercontent.com, *.github.io, 
* /

var body = $response.body;
body = '\/*\n@supported 8CAAE3BAA2B1\n*\/\n' + body;

$done(body);
