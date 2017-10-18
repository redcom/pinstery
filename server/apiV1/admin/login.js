import {AuthenticationContext} from 'adal-node';
const getToken = () => {
const authorityHostUrl = 'https://login.windows.net';
const tenant = '58c1e11f-5d56-418e-8f64-933b1052da8f';
const authorityUrl = authorityHostUrl + '/' + tenant;
const clientId = '27679c88-3561-49bb-9391-79eb9cb80e11';
const clientSecret = 'Cyuxf7wga3TkmuuCAv2VrOa'
const resource = '00000002-0000-0000-c000-000000000000';
const context = new AuthenticationContext(authorityUrl);

context.acquireTokenWithClientCredentials(resource, clientId, clientSecret, function(err, tokenResponse) {
  if (err) {
    console.log('well that didn\'t work: ' + err.stack);
  } else {
    console.log(tokenResponse);
  }
});
}
export const login = (req, res) => {





  const storage = req.app.get('storage')({ bucket: 'admin' });
  getToken();
  return;
  const { email, password } = req.body;
  storage.getAll().once('value', s => {
    const admins = s.val();
    if (admins) {
      const admin = Object.values(admins)[0];
      const itemExists = admin.email === email && admin.password === password;
      if (itemExists) {
        (async () => {
          const token = await getToken(admin.token);
          res.json({
            email,
            token,
            url: getAuthUrl(),
          });
        })();
      } else {
        res.sendStatus(403).end('Login with email and password');
      }
    } else {
      const existingItemRef = storage.findById({});
      existingItemRef.once('value', snapshot => {
        const existingItems = snapshot.val();
        if (!existingItems || !existingItems.length) {
          const newItemRef = storage.put({ email, password });
          newItemRef.once('value', snapshot => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json({
              email: snapshot.val().email,
              url: getAuthUrl(),
            });
          });
        }
      });
    }
  });
};

