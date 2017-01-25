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
    code: req.query.code,
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
    return request.get('https://api.linkedin.com/v1/people/~')
    .set('Authorization', `Bearer ${response.body.access_token}`);
  })
  .then(response => {
    debug('linkedin-oauth-middleware response after access-token request', response.body);
    req.linkedinOAUTH = {
      linkedinID: response.body.id,
      firstName: response.body.firstName,
      lastName: response.body.lastName,
      title: response.body.headline,
      //profilePic: response.body.siteStandardProfileRequest.url,
    };
    next();
  })
  .catch((err) => {
    req.googleError = err;
    next();
  });
};
