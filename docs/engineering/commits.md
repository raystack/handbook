# Commits

This article assumes you already understand basic Git workflow. If not, we suggest reading through the [Git Handbook](https://guides.github.com/introduction/git-handbook/).

The commit command is used to save changes to a local repository after staging in Git. However, before you can save changes in Git, you have to tell Git which changes you want to save as you might have made tons of edits. A great way to do that is by adding a commit message to identify your changes.

A well-crafted Git commit message is the best way to communicate context about a change to other developers working on that project, and indeed, to your future self.

The most important part of a commit message is that it should be clear and meaningful. In the long run, writing good commit messages shows how much of a collaborator you are. The benefits of writing good commit messages are not only limited to your team, but indeed expand to yourself and future contributors. The perfect commit message should have certain qualities:

- It should be understandable even by seeing only the header of the message.
- It should be just enough, and not too detailed.
- It should be unambiguous.

## Format

To create a useful revision history, we use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) format for all commits. Ideally, bot commits should also follow conventional format. The [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

```sh
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

feat: allow overriding of the application config
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

**Examples**

```sh
feat: allow provided config object to extend other configs
refactor!: drop support for Node 6
docs: correct spelling of CHANGELOG
feat(lang): add polish language
```

## Atomic commits

Although using a proper format is a good practice, it’s not enough. Discipline is crucial. Our commits should be reasonably small and atomic.

If the commit consists of multiple changes that make the message too long or inefficient, it’s good practice to separate it into several commits. In other words: we don’t want to commit a change that changes too much.

If we commit two changes together, for example, a bug fix and a minor refactoring, it might not cause a very long commit message, but it can cause some other problems.

Let’s say the bug fix created some other bugs. In that case, we need to roll back the production code to the previous. This will result in the loss of the refactoring as well. It’s not efficient, and it’s not atomic.

Also, if someone searches the commit history for the changes made for the refactoring, they have to figure out which files were touched for the refactoring and which for the bugfix. This will cost more time than necessary.

We recommend using atomic commits in development branches, these commits can then be sqaushed to a single improvement level commit when merging the pull request.

## Active voice

Use the imperative, present tense. It is easier to read and scan quickly:

**Right:** `feat: add feature to alert admin for new user registration`

**Wrong:** `feat: Added feature ...` (past tense)

We use an imperative verb because it’s going to complete the sentence “If applied, this commit will …” (e.g. “If applied, this commit will add a feature to alert admin for new user registration”).

Using present tense and not past tense in commit messages has made a big thread of discussions between developers over the question “Why should it be present tense?”.

The reason behind using present tense is that the commit message is answering the question “What will happen after the commit is applied?”. If we think of a commit as an independent patch, it doesn’t matter if it applied in the past. What matters is that this patch is always supposed to make that particular change when it’s applied.

## Summary

Commit message should be in conventional format. Strcitly present tense. Not capitalized. No period in the end.”, and imperative like the type.

## References

- https://github.blog/2022-06-30-write-better-commits-build-better-projects/
