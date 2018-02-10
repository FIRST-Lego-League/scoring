/**
 * This is a service that can calculate the rankings.
 */
define('services/ng-rankings',[
    'services/ng-services',
    'services/ng-stages',
    'services/ng-teams',
    'services/ng-score',
    'services/ng-groups'
],function(module) {
    "use strict";

    return module.service('$rankings',
        ['$stages','$teams','$score','$groups',
        function($stages, $teams, $score, $groups) {

            function Rank(rank, team, stage, filter) {
                this.team = team;
                this.stage = stage;

                this.scores = [];
                for(let i = 0; i < (filter[stage.id] || stage.rounds); i++) {
                    this.scores[i] = rank.filter(score => score.round === (i + 1))[0];
                }

                this.ordered = rank.sort($score.compare);
                this.highest = this.ordered[0];
            }

            Rank.compare = function(rank1, rank2) {
                for(let i = 0; i < rank1.ordered.length && i < rank2.ordered.length; i++) {
                    let comparison = $score.compare(rank1.ordered[i], rank2.ordered[i]);
                    if(comparison !== 0) return comparison;
                }
                /** explained by example:
                 *  team1's scores: [100, 50, 30]
                 *  team2's scores: [100, 50]
                 *
                 *  team1 has the lead since they had more matches.
                 *
                 *  The codes gets here iff the teams' scores are equals,
                 *  in the range we can check (i.e. one team may played more matches).
                */
                return rank2.ordered.length - rank1.ordered.length;
            };

            return {
                calculate: function(scores, filter) {
                    scores = scores.filter(score => score.published);
                    return $teams.init().then(() => $stages.init())
                    .then(function() {
                        let teams = $teams.teams;
                        let stages = $stages.stages;
                        let ranks = $groups.multigroup(scores, [score => score.stageId, score => score.teamNumber]);
                        let stageRanks = {};
                        stages.forEach(function(stage) {
                            let rankNumber = 0;
                            let stageRank = ranks[stage.id] || {};

                            // Mapping to Rank objects
                            stageRanks[stage.id] = teams.map(function(team) {
                                let teamRank = stageRank[team.number] || [];
                                return new Rank(teamRank, team, stage, filter || {});
                            });

                            // Sorting by the highest score
                            stageRanks[stage.id].sort(Rank.compare);

                            // Adding rank number
                            var lastRank = null;
                            let teamsAmount = 0;
                            stageRanks[stage.id].forEach((rank) => {
                                teamsAmount++;
                                if(lastRank === null || Rank.compare(lastRank,rank) !== 0) {
                                    rankNumber = teamsAmount;
                                }
                                rank.rank = rankNumber;
                                lastRank = rank;
                            });

                        });
                        return stageRanks;
                    });
                }
            };

    }]);
});
