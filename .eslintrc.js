module.exports = {
   plugins: ["security-node"],
   extends: ["plugin:security-node/recommended"],
   parserOptions: {
     ecmaVersion: 2020
     sourceType: "module" // <-- Добавь вот это
   },
   env: {
     es6: true,
     node: true
   }
 };