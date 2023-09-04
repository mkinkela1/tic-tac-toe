export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "<rootDir>/"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/main.tsx",
    "<rootDir>/src/App.tsx",
    "<rootDir>/src/contexts/*",
    "<rootDir>/src/enums/*",
    "<rootDir>/src/hooks/*",
    "<rootDir>/src/pages/*",
    "<rootDir>/src/types/*",
    "<rootDir>/src/utils/*",
  ],
};
