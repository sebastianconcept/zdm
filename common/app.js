
Router.map( function () {
  this.route('home',{path: '/'});
  this.route('documents');
  this.route('questions');
  this.route('about');
});

Router.configure({layoutTemplate: 'master'});
