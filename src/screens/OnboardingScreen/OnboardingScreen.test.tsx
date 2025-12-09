import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import OnboardingScreen from "../src/screens/OnboardingScreen";

describe("OnboardingScreen", () => {

  // *** Test 1: Render không crash ***
  test("renders onboarding screen without crashing", () => {
    const { getByTestId } = render(<OnboardingScreen />);
    expect(getByTestId("onboarding-screen")).toBeTruthy();
  });

  // *** Test 2: Hiển thị item/onboarding text ***
  test("shows onboarding content", () => {
    const { getByText } = render(<OnboardingScreen />);

    // Ví dụ: Trong onboarding có text "Welcome"
    expect(getByText(/welcome/i)).toBeTruthy();
  });

  // *** Test 3: Nhấn nút Next / Get Started ***
  test("button Next works correctly", () => {
  const mockComplete = jest.fn();

  const { getByText } = render(
    <OnboardingScreen onComplete={mockComplete} />
  );

  let nextButton;

  // Nhấn Next hai lần để tới slide cuối
  nextButton = getByText('Next');
  fireEvent.press(nextButton);

  nextButton = getByText('Next');
  fireEvent.press(nextButton);

  // Giờ là slide cuối => nút "Get Started"
  const finishButton = getByText('Get Started');
  fireEvent.press(finishButton);

  expect(mockComplete).toHaveBeenCalled();
});
