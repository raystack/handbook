# Documentation

## Markdown Linting

Every docs page should be linted and should adhere to linting standards.

It is a good idea to install the markdownlint VS Code extension, or similar, so you have realtime lint guidance while editing.

Whenever possible, GitLab and GitHub projects should have automated lint checks, including markdown lint checks and broken link checks.

## Docs and the “Definition of Done”

Documentation is critical and should be included in every increment. Docs should never be skipped or moved as a follow-on issue after the merge.

A test of minimally complete documentation is as follows:

Feature discoverability. Can a user reading through our docs understand what the feature is and whether they should use it?
Implementation instructions. Can a user implement this feature successfully using only the available docs? (Excluding complementary resources such as blogs, Slack notifications, and demos.)
If either of these conditions is not met, the MR should not be merged as it does not meet the minimal definition of done as related to documentation.

Note that within these qualifications, there’s still tons of room for variability in the overall “first iteration” time investment.

For more information on writing quality documentation, check out [Divio’s documentation system](https://documentation.divio.com/).

## Is it okay to add docs as follow-on?

Q: We make decisions to postpone certain components all the time - why not allow docs to be created after the feature launches?

A: The invisible high cost of missing docs
There are several invisible costs that appear immediately after docs are delayed: additional support costs and training costs, along with additional overhead related to administrating and prioritizing the follow-on issue. All of these together can quickly add up to more than the cost of the docs authoring itself.

Apart from the above-mentioned costs, there’s an additional risk that a user will discover the feature and then fail to implement it. Contrary to our goal of providing “early access” to a valuable feature, we risk damaging a user’s confidence in our product because of a bad onboarding experience.

# Exceptions to documentation requirements

The only valid exceptions to this requirement are: (1) if another maintainer is separately assigned the docs authoring, or (2) if we are accepting a contribution contribution and taking the docs authoring role upon ourselves.

Even in these cases, however, docs still need to be completed before the feature is released.
