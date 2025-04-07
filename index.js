const express = require('express');
const { sequelize } = require('./models');

const app = express();
const PORT = 3000;

app.use(express.json())

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});


app.get('/biodata', async (req, res) => {
  try {
  //   const users = await User.findAll(); // fetch users
  //   res.json(users);
    res.status(200).json({ user: "getting biodata" });
  } catch (err) {
    console.error('❌ Error fetching users:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/education', async (req, res) => {
  try {
  //   const users = await User.findAll(); // fetch users
  //   res.json(users);
    res.status(200).json({ user: "getting education" });
  } catch (err) {
    console.error('❌ Error fetching users:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/experience', async (req, res) => {
  try {
  //   const users = await User.findAll(); // fetch users
  //   res.json(users);
    res.status(200).json({ user: "getting experience" });
  } catch (err) {
    console.error('❌ Error fetching users:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/skill', async (req, res) => {
  try {
  //   const users = await User.findAll(); // fetch users
  //   res.json(users);
    res.status(200).json({ user: "getting skill" });
  } catch (err) {
    console.error('❌ Error fetching users:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('✅ DB connection successful');
    
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running at http://localhost:${PORT}`);
//     });
//   } catch (err) {
//     console.error('❌ DB connection failed:', err);
//   }
// })();