# Why RPA Bots Fail in Production (and How to Stop It)

Most automation failures aren't tool problems — they're design problems.

After three years building and maintaining bots in a production environment at Sytner Group, I've seen the same patterns come up again and again. Here's what I've learned.

## The happy path problem

When you build a bot, you typically build it against the happy path — the version of the process where everything goes right. The input file is in the correct format, the system responds as expected, the data is clean.

Production doesn't work like that.

In production, the input file has an extra blank row. The system times out on a Tuesday morning. A user has manually changed something in the data that the bot wasn't expecting. These aren't edge cases — they're the normal variation of a real business process.

**The fix:** Design for failure first. Before writing a single line of automation logic, map every failure mode you can think of. What happens if the input is empty? What if the target system is unavailable? What does the bot do when it hits a value it doesn't recognise? Handle these explicitly, not as an afterthought.

## Logging is not optional

The number of bots I've inherited with no meaningful logging is significant.

When something fails silently at 2am and nobody knows until 9am, you need logs. Good logs. Logs that tell you exactly what happened, what state the bot was in, and what data it was processing when things went wrong.

At a minimum, log:
- Start and end of each major task
- Any decision points and the values that drove them
- Every exception, with the full detail
- Any data that was written, updated, or deleted

This doubles as an audit trail, which is often useful beyond just debugging.

## Selectors are the enemy

If you're using UI automation — which sometimes you have to — selectors are where bots go to die.

A selector that works perfectly in development will break when the application updates, when a user has a different screen resolution, or when the window isn't in the position the bot expects. I've seen stable automations collapse because a vendor updated their web portal and changed a button ID.

Where possible, avoid UI automation entirely. Use APIs, direct database connections, or application-specific integration points. If you must use UI automation, write selectors that target stable attributes (IDs, `data-` attributes, form names) rather than fragile ones (position-based selectors, visible text that changes, CSS classes that might be refactored).

## Over-engineering is real

The best automation is often the simplest one that reliably does the job. I've seen bots built with impressive technical sophistication that fail regularly, and I've seen basic sequential automations that have run without issue for two years.

Complexity is a liability. Every conditional, every loop, every external dependency is another thing that can fail. Start with the simplest design that actually solves the problem. Add complexity only when you have a clear reason to.

## The handoff problem

An automation isn't done when it's built — it's done when the people who depend on it understand it, can monitor it, and know what to do when it goes wrong.

Documentation doesn't have to be exhaustive. A one-page summary of what the bot does, what inputs it expects, what it writes, and who to contact if it fails is more valuable than a 50-page technical spec nobody reads.

---

These aren't novel observations. Anyone who's spent time in production automation has learned most of them the hard way. But they're worth writing down, because the same lessons keep needing to be relearned.

If you've built something that keeps proving these wrong, I'd genuinely like to hear it.
