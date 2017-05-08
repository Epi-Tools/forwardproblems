class CommentsController {
  constructor($scope, CommentsService, $localStorage, $location) {
    "ngInject";
    this.name = 'comments'
    this.scope = $scope;
    this.CommentsService = CommentsService
    this.location = $location
    this.categories = []
    this.models = {}
    this.successSend = null
    this.errorSend = null
    this.isAdmin = $localStorage.currentUser.acl
    this.activate(CommentsService)
  }

  getName (id) {
    return `comment${id}`
  }

  getCategoriesById (id) {
    return this.categories.filter(e => +e.id === +id)[0]
  }

  goToPoolsAdmin() {
    this.location.path('pools')
  }

  //TODO(carlendev) spinner
  comment (valid) {
    if (!valid) return
    const keys = Object.keys(this.models)
    const len = keys.length
    let send = false
    for (let i = 0; i < len; ++i)  {
      const current = this.models[keys[i]]
      if (current !== null && current !== undefined && current !== '') {
        this.CommentsService.getMaxPoolsId().then(id => {
          this.CommentsService.postMessage(current, this.getCategoriesById(+keys[i]).id, +id).then(data => {
            console.log(data)
            this.errorSend = null
            this.successSend = 'Messages envoyés'
            send = true
          }).catch(() => {
            i = len + 1
            this.errorSend = 'Send Error'
            this.scope.$apply()
          })
        }).catch(() => {
          i = len + 1
          this.errorSend = 'Send Error'
          this.scope.$apply()
        })
      }
    }
  }

  activate (CommentsService) {
    CommentsService.getCategories()
      .then(categories => {
        this.categories = categories
        this.scope.$apply()
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export default CommentsController
