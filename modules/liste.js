const liste = {
	create(name, type) {
		liste = {
			id: Date.now(),
			items : [],
			name,
			type,
		}

		db.listes.push(liste)
		db[type].push(liste.id)
	},

	add_item(listId, name) { 
		item = {
			id: Date.now(),
			status: 0,
			name,
		}

		db[listId].items.push(item) 
	},
	remove_item(listId, itemId) { db[listId].items = db[listId].items.filter(x => x.id != itemId) }

	check_item(listId, itemId) { db[listId].items[itemId].status = 1 },
	uncheck_item(listId, itemId) { db[listId].items[itemId].status = 0 },

	ckeck_all_items(listId) { db[listId].items.forEach(x => x.status = 1) },
	unckeck_all_items(listId) { db[listId].items.forEach(x => x.status = 0) },

	get_by_name(name) { return db.listes.find(x => x.name == name) },
	get_by_id(id) { return db.listes.find(x => x.id == id) }
}

module.export = liste
