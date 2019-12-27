var body = $response.body;
body = '\/*\n@supported 自己的设备ID\n*\/\n' + body;

$done(body);