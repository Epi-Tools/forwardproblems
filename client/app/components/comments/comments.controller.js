class CommentsController {
  constructor(CommentsService) {
    "ngInject";
    console.log(CommentsService.getComments())
    this.name = 'comments';
  }
}

export default CommentsController;
