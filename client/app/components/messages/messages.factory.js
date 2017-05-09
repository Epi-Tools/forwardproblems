/**
 * Created by carlen on 5/9/17.
 */
const MessagesFactory = $http => {
  "ngInject";
  const messages = {}

  const getMessages = id => new Promise((s, f) => {
    $http.get(`http://127.0.0.1:8000/api/pools/messages/${id}`).then(data => {
      messages.content = data.data
      s(messages.content)
    }).catch(f)
  })

  return { getMessages }
}

export default MessagesFactory
