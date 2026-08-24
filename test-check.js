import http from 'http';

const endpoints = [
  '/',
  '/index.html',
  '/features.html',
  '/about.html',
  '/waitlist.html',
  '/faq.html',
  '/contact.html',
  '/privacy.html',
  '/style.css',
  '/script.js',
  '/translations.js',
  '/assets/landing-hero-woman.jpg',
  '/assets/app-mockup-trio.png',
  '/assets/team-fatima.jpg',
  '/assets/team-surayya.jpg',
  '/assets/team-aminu.jpg',
  '/assets/team-abubakar.jpg',
  '/assets/team-abdussalam.jpg',
  '/assets/og-cover.jpg'
];

console.log('Testing Zahera server endpoints:');

let completed = 0;
endpoints.forEach((p) => {
  const req = http.get({ host: '127.0.0.1', port: 8080, path: p }, (res) => {
    console.log(`  ${p.padEnd(35)} -> Status ${res.statusCode}`);
    completed++;
    if (completed === endpoints.length) {
      console.log('\nAll endpoints checked successfully.');
    }
  });

  req.on('error', (err) => {
    console.error(`  ${p.padEnd(35)} -> ERROR: ${err.message}`);
    completed++;
  });
});
