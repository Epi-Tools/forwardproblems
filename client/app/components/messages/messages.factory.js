/**
 * Created by carlen on 5/9/17.
 */
const MessagesFactory = $http => {
  "ngInject";
  const messages = {}

  const getMessages = id => new Promise((s, f) => {
    if (messages.content !== undefined) s(messages.content)
    $http.get(`http://127.0.0.1:8000/api/pools/messages/${id}`).then(data => {
      messages.content = data.data
      s(messages.content)
    }).catch(f)
  })

  const getCategories = () => new Promise((s, f) => {
    if (messages.categories !== undefined) s(messages.categories)
    $http.get(`http://127.0.0.1:8000/api/categories`).then(data => {
      messages.categories = data.data
      s(messages.categories)
    }).catch(f)
  })

  return { getMessages, getCategories }
}

export default MessagesFactory
