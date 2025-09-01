const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/customers', (req, res) => {
  res.json([{ name: 'Alice' }, { name: 'Bob' }]);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('API running');
});
