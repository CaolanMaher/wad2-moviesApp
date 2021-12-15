import React from "react";
import BaseAuthHeader from "../components/authHeader";
import { MemoryRouter } from "react-router";

export default {
  title: "Authentication Header",
  component: BaseAuthHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <BaseAuthHeader />;

Basic.storyName = "Default";
