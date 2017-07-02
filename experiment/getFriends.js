module.exports = function() {
  // TODO: Move functions outside closure
  // This is to resolve a transient bug
  const randomName = require('node-random-name');

  const getFriend = () => {
    return {
      name: randomName(),
      attrs: {
        politics: Math.random(),
        religion: Math.random(),
        origin: Math.random()
      }
    };
  };

  function getFriends(limit = 50) {
    let friends = [];
    while (limit--) {
      friends.push(
        getFriend()
      );
    }
    return friends;
  }

  return getFriends(50);
};
