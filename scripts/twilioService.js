angular.module('twilioApp').service(function ($q, $http) {
  var smsUrl = 'https://api.twilio.com/2010-04-01/Accounts/AC14abf13780bc649f0ec6b38efd9cba41/Messages'
  this.sendMessage = function (message) {
    var deferred = $q.defer();
    $http.post(smsUrl).then(function (response) {
      deferred.resolve(response);
    })
    return deferred.promise;
  }

  this.getMessage = function () {
    var deferred = $q.defer();
    $http.get(smsUrl)
  }
})