/**
 * Created by carlen on 5/9/17.
 */
const PoolsFactory = $http => {
  "ngInject";
  const pools = {}

  const getPools = () => new Promise((s, f) => {
    if (pools.content !== undefined) {
      s(pools.content)
      return
    }
    $http.get('http://127.0.0.1:8000/api/pools').then(data => {
      pools.content = data.data
      s(pools.content)
    }).catch(f)
  })

  return { getPools }
}

export default PoolsFactory
