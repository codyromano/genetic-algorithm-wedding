const descriptors = {
  politics: [
    // 0.75 - 1 = Extreme conservative
    [0.75, 'Extremely right-wing'],
    // 0.60 - 0.75
    [0.60, 'Right-wing'],
    // 0.4 - 0.6
    [0.40, 'Moderate'],
    [0.25, 'Left-wing'],
    [0, 'Extremly left-wing']
  ],
  sports: [
    // 0.75 - 1 = Extreme conservative
    [0.75, 'Mega sports fan'],
    // 0.60 - 0.75
    [0.60, 'Loves sports'],
    // 0.4 - 0.6
    [0.40, 'Midly athletic'],
    [0.25, 'Rarely watches sports'],
    [0, 'Hates athletics']
  ],
  humor: [
    // 0.75 - 1 = Extreme conservative
    [0.75, 'Provocative humor'],
    // 0.60 - 0.75
    [0.60, 'Family friendly jokes'],
    // 0.4 - 0.6
    [0.40, 'So-so sense of humor'],
    [0.25, 'Mildy conservative jokes'],
    [0, 'Family friendly humor']
  ]
};

export default function(feature, value) {
  const featureData = descriptors[feature];

  if (!featureData) {
    return '';
  }

  for (const threshold of featureData) {
    const [ pointValue, label ] = threshold;

    if (value >= pointValue) {
      return label;
    }
  }

  return 'Unknown';
}