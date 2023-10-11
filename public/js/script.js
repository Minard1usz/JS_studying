'use strict';

var user = {
    name: 'John Smith',
    getName: function() {
      var self = this;
      console.log(this.name);
      console.log(self.name);
      (function(){
        console.log(this.name);
        console.log(self.name);
      }());
    }
  };
  user.getName();