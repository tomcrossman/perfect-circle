# Perfect Circle

Draw the shape around the dot in one stroke, before the clock runs out. The
closer you hold it to the shape you were asked for, the higher you score.

A single self-contained `index.html`, a service worker and four icons. No build
step, no dependencies, served from GitHub Pages. It is drawn on squared paper,
because that is what you draw circles on.

## Getting in

The game opens on a title page with a Play button, and the button is not
decoration. Safari on iOS will not start an audio context on the first touch a
page receives - it neither grants the request nor refuses it, so the first
stroke of a fresh run came out silent and everything after it worked. A button
you have to press means the first touch is spent before the game begins.

## The run

One circle is a party trick, so the game is a run of them, and every round
deals its own shape. Round one is always a circle, a square or a triangle -
the rest of the pool is a surprise you have not earned yet.

Each round has a pass mark, and it climbs:

    need = 95 - 59 * 0.93 ^ (round - 1)

Round 1 asks for 36%, round 8 for 60%, round 20 for 80%. Miss it and the run is
over. How far you got is the score - the bar rises every round, so the round
you reached is the difficulty you survived.

A clock runs on every round from the first. Drawing slowly is the one real
cheat in this game - take long enough and anyone can trace a careful circle -
so the time it gives you shrinks instead of the clock coming and going:

    seconds = (1.6 + 3.4 * 0.92 ^ (round - 1)) * the shape's pace

Five seconds on round 1, three on round 10, two and a third on round 20, and
never quite reaching a floor of 1.6. The pace is how far there is to travel
round that shape against a circle of the same average radius: a sword is a long
thin cross with half again as much edge to it, so the same clock was not a
harder round, it was a shorter one. Running out costs you the attempt and
nothing else; you simply cannot take your time over it.

That leaves the twists to be about what you can see rather than how long you
have. Every few rounds one more is unlocked, and from then on each round draws
a random hand from what is available - one at a time at first, three at once by
round 12. There were four: a swarm of decoy dots drifting about the page was
the fourth, and it went because it read as something to aim at when it was
nothing of the kind.

| From | Twist | What it does |
| --- | --- | --- |
| 4 | Fading ink | Your line disappears behind you, so you cannot close the loop by eye |
| 5 | Which way round | The round names a direction, and going the other way is not a lap |
| 6 | Drifting dot | The dot wanders while you draw, and you are judged against where it was at the time |
| 7 | Blind | Nothing appears on the paper at all until you let go |

The blind one lands on round 7 because that is the last round that deals a
single twist, so it gets a page to itself rather than arriving on top of
something else.

The drifting dot is the only one of these that changes the score rather than
the view, and it was the only one whose cost grew faster than the bar it had
to clear. A machine-perfect lap round where the dot started - ignoring the
wander entirely - scored 85 on round 6, 60 on round 14 and 52 on round 20,
against bars of 54, 72 and 80: past about round 12 it was not a harder round,
it was an unwinnable one. The wander is held near a constant handicap now, so
the round gets harder because the bar rises, which is the job of the bar.

## The shapes

Nothing about the scoring cares whether a shape is regular, only that its
distance from the middle is a single value at every angle. A regular polygon is
a circle whose radius depends on the angle, and so is a fish.

So the silly ones are authored as outlines - in overlapping parts where it
helps, four ovals stacked for the poo - and baked once into a
table of radius by angle, which the scoring reads exactly as it works out a
polygon. Where a ray crosses an outline more than once the farthest crossing
wins, which is what keeps the table single-valued whatever was drawn. It also
means a crescent is impossible, and always will be.

Circle, triangle, square, pentagon, hexagon and a five-pointed star; fish,
snowman, heart, house, cat, diamond, egg, crown, flower, poo, shield, and a
sword and a lightning bolt that only turn up in later rounds. Each is
calibrated to score within a few points of the others at the same wobble, so
one ladder covers all of them.

## How a lap is scored

Every point of the stroke is filed by its angle from the dot, so a slow patch
counts for no more than a fast one and any gap shows up on its own. The whole
arc between two samples is filed, not just its ends - without that a small
circle reads as full of holes, because the pen moves less than one of the 180
bins between readings. Each point also remembers where the dot was at the time,
so a drifting one is judged fairly.

Which way up you drew it is your business, so the rotation is fitted rather
than demanded: one sector is swept coarsely and then closed in on, with ties
going to the way it was demonstrated. What is left is how much the radius
wandered from the shape that fits best:

    score = 100 * (1 - stdev(radius) / mean(radius)) ^ 3

A finger on glass is nothing like as steady as it feels. A respectable freehand
circle wanders about 15% off its own average, which the curve turns into the
high sixties; a careful one lands in the eighties, and the nineties still have
to be earned.

A stroke is turned down, with no penalty beyond the time it cost, if it stops
short of a lap, breaks part way, comes too close to the dot, or is too small to
judge. The reason sits on the page for a moment and then clears itself, and the
demonstration comes back, because by then you have forgotten what you were
drawing.

## Seventy

A lap at 70% or better snaps onto the shape it was aiming for and holds there,
with a shimmer over the top that climbs two octaves of the chord it lands on.
It is the best thing that happens inside a round, and it is over before the
next one starts.

## The verdict

The card only appears when the run has ended, because that is the only point
at which there is anything to decide. It draws the shape you were trying for -
wobblier the worse you did, upright and clean at the top of the range - and
puts a face in it.

The shape is what you drew; the face is whether it got you through, and those
are not the same question. Each band has two pools of lines, one for
clearing the bar and one for missing it, and they differ by shape: the pass
pools are the ones you see most, since a run is mostly rounds you survived. Down in the bottom bands
the shape's own jokes join the generic ones, so a bad snowman gets told it is a
peanut rather than that it is a blob.

The blind round is the one twist that could be taken for the game having
stopped working, so two things carry it: the hand stays on your fingertip the
whole way round, and the hum still climbs with the lap. Both are the game
plainly reading you, and the lap arrives all at once the moment you let go.

Closing the lap is answered straight away, before anything else has a say in
it: a slap and a flinch of the whole screen for a miss, a sweep and a swell for
a pass, with a burst thrown off the line either way. Getting through shows the
score for a beat and then starts the next round on its own; a tap cuts the beat
short.

## The noise

All of it is synthesised - the hum, the stings, the jingles, the tick of the
clock. There is not a recording in the project.

While the pen is down a note is held, and its pitch is driven by how far round
the lap you have got, so closing the shape is something you hear as well as
see. A recording could never follow you like that, and it means the whole game
is still one HTML file.

A run ends on a tune rather than a noise: it climbs and lands on the chord it
has been heading for, or it loses heart over four notes and slides off the
bottom of its own bass line.

## Releasing

`APP_VERSION` in `index.html` and `CACHE` in `sw.js` have to match, or the
service worker serves the old game forever. `./check-version.sh` says so before
you push, and it is worth running every time.
