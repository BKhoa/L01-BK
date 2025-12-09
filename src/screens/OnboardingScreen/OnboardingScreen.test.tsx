import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import OnboardingScreen from "../src/screens/OnboardingScreen";

describe("OnboardingScreen", () => {

  // *** Test 1: Render không crash ***
  test("renders onboarding screen without crashing", () => {
    const { getByTestId } = render(<OnboardingScreen />);
    expect(getByTestId("onboarding-container")).toBeTruthy();
  });

  // *** Test 2: Hiển thị item/onboarding text ***
  test("shows onboarding content", () => {
    const { getByText } = render(<OnboardingScreen />);

    // Ví dụ: Trong onboarding có text "Welcome"
    expect(getByText(/welcome/i)).toBeTruthy();
  });

  // *** Test 3: Nhấn nút Next / Get Started ***
  test("button Next works correctly", () => {
    const mockNavigate = jest.fn();

    const { getByText } = render(
      <OnboardingScreen navigation={{ navigate: mockNavigate } as any} />
    );

    const nextButton = getByText(/next|get started/i);

    fireEvent.press(nextButton);

    expect(mockNavigate).toHaveBeenCalled();
  });

});
