'use strict'

export default {
	template: `
	<div class="top-bar secondary">
    <div class="top-bar-left">
        <input name="search" type="text" ng-model="scores.search" placeholder="search Scores" />
        <button class="button" ng-hide="scores.duplicateScores().length === 0" ng-click="scores.showDuplicates = !scores.showDuplicates">
            {{ scores.showDuplicates ? 'Show all scores' : 'Show only duplicates' }}
        </button>
        <button class="button" ng-hide="scores.errorScores().length === 0"
        ng-click="scores.showErrors = !scores.showErrors">
        {{ scores.showErrors ? 'Show all scores' : 'Show only bad scores'}}
        </button>
    </div>
</div>
<div class="top-bar-page">
    <div id="scores-list" class="grid-x grid-padding-x small-up-1 medium-up-3 large-up-5">
        <div ng-repeat="score in scores.scores()" class="cell">
            <score id="score-{{score._id}}" data="score" class="card"></score>
        </div>
    </div>
</div>`,
	controller: 'ScoresController as scores'
}