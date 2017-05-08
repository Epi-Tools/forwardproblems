let CommentsFactory = $http => {
  "ngInject";
  const comments = null

  const getComments = () => new Promise((s, f) => {
    if (comments !== null) s(comments)
    $http.get('/api/pools').then(s).catch(f)
  })


  return { getComments }
}

export default CommentsFactory
