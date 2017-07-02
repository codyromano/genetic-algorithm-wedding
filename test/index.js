const assert = require('assert');
const seed = require('../experiment/seed');

assert(Array.isArray(seed()), 'Seed returns array');
