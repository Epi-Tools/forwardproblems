class CommentsController {
  constructor(CommentsService) {
    "ngInject";
    this.name = 'comments'
    this.activate(CommentsService)
  }

  activate (CommentsService) {
    CommentsService.getComments()
  }
}

export default CommentsController
