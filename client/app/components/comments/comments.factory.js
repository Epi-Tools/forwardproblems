let CommentsFactory = $http => {
  "ngInject";
  const comments = {}

  const getComments = () => {
    return comments
  }

  return { getComments }
}

export default CommentsFactory
