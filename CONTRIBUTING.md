# Contributing

Thanks for your interest in improving nextix-board. All changes to this repository
start as a **nexTix ticket**: a GitHub issue on this repository labeled `nextix`.
Tickets filed here are picked up by a Claude agent, which opens a pull request for
each one, so a ticket is the way to propose a change rather than a place to attach
one.

## Filing a nexTix ticket

1. Open a [new issue](https://github.com/SailmanSeeulater/nextix-board/issues/new)
   on this repository.
2. Write a short title in the imperative mood, describing the change you want —
   for example "Add a Contributing section to the README" rather than
   "The README has no Contributing section".
3. In the body, describe the change you want and why you want it.
4. Apply the `nextix` label. This is the label that marks the issue as a change
   proposal; without it the issue is just a discussion.
5. Submit the issue and follow it for questions and updates.

## What a good ticket contains

An implementer should be able to start from your ticket without asking follow-up
questions. Aim to cover:

- **Context and motivation** — what the situation is today and why it should
  change. Link to anything relevant, such as related issues or pull requests.
- **Expected outcome** — what should be true once the ticket is done. Concrete,
  checkable statements work better than general goals; a short list of acceptance
  criteria is ideal.
- **Affected files or areas** — the files, directories, or parts of the project you
  expect to change, as far as you know them. A best guess is useful; if you are not
  sure, say so.

Also mention anything that should *not* change, and any constraints the
implementation has to respect.

## Labels

`nextix` is the label that marks a change proposal. Any of the repository's other
labels may additionally apply to describe the kind of change:

- `bug`
- `enhancement`
- `documentation`
- `accessibility`
- `question`
- `good first issue`
- `help wanted`

These are descriptive only — an issue is not a nexTix ticket unless it carries the
`nextix` label.

## Discussion and follow-up work

Discussion of a proposal happens on the ticket itself: questions, scope changes,
and decisions all belong in its comments so the reasoning stays with the proposal.
If the scope grows well beyond the original request, file a separate ticket instead
of expanding this one.

Any work that comes out of a ticket should reference it. Mention the ticket number
in the pull request description (for example, "Resolves #3") so the change and the
proposal that motivated it stay linked.
