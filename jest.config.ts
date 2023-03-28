import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "jest-expo",
  verbose: true,
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "jest-styled-components",
    "jest-styled-components/native",
  ],
  setupFiles: ["react-native-gesture-handler/jestSetup"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverage: true,
  coverageDirectory: "tests/reports/jest",
  collectCoverageFrom: [
    "<rootDir>/test-libs/**",
    "<rootDir>/src/components/**",
    "<rootDir>/src/hooks/**",
    "<rootDir>/src/screens/**",
    "<rootDir>/src/services/**",
  ],
  coverageReporters: ["text-summary", "html", "lcov", "json"],
};

export default config;
