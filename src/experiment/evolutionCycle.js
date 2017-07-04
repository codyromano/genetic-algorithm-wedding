/**
* @desc Logic for calling the 'evolve' function while the experiment
* is running. It is bound to a GeneticExperiment instance. You probably
* don't need to edit this; it should work for all experiments.
*
* @private
* @this GeneticExperiment
*/
export default function evolutionCycle(evolve) {
  const { currentGeneration, maxGenerations, evolving } = this;

  // Stop the experiment when .pause is called or the generations reaches max
  const isPaused = evolving === false;
  const shouldEvolve = currentGeneration < maxGenerations;

  const callNextCycle = () => {
    window.requestIdleCallback(() => evolutionCycle.call(this, evolve));
  };

  if (shouldEvolve && !isPaused) {

    // The evolve operator may take a while to execute, so we provide it with
    // a next() function it can use to tell us when it's done
    evolve.call(this, callNextCycle);

  } else {
    // Mark the experiment as paused (a.k.a. stopped) if we've
    // reached the generation limit
    this.evolving = false;
  }
}