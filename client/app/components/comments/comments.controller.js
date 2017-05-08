class CommentsController {
  constructor($scope, CommentsService) {
    "ngInject";
    this.name = 'comments'
    this.scope = $scope;
    this.CommentsService = CommentsService
    this.categories = []
    this.models = {}
    this.activate(CommentsService)
  }

  getName (id) {
    return `comment${id}`
  }

  comment (valid) {
    if (!valid) return
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
