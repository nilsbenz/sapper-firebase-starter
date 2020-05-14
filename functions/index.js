const { https } = require('firebase-functions');
const expressServer = require('./__sapper__/build/server/server');

exports.ssr = https.onRequest(expressServer);
