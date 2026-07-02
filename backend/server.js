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

app.get('/api/volunteers', async (req, res) => {
  try {
    const snapshot = await volunteersRef.orderBy('submittedAt', 'desc').get();
    const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(list);
  } catch (err) {
    console.error('Failed to fetch volunteers:', err);
    res.status(500).json({ error: 'Failed to fetch signups' });
  }
});

app.listen(PORT, () => {
  console.log(`Arise server running at http://localhost:${PORT}`);
});
