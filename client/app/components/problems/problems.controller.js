class ProblemsController {
  constructor ($scope, usSpinnerService, $http, ProblemsService, $localStorage, $location) {
    "ngInject"
    this.scope = $scope
    this.http = $http
    this.ProblemsService = ProblemsService
    this.usSpinnerService = usSpinnerService
    this.localStorage = $localStorage
    this.location = $location
    this.spinnerId = 'problemSpinner'
    this.name = 'problems'
    this.errorProblem = null
    this.successProblem = null
    this.activate()
  }

  submitProblem (valid) {
    if (!valid) return
    this.errorProblem = null
    this.successProblem = null
    if (this.scope.severity > 4 || this.scope.severity < 1) {
      this.errorProblem = 'Please enter a proper severity'
      return
    }
    const severity = this.scope.severity
    const problem = this.scope.problem
    const username = this.localStorage.currentUser.username
    if (problem === null || problem === undefined || problem === '') {
      this.errorProblem = 'Please enter a proper problem message'
      return
    }
    this.usSpinnerService.spin(this.spinnerId)
    this.ProblemsService.postProblems(problem, severity, username).then(() => {
      this.successProblem = 'Problem Send!'
      this.usSpinnerService.stop(this.spinnerId)
    }).catch(() => {
      this.errorProblem = 'Send Failure'
      this.usSpinnerService.stop(this.spinnerId)
    })
  }

  activate() {
    if (this.localStorage.currentUser === undefined || this.localStorage.forwardtoken === undefined) {
      this.location.path('home')
      return
    }
  }
}

export default ProblemsController
