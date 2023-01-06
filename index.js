const 
	express = require('express')
	file = require('./modules/file.js')
	liste = require('./modules/liste.js')
	app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render('index.pug', {
		title: "app list"
	})
})

app.get('/about', (req, res) => {
	res.render('about.pug', {
		title: "app list"
	})
})

app.get('/listes', (req, res) => {
	console.log(file)
	res.send(liste.get_all())
})

app.listen(1234, () => {
	console.log('server is running on 1234')
})
