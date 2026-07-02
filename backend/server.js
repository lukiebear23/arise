const express = require('express');
const path = require('path');
const admin = require('firebase-admin');

const app = express();
const PORT = process.env.PORT || 8080;

const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
const volunteersRef = db.collection('volunteers');

const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'changeme';

function requireAdmin(req, res, next) {
  const header = req.headers.authorization || '';
  const [scheme, encoded] = header.split(' ');

  if (scheme === 'Basic' && encoded) {
    const decoded = Buffer.from(encoded, 'base64').toString('utf-8');
    const sepIndex = decoded.indexOf(':');
    const user = decoded.slice(0, sepIndex);
    const pass = decoded.slice(sepIndex + 1);
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      return next();
    }
  }

  res.set('WWW-Authenticate', 'Basic realm="Arise admin"');
  return res.status(401).send('Authentication required.');
}

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'frontend')));

app.post('/api/volunteers', async (req, res) => {
  const { fullName, email } = req.body || {};

  if (!fullName || !email) {
    return res.status(400).json({ error: 'fullName and email are required' });
  }

  const entry = {
    fullName: String(fullName).slice(0, 200),
    email: String(email).slice(0, 200),
    phone: String(req.body.phone || '').slice(0, 50),
    area: String(req.body.area || '').slice(0, 200),
    interests: Array.isArray(req.body.interests) ? req.body.interests.slice(0, 20) : [],
    availability: String(req.body.availability || '').slice(0, 100),
    message: String(req.body.message || '').slice(0, 2000),
    submittedAt: admin.firestore.FieldValue.serverTimestamp()
  };

  try {
    const docRef = await volunteersRef.add(entry);
    res.status(201).json({ ok: true, id: docRef.id });
  } catch (err) {
    console.error('Failed to save volunteer:', err);
    res.status(500).json({ error: 'Failed to save signup' });
  }
});

app.get('/api/volunteers', requireAdmin, async (req, res) => {
  try {
    const snapshot = await volunteersRef.orderBy('submittedAt', 'desc').get();
    const list = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        submittedAt: data.submittedAt ? data.submittedAt.toDate().toISOString() : null
      };
    });
    res.json(list);
  } catch (err) {
    console.error('Failed to fetch volunteers:', err);
    res.status(500).json({ error: 'Failed to fetch signups' });
  }
});

app.get('/admin', requireAdmin, (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'admin.html'));
});

app.listen(PORT, () => {
  console.log(`Arise server running at http://localhost:${PORT}`);
});
