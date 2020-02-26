const graphql = require("graphql");
const mongoose = require("mongoose");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLID } = graphql;
const AuthService = require("../services/auth");
const CategoryType = require("./types/category_type");
const Category = mongoose.model("category");
const UserType = require("./types/user_type");
const ProductType = require("./types/product_type");
const Product = mongoose.model("product");

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
      newCategory: {
        type: CategoryType,
        args: {
          name: { type: GraphQLString }
        },
        resolve(parentValue, { name }) {
          return new Category({ name }).save();
        }
      },
      deleteCategory: {
        type: CategoryType,
        args: { _id: { type: GraphQLID } },
        resolve(parentValue, { _id }) {
          return Category.remove({ _id });
        }
      },
      newProduct: {
          type: ProductType,
          args: {
            //   user: { type: new GraphQLNonNull(GraphQLID) },
              // category: { type: new GraphQLNonNull(GraphQLID) },
              name: { type : GraphQLString },
              description: { type: GraphQLString },
              weight: { type: GraphQLInt }
          },
          resolve(parentValue, { name, description, weight }) {
              return new Product({ name, description, weight }).save();
          }
      },
      deleteProduct: {
          type: ProductType,
          args: {
              _id: { type: GraphQLID } 
          },
          resolve(parentValue, { _id }) {
              return Product.remove({ _id });
          }
      },
      updateProductCategory: {
        type: ProductType,
        args: {
          productId: { type: new GraphQLNonNull(GraphQLID) },
          categoryId: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve(parentValue, { categoryId, productId }) {
          return Product.updateProductCategory(productId, categoryId);
        }
      },
      register: {
        type: UserType,
        args: {
          name: { type: GraphQLString },
          email: { type: GraphQLString },
          password: { type: GraphQLString }
        },
        resolve(_, args) {
          return AuthService.register(args);
        }
      },
      logout: {
        type: UserType,
        args: {
          // all we need to log the user our is an id
          _id: { type: GraphQLID }
        },
        resolve(_, args) {
          return AuthService.logout(args);
        }
      },
      login: {
        type: UserType,
        args: {
          email: { type: GraphQLString },
          password: { type: GraphQLString }
        },
        resolve(_, args) {
          return AuthService.login(args);
        }
      },
      verifyUser: {
        type: UserType,
        args: {
          token: { type: GraphQLString }
        },
        resolve(_, args) {
          return AuthService.verifyUser(args);
        }
      }
    }
});

module.exports = mutation;