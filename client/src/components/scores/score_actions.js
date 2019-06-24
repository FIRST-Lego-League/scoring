export default {
  template: `
<div class="button-group">
  <div class="secondary button move" ng-if="!scoreActions.hide || !scoreActions.hide.move" ng-click="scoreActions.toggleMoveMode()" ng-disabled="loading">
    <i class="fa" ng-class="scoreActions.scoreMove.id === scoreActions.data._id ? 'fa-times' : 'fa-share-square'"></i>
    <span class="hover-text">Move</span>
  </div>
  <div class="secondary button open" ng-if="!scoreActions.hide || !scoreActions.hide.open" ng-click="scoreActions.open()" ng-disabled="loading">
    <i class="fa fa-edit"></i>
    <span class="hover-text">Open</span>
  </div>
  <div class="button public" ng-if="!scoreActions.hide || !scoreActions.hide.publish" ng-click="scoreActions.togglePublish()" ng-class="{ 'secondary': scoreActions.data.public }" ng-disabled="loading">
    <i class="fa" ng-class="scoreActions.data.public ? 'fa-minus-circle' : 'fa-plus-circle'"></i>
    <span class="hover-text">{{(scoreActions.data.public ? 'Unpublish' : 'Publish')}}</span>
  </div>
  <div class="button no-show" ng-if="!scoreActions.hide || !scoreActions.hide.noShow" ng-click="scoreActions.toggleNoShow()" ng-class="{ 'secondary': !scoreActions.data.noShow }" ng-disabled="loading">
    <i class="fa fa-ban"></i>
    <span class="hover-text">{{(scoreActions.data.noShow ? 'Show' : 'No Show')}}</span>
  </div>
  <div class="alert button delete-scre" ng-if="!scoreActions.hide || !scoreActions.hide.delete" ng-click="scoreActions.openDeletionDialog()" ng-disabled="loading">
    <i class="fa fa-trash-alt"></i>
    <span class="hover-text">Delete</span>
  </div>
</div>

<div id="deletion-modal-{{::scoreActions.data._id}}" class="deletion-modal fast reveal" data-reveal data-animation-in="hinge-in-from-middle-y" data-animation-out="hinge-out-from-middle-y">
  <h4>Do you really want to delete this score?</h4>
  <div class="subheader">Warning: You can’t undo this action.</div>
  <div class="grid-x align-center button-group">
    <div class="button" ng-click="scoreActions.closeDeletionDialog()">No, I think I'll pass...</div>
    <div class="alert button" ng-click="scoreActions.delete()">Yes, just do it!</div>
  </div>
  <button class="close-button" data-close aria-label="Close modal" type="button">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`,
  controller: 'ScoreActionsController as scoreActions',
  bindings: {
    data: '=?',
    hide: '<'
  }
}