module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
    ".*\\.(vue)$": "vue-jest"
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  testMatch: ["<rootDir>/**/*.test.(js|jsx|ts|tsx)"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
};
