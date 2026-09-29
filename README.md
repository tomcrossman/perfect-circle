# Perfect Circle

Draw a circle around the dot in one stroke. The closer you hold the same
distance from it all the way round, the higher you score.

A single self-contained `index.html` and a handful of voice clips, no build
step, served from GitHub Pages. It is drawn on squared paper, because that is
what you draw circles on.

## The run

One circle is a party trick, so the game is a run of them. Each round has a
pass mark, and it climbs:

    need = 88 - 48 * 0.88 ^ (round - 1)

Round 1 asks for 40%, round 8 for 68%, round 20 for 84%. Miss it and the run
is over; your score is the total of the rounds you got through.

A clock runs on every round from the first. Drawing slowly is the one real
cheat in this game - take long enough and anyone can trace a careful circle -
so the time it gives you shrinks instead of the clock coming and going:

    seconds = 1.6 + 3.4 * 0.92 ^ (round - 1)

Five seconds on round 1, three on round 10, two and a third on round 20, and
never quite reaching a floor of 1.6. Running out costs you the attempt and
nothing else; you simply cannot take your time over it.

That leaves the twists to be about what you can see rather than how long you
have. Every few rounds one more is unlocked, and from then on each round draws
a random hand from what is available - one at a time at first, all three by
round 12.

| From | Twist | What it does |
| --- | --- | --- |
| 4 | Fading ink | Your line disappears behind you, so you cannot close the loop by eye |
| 6 | Drifting dot | The dot wanders while you draw, and you are judged against where it was at the time |
| 8 | Swarm | Decoy dots drift about. Nothing to hit - they just make a line hard to judge |

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

The mark you got looks back at you: an egg when you drew an egg, an oval, a
near-circle, and a circle in sunglasses when you have earned it.

The shape is what you drew; the face is whether it got you through, and those
are not the same question - an egg over a low bar is a happy egg. So the shape
comes from the score and the expression comes from the pass mark.

Each band has its own pool of lines, and the bad ones have the most, because
they are the funny ones. A line stays put whether you got through or not.

Closing the lap is answered straight away, before the card has any say in it:
a slap and a flinch of the whole screen for a miss, a sweep and a swell for a
pass, with a burst thrown off the line either way.

While the pen is down you hear an "oooooooh" that runs until you let go.
Getting through a round is met with one of five cheers; missing the mark with
one of eight groans. Each is picked at random from its set, so the same take
does not come back every round.

All three are MP4 containers with a single AAC track. They are named `.mp4`
rather than `.m4a` because that is what they are, and because the preview host
will not serve `.m4a`. iOS will only play an element a gesture has touched, and
the cheers fire on a timer after the pen has gone, so they are woken silently
on the first pen-down while a finger is still on the glass.
