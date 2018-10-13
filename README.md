**Simple Gridworld solver for the VU course: Multi-Agent Systems**

General usage: run the JS files with node. It runs 100 iterations and logs the grid to the console each round.

**Problem statement:**

_Consider the gridworld example 3.6 in Sutton and Barto (2nd Ed. p. 48). Recall that: At each cell, four actions are possible: north, south, east, and west, which deterministically cause the agent to move one cell in the respective direction on the grid. Actions that would take the agent off the grid leave its location unchanged, but also result in a reward of −1. Other actions result in a reward of 0, except those that move the agent out of the special states A and B. From state A, all four actions yield a reward of +10 and take the agent to A’. From state B, all actions yield a reward of +5 and take the agent to B’._


- Write a programme to check the shown vπ values (right grid in figure above), where π is the equi-probable policy and γ = 0.9);

`node equalProbability.js`

- Apply greedification to π to obtain a better policy. What are the corresponding v-values?

`node optimalPolicy.js`

- Change the setup in such a way that the MDP becomes episodic. More precisely, we assume that both A and B are terminal, absorbing states. Transition to A (B) yields an immediate reward of 10 (5) and finishes the game. We no longer need discounting, so we assume γ = 1. Re-assess the previous two bullets.

`node episodicEqualProbability.js`

`node episodicOptimalPolicy.js`


