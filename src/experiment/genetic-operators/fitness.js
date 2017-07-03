import config from 'experiment/config';
import DinnerTable from 'experiment/helpers/DinnerTable';

/**
* @returns {Number} How well the entire wedding party gets along
*/
export default function(genotype) {
  let totalFitness = 0;
  let table = new DinnerTable();

  genotype.forEach((person, index) => {

    if (table.isFull()) {
      // Record the result and move to next table
      totalFitness+= table.getFitness();
      table = new DinnerTable();
    }

    table.addPerson(person);

    const isLastTable = genotype[index + 1] === undefined;
    if (!table.isFull() && isLastTable) {
      totalFitness+= table.getFitness();
    }
  });

  return totalFitness;
};