import https from 'https';

function fetchUrl(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'node.js', ...headers } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  try {
    const ghUser = await fetchUrl('https://api.github.com/users/nagajaideep');
    console.log('GitHub Base:', ghUser.public_repos);
    
    const leetcode = await fetchUrl('https://leetcode-stats-api.herokuapp.com/nagajaideep');
    console.log('LeetCode:', leetcode.totalSolved, leetcode.easySolved, leetcode.mediumSolved, leetcode.hardSolved);
  } catch(e) {
    console.error(e);
  }
}
run();
