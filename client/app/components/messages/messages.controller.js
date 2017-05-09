class MessagesController {
  constructor($localStorage, $location, MessagesService, $scope) {
    "ngInject";
    this.name = 'messages'
    this.localStorage = $localStorage
    this.location = $location
    this.scope = $scope
    this.MessagesService = MessagesService
    this.data = null
    this.activate()
  }

  activate() {
    if (this.localStorage.currentMessageId === undefined || this.localStorage.currentUser.acl !== 1) {
      this.location.path('home')
      return
    }
    this.MessagesService.getMessages(this.localStorage.currentMessageId).then(data => {
      this.data = data
      this.scope.$apply()
    }).catch(console.error)
  }
}

export default MessagesController
