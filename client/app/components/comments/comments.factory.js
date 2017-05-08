const CommentsFactory = $http => {
  "ngInject";
  const comments = {}

  const getCategories = () => new Promise((s, f) => {
    if (comments.categories !== undefined) {
      s(comments.categories)
      return
    }
    $http.get('http://127.0.0.1:8000/api/categories').then(data => {
      comments.categories = data.data
      s(comments.categories)
    }).catch(f)
  })

  const getMaxPoolsId = () => new Promise((s, f) => {
    if (comments.maxId !== undefined) {
      s(comments.maxId)
      return
    }
    $http.get('http://127.0.0.1:8000/api/pools/max').then(data => {
      comments.maxId = data.data[0]['max("id")']
      s(comments.maxId)
    }).catch(f)
  })

  const postMessage = (message, categories_id, pools_id) =>
    $http.post('http://127.0.0.1:8000/api/messages', { message, categories_id, pools_id })

  return { getCategories, postMessage, getMaxPoolsId }
}

export default CommentsFactory
