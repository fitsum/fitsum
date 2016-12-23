d = require('./data.json');
p = require('commander');

p.command("bio");
p.description("Show Fitsum's biographical information")
p.usage("Lists Fitsum's biographical information")
p.action(function(){
		console.log("bio:", d.bio);
	});

