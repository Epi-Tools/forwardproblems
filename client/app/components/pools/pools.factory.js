/**
 * Created by carlen on 5/9/17.
 */
const PoolsFactory = $http => {
  "ngInject";
  const pools = {}

  const getPools = () => new Promise((s, f) => {
    $http.get('http://127.0.0.1:8000/api/pools').then(data => {
      pools.content = data.data
      s(pools.content)
    }).catch(f)
  })

  const postPools = (name, users_id) => $http.post('http://127.0.0.1:8000/api/pools', { name, users_id })

  return { getPools, postPools }
}

export default PoolsFactory
