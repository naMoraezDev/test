/* eslint-disable no-console */
import * as firebaseAdmin from 'firebase-admin';

const projectId = process.env['PROJECT_ID'];
const privateKey = process.env['PRIVATE_KEY'];
const clientEmail = process.env['CLIENT_EMAIL'];

if (!privateKey || !clientEmail || !projectId) {
  console.log(
    'Failed to load Firebase credentials. Follow the instructions in the README to set your Firebase credentials inside environment variables.',
  );
}

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      projectId,
      privateKey,
      clientEmail,
    }),
    databaseURL: `https://${projectId}.firebaseio.com`,
  });
}

export { firebaseAdmin };
