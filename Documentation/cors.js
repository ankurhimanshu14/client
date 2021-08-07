const cors = require('cors');

app.use(cors({origin: 'http://localhost:3000', credentials: true }));

app.use((req, res, next) => {
    const allowedOrigin = 'http://localhost:3000';
    
    if(allowedOrigin === req.headers.origin) {
      res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*')
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type', 'Access-Control-Allow-Origin', 'Origin');
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
      return;
    }
  
    next();
});
  