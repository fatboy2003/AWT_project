//create a model

var Fruit = Backbone.Model.extend({
	validate: function(options) {
		if(options.quantity && !_.isNumber(options.quantity)){
			return('quantity must be a number');
			}}
		});
		//kkk
		
var apple = new Fruit({
	name: 'apple',
	color: 'red',
	//quantity: 'a lot'
});	

apple.on('error', function(model, error) {console.log(error);});



apple.set('quantity', 'a lot');
//console.log(apple.get('quantity'));

var banana = new Fruit();

banana.set('type', 'banana');
banana.set('color', 'yellow');
banana.set('condition', 'raw');
banana.set('place', 'Brazil');
apple.set('condition', 'moldy')

//console.log(banana.description());

