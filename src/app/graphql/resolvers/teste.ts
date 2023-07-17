import { TesteService } from '@service/Teste.service';

const resolvers = {
  Query: {
    testeHelloWorld: () => 'Hello world from Apollo Server',

    getTesteById: (parent, { testeId }) => {
      const testeService = new TesteService();
      return testeService.getTesteById(testeId);
    },

    getTesteList: (parent, { filter }) => {
      const testeService = new TesteService();
      return testeService.getTesteList(filter);
    }
  },
  Mutation: {
    createTeste: (parent, { createTesteInput }) => {
      const testeService = new TesteService();
      return testeService.createTeste(createTesteInput);
    },

    updateTeste: (parent, { testeId, updateTesteInput }) => {
      const testeService = new TesteService();
      return testeService.updateTeste(testeId, updateTesteInput);
    },

    removeTeste: (parent, { testeId }) => {
      const testeService = new TesteService();
      return testeService.removeTeste(testeId);
    }
  }
};

export default resolvers;
