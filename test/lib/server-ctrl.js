'use strict';

module.exports = exports = {};

exports.serverUp = function(server){
  return new Promise(function(resolve){
    if (!server.isRunning){
      console.log('server running');
      server.listen(process.env.PORT, () => {
        server.isRunning = true;
        resolve();
      });
    }
  });
};

exports.serverDown = function(server, done){
  return new Promise(function(resolve, reject){
    if (server.isRunning){
      server.close(err => {
        if (err) return reject(err);
        server.isRunning = false;
        resolve();
      });
    }
  });
};
