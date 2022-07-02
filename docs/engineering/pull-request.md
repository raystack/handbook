# Pull request

This document outlines the guidelines that should be followed for pull requests to suggest changes to a project, receive suggested changes to projects, and address issues in pull requests, such as merge conflicts.

## Linked issue

All PRs should have their corresponding issue marked. Plesae check issue raising process for guidelines on creating issue.

## Trivial updates

All non-trivial pull requests should be reviewed and merged by someone other than the author. A pull request that touches code is never trivial, but one that fixes a typo in the documentation probably is.

Trivial updates, such as docs updates, do not require a logged issue.

## PR review process

Everyone is encouraged to review community contributions. However, each PR should have a single accountable reviewer, who is also approved as a CODEOWNER. That reviewer can ask others in the team for feedback but they are solely accountable for the merge/approval decision.

If you are assigned as primary reviewer and do not feel confident in your ability to approve and merge, it is your responsibility to either (a) request assist from a maintainer on specific parts of the code, or (b) ask another maintainer to take the role of primary reviewer.

## Approval stickiness

PR approvals are “sticky” and are not removed when new commits are added after approval on source branch. So approvals can be requested any time during the review cycle. This also means it is the merger’s responsibility to check commit history and raise an alarm on any regressions or other concerns introduced after another maintainer granted their approval.

Security Note: In most cases, the closing “post-approval” tasks should be cosmetic - such as docs, linting, and changelog updates - but maintainers should nevertheless be on the lookout for any regressions or malicious-looking code that may have been added after approvals are given and before the merge is applied. (If in doubt, please request a repeat-review from other approvers on the PR.)

## Maintainer authored PRs

Maintainer authored PRs may be reviewed by anyone, but should also be approved by a code owner, as described below.

## Community contributed PRs

For community contributions, the community contributor should indicate readiness to merge and the core maiantainer (primary reviewer) will approve the PR and also perform the merge.

All Community-Contributed PRs should have their corresponding issue marked. This helps in prioritization of code contributions. We aim to be responsive in all community contributed PRs, as a sign of respect for the community members’ contributed time and effort.

The first maintainer to review should assign themselves to the review and check the following are present:

- Soundness of code changes (the “meat” of the review)
- Description of manual testing performed (where applicable)
- Presence of unit testing for new capabilities, where applicable
- Presence of docs and changelog updates, where applicable

Note: If not comfortable being primary approver, due to either time constraints or subject matter expertise, the first reviewer should request review by tagging another maintainer.

## Guiding principles for community contributions

We prioritize code contributions as high-value work, honoring the generous and valuable donation of a contributor’s time and effort. We honor those contributions as representing the authors’ valuable time and energy, and we respond to them in a time-sensitive manner.
Whenever blocked on a response for 48+ hours, we may flag as such using the Awaiting Action::Author label. Sparingly and with due respect, we may ping a contributor on Slack (in DM or in the #contributing channel) to notify them of pending action on their side.
In the case that a contributor becomes non-responsive due to competing priorities, time lag, or other factors, we evaluate internally within the team (and with help from Product) to decide if we can prioritize and deliver any remaining outstanding tasks ourselves.

## Code owners and approvers

For our core repos we use a pattern of Primary/Fallback ownership. Approval is required for both Community-Contributed PRs and maintainer authored PRs from one of these individuals. This can be requested either when the PR foundation is in place or as a “final check”. The final approval from the primary code owner should generally be requested after the PR is otherwise “clean” - and after known action items and questions are called out in the text of the PR. In the scenario where the primary code owner is also an author they must obtain approval from the “fallback” owner.

## Responsibility to merge

Maintainers may merge their own PRs once necessary approval(s) are provided.
When nearing completion, an PR author may also invite the reviewer to “merge if approved”, in order to reduce cycles spent in back-and-forth.

## Continually improving contribution guidelines

As experts catch issues in PRs that the original reviewers did not, we will update this section and the Contributor Guide, and reviewers will learn new things to look out for until they catch (almost) everything the expert would, at which points they will be experts themselve.

Note: This document is heavily inspired from Gitlab PR process.
