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
  //   const biodatas = await Biodata.findAll(); // fetch biodatas
  //   res.json(biodatas);
    res.status(200).json({ output: "getting biodata" });
  } catch (err) {
    console.error('❌ Error fetching biodatas:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/education', async (req, res) => {
  try {
  //   const educations = await Education.findAll(); // fetch educations
  //   res.json(educations);
    res.status(200).json({ output: "getting education" });
  } catch (err) {
    console.error('❌ Error fetching educations:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/experience', async (req, res) => {
  try {
  //   const experiences = await Experience.findAll(); // fetch experiences
  //   res.json(experiences);
    res.status(200).json({ output: "getting experience" });
  } catch (err) {
    console.error('❌ Error fetching experiences:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/skill', async (req, res) => {
  try {
  //   const skills = await Skill.findAll(); // fetch skills
  //   res.json(skills);
    res.status(200).json({ output: "getting skill" });
  } catch (err) {
    console.error('❌ Error fetching skills:', err);
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