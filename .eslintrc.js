module.exports = {
   plugins: ["security-node"],
   extends: ["plugin:security-node/recommended"],
   parserOptions: {
     ecmaVersion: 2020
   },
   env: {
     es6: true,
     node: true
   }
 };