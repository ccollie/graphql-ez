import { CreateApp, gql } from '@graphql-ez/nextjs-new';
import { ezUnpkgAltairIDE } from '../../../../src';
function buildContext(_args: import('@graphql-ez/nextjs-new').BuildContextArgs) {
  return {
    foo: 'bar',
  };
}

export const { buildApp } = CreateApp({
  buildContext,
  schema: {
    typeDefs: gql`
      type Query {
        hello: String!
        context: String!
      }
    `,
    resolvers: {
      Query: {
        hello() {
          return 'Hello World!';
        },
        context(_root: unknown, _args: unknown, ctx: unknown) {
          return JSON.stringify(ctx);
        },
      },
    },
  },
  ez: {
    plugins: [ezUnpkgAltairIDE()],
  },
});
