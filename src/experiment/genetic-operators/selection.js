import survival from 'genetic-operators/survival';

export default function(genotypes) {
  return genotypes.sort(survival).slice(0, 2);
}