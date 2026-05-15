const crypto = require('crypto');

const hash = crypto.createHash('sha256').update('miTextoSecreto').digest('hex');
console.log(hash);