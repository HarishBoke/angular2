module.exports = function() {
 	var faker = require("faker");
	var _ = require("lodash");
	return {
		users: _.times(50, function (n) {
			return {
				id : n,
				name : faker.name.findName(),
				about : faker.lorem.paragraph(),
				avatar : faker.internet.avatar(),
				friends : faker.name.findName(),
				followers : faker.name.findName(),
				photos : faker.name.findName(),
				videos : faker.name.findName()
			}
		}),
		posts: _.times(50, function (n){
			return{
				id: n,
				name: faker.lorem.sentence(),
				description:  faker.lorem.paragraph()
			}
		})

	}
}