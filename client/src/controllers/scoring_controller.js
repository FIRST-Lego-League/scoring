'use strict'

class ScoringController {

  constructor ($scope, Configuration, Notifications, User) {
  	this.$scope = $scope
  	this.Notifications = Notifications
    this.Configuration = Configuration
    this.isAdmin = User.isAdmin()
  }

  $onInit () {
    this._initConfiguration()
    this._initEventListeners()
  }

  _initConfiguration () {
    let self = this

    this.Configuration.load().then(config => {
      self.logoutUrl = config.logout
    })
  }

  _initEvents () {
    let self = this
    
    this.$scope.$on('open scoresheet', (event, score) => {
      self.$scope.$broadcast('load', score)
      self.toggleScoresList()
    })

    this.$scope.$on('close scoresheet', (event, score) => {
      self.$scope.$broadcast('reload')
      self.toggleScoresList()
    })
  }

  toggleScoresList () {
    this.showScoresScreen = !this.showScoresScreen
  }

}

ScoringController.$inject = ['$scope', 'Configuration', 'Notifications', 'User']

export default ScoringController
