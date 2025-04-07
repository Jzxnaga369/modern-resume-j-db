const express = require('express');
const { sequelize } = require('./models');

const app = express();
const PORT = 3000;

app.use(express.json())

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});


app.get('/users', async (req, res) => {
  try {
  //   const users = await User.findAll(); // fetch users
  //   res.json(users);
    res.status(200).json({ user: "getting users" });
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