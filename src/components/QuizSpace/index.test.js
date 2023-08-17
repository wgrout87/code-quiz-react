import React from "react";
import { render, fireEvent } from "@testing-library/react";
import QuizSpace from ".";
import { SiteProvider } from "../../utils/GlobalState";

test("QuizSpace component displays instructions upon page load", () => {
    const { getByTestId } = render(
        <SiteProvider>
            <QuizSpace />
        </SiteProvider>
    );
    expect(getByTestId("instructions")).toBeInTheDocument();
});

test("Clicking the 'Take the Quiz' button begins a quiz", () => {
    const { getByTestId } = render(
        <SiteProvider>
            <QuizSpace />
        </SiteProvider>
    );
    fireEvent.click(getByTestId("beginQuiz"));
    expect(getByTestId("question")).toBeInTheDocument();
});