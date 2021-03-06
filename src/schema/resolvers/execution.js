const { Execution, Suite, Exception } = require('../../database/models');

module.exports = {
  Execution: {
    suites: async ({ _id }) => {
      const res = await Suite.find({ execution: _id });
      return res;
    },

    exceptions: async ({ _id }) => {
      const res = await Exception.find({ execution: _id });
      return res;
    },
  },

  Query: {
    executions: async () => {
      const res = await Execution.find();
      return res;
    },
  },

  Mutation: {
    createExecution: async (root, args) => {
      const res = await Execution.create(args.input);
      return res;
    },

    updateExecution: async (root, args) => {
      await Execution.update({ _id: args.id }, args.input);
      const res = await Execution.findOne({ _id: args.id });
      return res;
    },
  },
};
