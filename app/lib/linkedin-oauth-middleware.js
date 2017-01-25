'use strict';

import request from 'superagent';
import Debug from 'debug';
const debug = Debug('nine2five:linkedin-oauth-middleware');

module.exports = function(req, res, next) {
  debug('getting Linkedin user info');
  if (req.query.error) {
    req.linkedinError = new Error(req.query.error);
    return next();
  }

  let data = {
    grant_type: 'authorization_code',
    code: req.query.code, // or code
    client_id: process.env.Linkedin_CLIENT_ID,
    client_secret: process.env.Linkedin_CLIENT_SECRET,
    redirect_uri: `${process.env.API_URL}/api/oauth/linkedin`,
  };

  let accessToken, refreshToken, expiresIn;
  request.post('https://www.linkedin.com/oauth/v2/accessToken')
  .type('form')
  .send(data)
  .then(response => {
    accessToken = response.body.access_token;
    expiresIn = response.body.expires_in;
    refreshToken = response.body.refresh_token;
    return request.get('https://www.linkedin.com/oauth/v2/authorization')
    .set('Authorization', `Bearer ${response.body.access_token}`);
  })
  .then(response => {
    debug('linkedin-oauth-middleware response after access-token request', response.body);
    req.linkedinOAUTH = {
      linkedinID: response.body.sub,
      email: response.body.email,
      accessToken,
      expiresIn,
      refreshToken,
    };
    next();
  })
  .catch((err) => {
    req.googleError = err;
    next();
  });
};
