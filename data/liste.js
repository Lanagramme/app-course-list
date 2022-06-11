class liste {
	constructor(name){
		this.name = name
		this.items = []
	}

	add_item(name) this.items.push( new elements(name) )
	check_item(id) this.items[id].check()
}

class elements {
	constructor(name){
		this._id = Date.now()
		this.name
		this._acquired = 0
	}

	get status() return this._acquired

	check() this._acquired = 1
	uncheck() this._acquired = 0
	unmark() this._acquired = -1
}

module.export = liste
