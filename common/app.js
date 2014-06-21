
Router.map( function () {
  this.route('home',{path: '/'});
  this.route('documents');
  this.route('questions');
  this.route('about');
});

Router.configure({layoutTemplate: 'master'});

UI.registerHelper("activeIfSelected", function (nav) {
	var router=Router.current();
	var routeName = router && router.route.name;
	return routeName === nav ? 'active' : '';
});