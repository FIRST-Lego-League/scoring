export default {
  template: `
<div ng-repeat="score in tiles.visibleScores track by score._id" class="cell grid-x">
  <score-tile data="score" class="cell grid-y"></score-tile>
</div>`,
  controller: 'ScoresTilesController as tiles',
  bindings: {
    filters: '<',
    sort: '<',
    ready: '<'
  }
}