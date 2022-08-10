const express = require('express')
const mysql = require('mysql');
const path = require('path')
const session = require('express-session');
const app = express()

// Соединение с базой данных
const connection = mysql.createConnection({
  host: "127.0.0.1",
  database: "pin",
  user: "root",
  password: "secret"
});

connection.connect(function (err) { if (err) throw err; });

// Путь к директории файлов ресурсов (css, js, images)
app.use(express.static('public'))

// Настройка шаблонизатора
app.set('view engine', 'ejs')

// Путь к директории файлов отображения контента
app.set('views', path.join(__dirname, 'views'))

// Обработка POST-запросов из форм
app.use(express.urlencoded({ extended: true }))

// Инициализация сессии
app.use(session({ secret: "Secret", resave: false, saveUninitialized: true }));

// Middleware
function isAuth(req, res, next) {
  if (req.session.auth) {
    next();
  } else {
    res.redirect('/');
  }
}

// Запуск веб-сервера по адресу http://localhost:3000
app.listen(3000)

/**
 * Маршруты
 */
app.get('/', (req, res) => {
  connection.query("SELECT * FROM items", (err, data, fields) => {
    if (err) throw err;

    connection.query("SELECT * FROM cart", (err, dataCart, fields) => {
      res.render('home', {
        items: data,
        titles: dataCart,
        auth: req.session.auth
      });
    });
  });
})

app.get('/items/:id', (req, res) => {
  connection.query("SELECT * FROM items WHERE id=?", [req.params.id],
    (err, data, fields) => {
      if (err) throw err;
      connection.query("SELECT * FROM cart", (err, dataCart, fields) => {
        res.render('item', {
          item: data[0],
          titles: dataCart,
          auth: req.session.auth
        })
      });
    });
})


app.get('/catalog', (req, res) => {
  connection.query("SELECT * FROM cart", (err, data, fields) => {
    if (err) throw err;
    connection.query("SELECT * FROM cart", (err, dataCart, fields) => {
      res.render('catalog', {
        cart: data,
        titles: dataCart,
        auth: req.session.auth
      });
    });
  });
})

app.get('/auth', (req, res) => {
  connection.query("SELECT * FROM cart", (err, dataCart, fields) => {
    res.render('auth', {
      titles: dataCart,
      auth: req.session.auth
    });
  });
})

app.get('/add', (req, res) => {
  connection.query("SELECT * FROM cart", (err, dataCart, fields) => {
    res.render('add', {
      titles: dataCart,
      auth: req.session.auth
    });
  });
})


app.get('/val', (req, res) => {
  connection.query("SELECT * FROM cart WHERE id=1", (err, data, fields) => {
    if (err) throw err;
    connection.query("SELECT * FROM cart", (err, dataCart, fields) => {
      res.render('val', {
        cart: data,
        titles: dataCart,
        auth: req.session.auth
      });
    });
  });
})

app.get('/more', (req, res) => {
  connection.query("SELECT * FROM cart WHERE id=2", (err, data, fields) => {
    if (err) throw err;
    connection.query("SELECT * FROM cart", (err, dataCart, fields) => {
      res.render('more', {
        cart: data,
        titles: dataCart,
        auth: req.session.auth
      });
    });
  });
})

app.get('/bosfor', (req, res) => {
  connection.query("SELECT * FROM cart WHERE id=3", (err, data, fields) => {
    if (err) throw err;
    connection.query("SELECT * FROM cart", (err, dataCart, fields) => {
      res.render('bosfor', {
        cart: data,
        titles: dataCart,
        auth: req.session.auth
      });
    });
  });
})

app.get('/gnev', (req, res) => {
  connection.query("SELECT * FROM cart WHERE id=4", (err, data, fields) => {
    if (err) throw err;
    connection.query("SELECT * FROM cart", (err, dataCart, fields) => {
      res.render('gnev', {
        cart: data,
        titles: dataCart,
        auth: req.session.auth
      });
    });
  });
})

app.get('/brig', (req, res) => {
  connection.query("SELECT * FROM cart WHERE id=5", (err, data, fields) => {
    if (err) throw err;
    connection.query("SELECT * FROM cart", (err, dataCart, fields) => {
      res.render('brig', {
        cart: data,
        titles: dataCart,
        auth: req.session.auth
      });
    });
  });
})

app.get('/egipet', (req, res) => {
  connection.query("SELECT * FROM cart WHERE id=6", (err, data, fields) => {
    if (err) throw err;
    connection.query("SELECT * FROM cart", (err, dataCart, fields) => {
      res.render('egipet', {
        cart: data,
        titles: dataCart,
        auth: req.session.auth
      });
    });
  });
})

app.get('/feodosia', (req, res) => {
  connection.query("SELECT * FROM cart WHERE id=7", (err, data, fields) => {
    if (err) throw err;
    connection.query("SELECT * FROM cart", (err, dataCart, fields) => {
      res.render('feodosia', {
        cart: data,
        titles: dataCart,
        auth: req.session.auth
      });
    });
  });
})


app.get('/boi', (req, res) => {
  connection.query("SELECT * FROM cart WHERE id=8", (err, data, fields) => {
    if (err) throw err;
    connection.query("SELECT * FROM cart", (err, dataCart, fields) => {
      res.render('boi', {
        cart: data,
        titles: dataCart,
        auth: req.session.auth
      });
    });
  });
})

app.get('/pushkin', (req, res) => {
  connection.query("SELECT * FROM cart WHERE id=9", (err, data, fields) => {
    if (err) throw err;
    connection.query("SELECT * FROM cart", (err, dataCart, fields) => {
      res.render('pushkin', {
        cart: data,
        titles: dataCart,
        auth: req.session.auth
      });
    });
  });
})


app.get('/korabl', (req, res) => {
  connection.query("SELECT * FROM cart WHERE id=10", (err, data, fields) => {
    if (err) throw err;
    connection.query("SELECT * FROM cart", (err, dataCart, fields) => {
      res.render('korabl', {
        cart: data,
        titles: dataCart,
        auth: req.session.auth
      });
    });
  });
})

app.get('/tiflis', (req, res) => {
  connection.query("SELECT * FROM cart WHERE id=11", (err, data, fields) => {
    if (err) throw err;
    connection.query("SELECT * FROM cart", (err, dataCart, fields) => {
      res.render('tiflis', {
        cart: data,
        titles: dataCart,
        auth: req.session.auth
      });
    });
  });
})

app.get('/crush', (req, res) => {
  connection.query("SELECT * FROM cart WHERE id=12", (err, data, fields) => {
    if (err) throw err;
    connection.query("SELECT * FROM cart", (err, dataCart, fields) => {
      res.render('crush', {
        cart: data,
        titles: dataCart,
        auth: req.session.auth
      });
    });
  });
})

app.get('/lock', isAuth, (req, res) => {
  connection.query("SELECT * FROM cart", (err, dataCart, fields) => {
    res.render('lock', {
      titles: dataCart,
      auth: req.session.auth
    });
  });
})


app.post('/store', (req, res) => {
  connection.query(
    "INSERT INTO cart (title, image, description) VALUES (?, ?, ?)",
    [[req.body.title], [req.body.image], [req.body.description]], (err, data, fields) => {
      if (err) throw err;

      res.redirect('/')
    });
})

app.post('/register', (req, res) => {
  connection.query(
    "INSERT INTO users (name, password) VALUES (?, ?)",
    [[req.body.name], [req.body.password]], (err, data, fields) => {
      if (err) throw err;

      req.session.auth = true;

      res.redirect('/')
    });
});

 app.post('/login', (req, res) => {
  connection.query(
    "SELECT * FROM users WHERE name=? and password=?",
    [[req.body.name], [req.body.password]], (err, data, fields) => {
      if (err) throw err;
        if(data[0].name == req.body.name && data[0].password == req.body.password)
        {
          console.log("Успешный вход в систему");
          req.session.auth = true;
          res.redirect('/')
        }
        else
        {
          res.redirect('/')
        }  })
      });
      app.get('/logout', (req, res) => {
        req.session.auth = false;
        res.redirect('/')
      });
      
    
app.post('/home-delete', (req, res) => {
  connection.query(
    "DELETE FROM items WHERE id=?;",
    [[req.body.id]], (err, data, fields) => {
      if (err) throw err;
      auth: req.session.auth
      res.redirect('/')
    });
})
app.post('/homs-delete', (req, res) => {
  connection.query(
    "DELETE FROM cart WHERE id=?;",
    [[req.body.id]], (err, data, fields) => {
      if (err) throw err;
      auth: req.session.auth
      res.redirect('/')
    });
})

app.post('/update', (req, res) => {
  connection.query(
    "UPDATE items SET title=?, description=?, image=?  WHERE id=?;",
    [[req.body.title], [req.body.description], [req.body.image], [req.body.id]], (err, data, fields) => {
      if (err) throw err;

      res.redirect('/')
    });
})
