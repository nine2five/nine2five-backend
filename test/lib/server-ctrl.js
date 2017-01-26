'use strict';

module.exports = exports = {};

exports.serverUp = function(server, done){
  console.log('server up');
  if (!server.isRunning){
    console.log('server running');
    server.listen(process.env.PORT, () => {
      server.isRunning = true;
    });
  }
  done();
};

exports.serverDown = function(server, done){
  if (server.isRunning){
    server.close(err => {
      if (err) return done(err);
      server.isRunning = false;
      done();
    });
    return;
  }
  done();
};
