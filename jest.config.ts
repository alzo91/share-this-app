import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "jest-expo",
  verbose: true,
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "jest-styled-components",
    "jest-styled-components/native",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|moti/.*|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
  setupFiles: [
    "react-native-gesture-handler/jestSetup",
    "./tests/mocks/setup.ts",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverage: true,
  coverageDirectory: "tests/reports/jest",
  collectCoverageFrom: [
    "<rootDir>/src/components/**",
    "<rootDir>/src/hooks/**",
    "<rootDir>/src/screens/**",
    "<rootDir>/src/services/**",
  ],
  coverageReporters: ["text-summary", "html", "lcov", "json"],
};

export default config;
