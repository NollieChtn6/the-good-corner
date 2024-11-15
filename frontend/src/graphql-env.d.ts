/* eslint-disable */
/* prettier-ignore */

export type introspection_types = {
  AdEntity: {
    kind: "OBJECT";
    name: "AdEntity";
    fields: {
      category: {
        name: "category";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "CategoryEntity"; ofType: null };
        };
      };
      createdAt: {
        name: "createdAt";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "DateTimeISO"; ofType: null };
        };
      };
      description: {
        name: "description";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
        };
      };
      location: {
        name: "location";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      owner: {
        name: "owner";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      pictureUrl: {
        name: "pictureUrl";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      price: {
        name: "price";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
        };
      };
      tags: {
        name: "tags";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "TagEntity"; ofType: null };
            };
          };
        };
      };
      title: {
        name: "title";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      updatedAt: { name: "updatedAt"; type: { kind: "SCALAR"; name: "DateTimeISO"; ofType: null } };
    };
  };
  AdInput: {
    kind: "INPUT_OBJECT";
    name: "AdInput";
    isOneOf: false;
    inputFields: [
      {
        name: "title";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "description";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "owner";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "price";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "pictureUrl";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "location";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
        defaultValue: null;
      },
      {
        name: "category";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
        };
        defaultValue: null;
      },
    ];
  };
  Boolean: unknown;
  CategoryEntity: {
    kind: "OBJECT";
    name: "CategoryEntity";
    fields: {
      ads: {
        name: "ads";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "AdEntity"; ofType: null };
            };
          };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
        };
      };
      name: {
        name: "name";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
    };
  };
  DateTimeISO: unknown;
  Float: unknown;
  Mutation: {
    kind: "OBJECT";
    name: "Mutation";
    fields: {
      createAd: {
        name: "createAd";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AdEntity"; ofType: null };
        };
      };
      deleteAd: {
        name: "deleteAd";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
      replaceAdById: {
        name: "replaceAdById";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AdEntity"; ofType: null };
        };
      };
    };
  };
  Query: {
    kind: "OBJECT";
    name: "Query";
    fields: {
      adById: {
        name: "adById";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "AdEntity"; ofType: null };
        };
      };
      ads: {
        name: "ads";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "AdEntity"; ofType: null };
            };
          };
        };
      };
      categories: {
        name: "categories";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "CategoryEntity"; ofType: null };
            };
          };
        };
      };
      categortById: {
        name: "categortById";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "OBJECT"; name: "CategoryEntity"; ofType: null };
        };
      };
      tags: {
        name: "tags";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "TagEntity"; ofType: null };
            };
          };
        };
      };
    };
  };
  String: unknown;
  TagEntity: {
    kind: "OBJECT";
    name: "TagEntity";
    fields: {
      ads: {
        name: "ads";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: {
            kind: "LIST";
            name: never;
            ofType: {
              kind: "NON_NULL";
              name: never;
              ofType: { kind: "OBJECT"; name: "AdEntity"; ofType: null };
            };
          };
        };
      };
      id: {
        name: "id";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "Float"; ofType: null };
        };
      };
      label: {
        name: "label";
        type: {
          kind: "NON_NULL";
          name: never;
          ofType: { kind: "SCALAR"; name: "String"; ofType: null };
        };
      };
    };
  };
};

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  name: never;
  query: "Query";
  mutation: "Mutation";
  subscription: never;
  types: introspection_types;
};

import * as gqlTada from "gql.tada";

declare module "gql.tada" {
  interface setupSchema {
    introspection: introspection;
  }
}
