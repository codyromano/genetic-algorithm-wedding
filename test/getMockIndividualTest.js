import assert from 'assert';
import getMockIndividual from 'experiment/getMockIndividual';

const person = getMockIndividual();
assert(typeof person.name === 'string', 'Person has name');
assert(typeof person.features === 'object', 'Person has features');