const BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://vala-score-be-prod.onrender.com' 
  : 'http://localhost:3001';

export function sendMetrics(metrics) {
  const url = `${BASE_URL}/metrics`;

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(metrics),
  });
}

export function fetchServerVersion() {
    return fetch(`${BASE_URL}/version`)
      .then(response => response.json())
      .then(data => data.version);
}

export function sendNavigatorData() {
    return fetch(`${BASE_URL}/navigator`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        userAgent: navigator.userAgent,
        language: navigator.language,
        }),
    })
    .then(response => response.text());
}