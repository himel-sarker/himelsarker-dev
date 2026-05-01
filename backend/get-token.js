import { google } from 'googleapis';

const CLIENT_ID = '119269354265-8jueehh1amn2nj1mbcj56v73v4depoo6.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:3001/auth/callback';

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Generate the URL for the user to visit
const url = oauth2Client.generateAuthUrl({
  access_type: 'offline', // This is CRITICAL to get a refresh token
  scope: ['https://www.googleapis.com/auth/gmail.send'],
});

console.log('=========================================');
console.log('Visit this URL to authorize the app:');
console.log(url);
console.log('=========================================');