const queue = require('./queue.js');

const resolvers = {
  Query: {
    showQueue: queue.showQueue,
    showAll: queue.showAll,
  },

  Mutation: {
    addQueue: queue.addQueue,
    queueUpdate: queue.queueUpdate,
    deleteQueue: queue.deleteQueue,
  },
};

module.exports = { resolvers };
