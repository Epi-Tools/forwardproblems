let CommentsFactory = $http => {
  "ngInject";
  const comments = {}

  const getCategories = () => new Promise((s, f) => {
    if (comments.categories !== undefined) s(comments.categories)
    $http.get('http://127.0.0.1:8000/api/categories').then(data => {
      comments.categories = data.data
      s(comments.categories)
    }).catch(f)
  })

  return { getCategories }
}

export default CommentsFactory
