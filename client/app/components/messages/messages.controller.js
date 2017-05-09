class MessagesController {
  constructor($localStorage, $location, MessagesService, $scope) {
    "ngInject";
    this.name = 'messages'
    this.localStorage = $localStorage
    this.location = $location
    this.scope = $scope
    this.MessagesService = MessagesService
    this.data = {}
    this.activate()
  }

  static nbOfCategories (data) {
    const len = data.length
    const keys = []
    for (let i = 0; i < len; ++i) if (keys.indexOf(data[i].categories_id) === -1) keys.push(data[i].categories_id)
    return keys
  }

  activate() {
    if (this.localStorage.currentMessageId === undefined || this.localStorage.currentUser.acl !== 1) {
      this.location.path('home')
      return
    }
    this.MessagesService.getMessages(this.localStorage.currentMessageId).then(data => {
      const categories = MessagesController.nbOfCategories(data)
      categories.forEach(e => this.data[e] = { categories_name: e, data: [] })
      data.forEach(e => this.data[e.categories_id].data.push(e))
      this.MessagesService.getCategories().then(data => {
        data.forEach(e => this.data[e.id].categories_name = e.name)
        this.scope.$apply()
      }).catch(console.error)
    }).catch(console.error)
  }
}

export default MessagesController
