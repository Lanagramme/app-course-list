const 
	db = require("../data/data.json")[0]
	console.log(db)

	Liste = {
		get_all() {
			return db.all
		},
		create(name, type) {
			new_liste = {
				id: Date.now(),
				items : [],
				name,
				type: "all",
			}

			db.all.push(new_liste)
			db[type].push(new_liste.id)
		},
		remove(listId){
			const trash = Liste.get_by_id(listId)
			db[trash.type] = db[trash.type].filter(x => x.id != trash.id)
			db.all = db.listes.filter(x => x=! trash)
			db.bin.push(trash)
		},

		add_item(listId, name) { 
			new_item = {
				id: Date.now(),
				status: 0,
				name,
			}

			db[listId].items.push(new_item) 
		},
		remove_item(listId, itemId) { db[listId].items = db[listId].items.filter(x => x.id != itemId) },

		check_item(listId, itemId) { db[listId].items[itemId].status = 1 },
		uncheck_item(listId, itemId) { db[listId].items[itemId].status = 0 },

		ckeck_all_items(listId) { db[listId].items.forEach(x => x.status = 1) },
		unckeck_all_items(listId) { db[listId].items.forEach(x => x.status = 0) },

		get_by_name(name) { return db.all.find(x => x.name == name) },
		get_by_id(id) { return db.all.find(x => x.id == id) }
	}

module.exports = Liste
