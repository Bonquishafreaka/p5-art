# Flow Field — Generative Art

An interactive generative art piece built with [p5.js](https://p5js.org).
900 particles drift through a Perlin-noise flow field, tracing colored
trails that build up into flowing, organic patterns. Every reload
produces a different result.

![Screenshot](screenshot.png)

## Live demo


## How it works

Each particle repeatedly samples a Perlin-noise field at its current
position to get a direction, steps that way, and draws a small dot.
Because the background is only painted once, the dots accumulate over
time instead of clearing — so the canvas fills in and grows richer the
longer it runs. The `noise()` scale and step size control the overall
character of the pattern.

## Run it locally

1. Clone or download this repo.
2. Open `index.html` in a browser.

That's it — no build step, no dependencies to install. `p5.min.js` is
included in the repo.

## Built with

- [p5.js](https://p5js.org) — creative-coding library
