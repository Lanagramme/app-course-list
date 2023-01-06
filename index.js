const 
	express = require('express')
	File = require('./modules/file.js')
	Liste = require('./modules/liste.js')
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
	res.send(liste.get_all())
})

app.get('/list', (req, res) => {
	Liste.create("new_list")
	Liste.save()
		.then(w => {
			console.log(w)
			if (w.success)	res.send(Liste.get_all())
			else res.send([w.log, w.message])
		})
})

app.get('/item/add/:liste', (req, res) => {
	list_id = req.params.liste
	write = Liste.add_item(list_id, "test")
	if (write.success) {
		Liste.save()
			.then(w => {
				console.log(w)
				if (w.success)	res.send(Liste.get_all())
				else res.send([w.log, w.message])
			})
	}
	else res.send([write.log, write.message])
})

app.listen(1234, () => {
	console.log('server is running on 1234')
})
