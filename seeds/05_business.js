var find = require('../helper.js');

exports.seed = function(knex, Promise) {
	return knex('industry').select().then(function(industry){
		return Promise.all([
			knex('business').insert({
				name: 'General Duffy\'s Hot Sauce Emporium',
				address1: '123 My Street St.',
				city: 'Denver',
				state: 'CO',
				zip: '80211',
				email: 'mybusiness@generalduffys.com',
				phone: '1234567890',
				industry_id: find.findFromList('Beauty', industry, 'type'),
				date_opened: new Date(),
				date_closed: new Date(),
				good_standing: true,
				description: 'We make really good hot sauce.',
				website: 'http://www.generalduffys.com'
			}),
			knex('business').insert({
				name: 'Bonkers',
				address1: '4534 Platte St.',
				city: 'Denver',
				state: 'CO',
				zip: '80245',
				email: 'peter@bonkers.com',
				phone: '0987654321',
				industry_id: find.findFromList('Construction', industry, 'type'),
				date_opened: new Date(),
				date_closed: new Date(),
				good_standing: false,
				description: 'We go bonkers for things!',
				website: 'http://www.bonkers4b.com'
			}),
			knex('business').insert({
				name: 'CashMoney',
				address1: '4321 Vance St.',
				city: 'Boulder',
				state: 'CO',
				zip: '81132',
				email: 'hello@cashMoney.com',
				phone: '0187434321',
				industry_id: find.findFromList('Insurance', industry, 'type'),
				date_opened: new Date(),
				date_closed: new Date(),
				good_standing: false,
				description: 'We love all dat cash',
				website: 'http://www.cashmoney.com'
			}),
			knex('business').insert({
				name: 'School Clubz',
				address1: '1122 Johnson St.',
				city: 'Lakewood',
				state: 'CO',
				zip: '80119',
				email: 'School@Clubz.com',
				phone: '0854254121',
				industry_id: find.findFromList('Education', industry, 'type'),
				date_opened: new Date(),
				date_closed: new Date(),
				good_standing: true,
				description: 'We love learning all the things!',
				website: 'http://www.schoolzclub.com'
			}),
			knex('business').insert({
				name: 'Sick Clothes For Animals',
				address1: '1234 Dog St.',
				city: 'Centennial',
				state: 'CO',
				zip: '89921',
				email: 'shirtsandsocks@cats.com',
				phone: '0123458124',
				industry_id: find.findFromList('Other', industry, 'type'),
				date_opened: new Date(),
				date_closed: new Date(),
				good_standing: true,
				description: 'We go bonkers for things!',
				website: 'http://www.sickclothesforanimals.com'
			}),
			knex('business').insert({
				name: 'Wonder Tech',
				address1: '1000 Wynkoop St.',
				city: 'Denver',
				state: 'CO',
				zip: '80755',
				email: 'Wonder@Tech.com',
				phone: '0127254321',
				industry_id: find.findFromList('Technology', industry, 'type'),
				date_opened: new Date(),
				date_closed: new Date(),
				good_standing: false,
				description: 'We are the future.',
				website: 'http://www.wondertech.com'
			}),
			knex('business').insert({
				name: 'Amazing Marketing Magic',
				address1: '5555 Wadsworth Lane.',
				city: 'Arvada',
				state: 'CO',
				zip: '73210',
				email: 'Marketing@Magic.com',
				phone: '0485124321',
				industry_id: find.findFromList('Marketing', industry, 'type'),
				date_opened: new Date(),
				date_closed: new Date(),
				good_standing: true,
				description: 'Get your business on the map!',
				website: 'http://www.marketingmagic.com'
			}),
			knex('business').insert({
				name: 'GardensAndMore',
				address1: '432 Garden St.',
				city: 'Aurora',
				state: 'CO',
				zip: '80001',
				email: 'gardens@andmore.com',
				phone: '0329524321',
				industry_id: find.findFromList('Landscaping', industry, 'type'),
				date_opened: new Date(),
				date_closed: new Date(),
				good_standing: true,
				description: 'Your garden will look fantastic once we\'re done',
				website: 'http://www.gardensandmore.com'
			})
		]);
	})
};
