if (Meteor.isClient) {
  // commits starts at 0
  Session.setDefault('commits', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('commits');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('commits', Session.get('commits') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
