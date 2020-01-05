var body = $response.body;
body = '\/*\n@supported 2DF3663F72D0\n*\/\n' + body;

$done(body);
