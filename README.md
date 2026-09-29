# Perfect Circle

Draw a circle around the dot in one stroke. The closer you hold the same
distance from it all the way round, the higher you score.

A single self-contained `index.html`, no build step, served from GitHub Pages.

## The run

One circle is a party trick, so the game is a run of them. Each round has a
pass mark, and it climbs:

    need = 88 - 48 * 0.88 ^ (round - 1)

Round 1 asks for 40%, round 8 for 68%, round 20 for 84%. Miss it and the run
is over; your score is the total of the rounds you got through.

Every few rounds something new gets in the way, and from then on each round
draws a random hand from what has been unlocked - one at a time at first,
all four by round 15.

| From | Twist | What it does |
| --- | --- | --- |
| 3 | Clock | A time limit on the lap, from 3.4s down to 1.9s |
| 5 | Fading ink | Your line disappears behind you, so you cannot close the loop by eye |
| 7 | Drifting dot | The dot wanders while you draw, and you are judged against where it was at the time |
| 9 | Swarm | Decoy dots drift about. Nothing to hit - they just make a line hard to judge |

## How a circle is scored

Every point of the stroke is filed by its angle from the dot, so a slow patch
counts for no more than a fast one and any gap shows up on its own. The whole
arc between two samples is filed, not just its ends - without that a small
circle reads as full of holes, because the pen moves less than one bin between
readings. Each point also remembers where the dot was at the time, so a
drifting one is judged fairly.

What is left is how much the radius wandered:

    score = 100 * (1 - stdev(radius) / mean(radius)) ^ 8

A careful human lands around 1.5% off, which the curve turns into the high
eighties. The nineties are genuinely hard.

A stroke is turned down, with no penalty beyond the time it cost, if it stops
short of a lap, breaks part way, crosses the dot, or is too small to judge.

## The verdict

The mark you got looks back at you: a cracked egg when you drew an egg, an
unimpressed oval, a pleased near-circle, and a circle in sunglasses when you
have earned it. Each band has its own pool of lines, and the bad ones have the
most, because they are the funny ones.
