var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var genres = [
      { name: 'Animazione', image:'https://image.tmdb.org/t/p/w500/bCmbR6kySl7YKk2st6RF4ztXOkU.jpg' },
      { name: 'Azione', image:'https://image.tmdb.org/t/p/w500/mMZRKb3NVo5ZeSPEIaNW9buLWQ0.jpg' },
      { name: 'Commedia', image:'https://image.tmdb.org/t/p/w500/ppj6q85wq7Od6t9Hd0iXhQpTzKl.jpg' },
      { name: 'Drammatico', image:'https://image.tmdb.org/t/p/w500/8HdAEgq5JnKy4Fv65E1BXpchxRP.jpg' },
      { name: 'Fantascienza', image:'https://image.tmdb.org/t/p/w500/cILxpoay7vKrQ9LBleWyZ92PY3o.jpg' },
      { name: 'Horror', image:'https://image.tmdb.org/t/p/w500/9jTL24i6meo6u5hHEPwUY8TD1N4.jpg' },
      { name: 'Indipendente', image:'https://image.tmdb.org/t/p/w500/sXofeJ1zyw782ENkDKmvb8ZrMIq.jpg' },
      { name: 'Romantico', image:'https://image.tmdb.org/t/p/w500/cFfFZ8H7V0RXabzcjoj6k816zAS.jpg' },
      { name: 'Thriller', image:'https://image.tmdb.org/t/p/w500/jXiqnbemyazDLUhOnLWi1RjwxL7.jpg' }
  ];

  res.render('pages/index', {
    genres: genres,
  });
});

router.get('/guida',function(req,res,next){

  res.render('pages/guida',{

  });
});

module.exports = router;
