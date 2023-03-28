import React from "react";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";

interface SpinnerProps extends ActivityIndicatorProps {}

const Spinner: React.FC<SpinnerProps> = ({ testID, ...rest }) => (
  <ActivityIndicator testID={testID} {...rest} />
);

export default Spinner;
