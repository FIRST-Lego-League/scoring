class Scores {
  constructor (independence, score, tournament, messanger, configuration, notifications) {
    Object.assign(this, { independence, score, tournament, messanger, configuration, notifications })
    this.scores = []
  }

  init () {
    if (!this._initPromise) {
      this._initPromise = this.load().catch(err => {
        this._initPromise = undefined
        throw err
      })
    }
    return this._initPromise
  }

  load () {
    return this.independence.send('GET', '/scores/all')
      .then(response => response.data).then(scores => {
        this.scores = scores.map(attrs => this.score(attrs))
        return this.scores
      })
  }

  all () {
    return this.scores
  }

  create (score) {
    this.messanger.ignoreNext('scores:reload')
    return this.configuration.load()
      .then(config => this.independence.send('POST', '/scores/create', this.score(score).sanitize(config)))
      .then(response => { this.scores.push(this.score(response.data)) })
  }

  delete (id) {
    this.messanger.ignoreNext('scores:reload')
    return this.independence.send('DELETE', `/scores/${id}/delete`)
      .then(() => { this.scores = this.scores.filter(score => score._id !== id) })
      .catch(() => this.notifications.error('Unable to delete score: Possible network error.'))
  }

  deleteAll () {
    this.messanger.ignoreNext('scores:reload')
    return this.independence.send('DELETE', `/scores/all`)
      .then(() => { this.scores = [] })
      .catch(() => this.notifications.error('Unable to delete scores: Possible network error.'))
  }

  update (id, attributes) {
    this.messanger.ignoreNext('scores:reload')
    return this.independence.send('POST', `/scores/${id}/update`, attributes)
      .then(() => { Object.assign(this.scores.find(score => score._id === id), attributes) })
      .catch(() => this.notifications.error('Unable to change score: Possible network error.'))
  }
}

Scores.$$ngIsClass = true
Scores.$inject = ['Independence', 'Score', 'Tournament', 'Messanger', 'Configuration', 'Notifications']

export default Scores
