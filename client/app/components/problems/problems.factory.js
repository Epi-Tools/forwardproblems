/**
 * Created by carlen on 5/11/17.
 */
const ProblemsFactory = $http => {
  "ngInject"
  const problems = {}

  const postProblems = (problem, severity, username) => $http.post('http://127.0.0.1:8000/api/problems', { problem, severity, username})

  return { postProblems }
}

export default ProblemsFactory
