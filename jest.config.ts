import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "jest-expo",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverage: true,
  coverageDirectory: "tests/reports/jest",
  collectCoverageFrom: [
    "<rootDir>/test-libs/**",
    "<rootDir>/src/hooks/**",
    "<rootDir>/src/screens/**",
  ],
  coverageReporters: ["text-summary", "html", "lcov", "json"],
};

export default config;
