# Perfect Circle

Draw a circle around the dot in one stroke. The closer you hold the same
distance from it all the way round, the higher you score.

A single self-contained `index.html`, no build step, served from GitHub Pages.

## How it is scored

Every point of the stroke is filed by its angle from the dot, so a slow patch
counts for no more than a fast one and any gap shows up on its own. The score
is what is left once you take out how much the radius wandered:

    score = 100 * (1 - stdev(radius) / mean(radius)) ^ 8

A careful human lands around 1.5% off, which the curve turns into the high
eighties. The nineties are genuinely hard.

A stroke is thrown out if it does not go all the way round, breaks part way,
crosses the dot, or is too small to judge.
