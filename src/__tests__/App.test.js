import React from "react";
import { render, fireEvent } from "@testing-library/react";
import QuizSpace from "../components/QuizSpace";
import { SiteProvider } from "../utils/GlobalState";
import Header from "../components/Header";

test("QuizSpace component displays instructions upon page load", () => {
    const { getByTestId } = render(
        <SiteProvider>
            <Header />
            <QuizSpace />
        </SiteProvider>
    );
    expect(getByTestId("header")).toBeInTheDocument();
    expect(getByTestId("instructions")).toBeInTheDocument();
});

test("Clicking the 'Take the Quiz' button begins a quiz", () => {
    const { getByTestId, getAllByTestId } = render(
        <SiteProvider>
            <Header />
            <QuizSpace />
        </SiteProvider>
    );
    fireEvent.click(getByTestId("beginQuiz"));
    expect(getByTestId("question")).toBeInTheDocument();
    expect(getAllByTestId("answer").length).toBe(4);
});

test("Clicking the 'View the Scoreboard' button displays the high scores", () => {
    const { getByTestId } = render(
        <SiteProvider>
            <Header />
            <QuizSpace />
        </SiteProvider>
    );
    fireEvent.click(getByTestId("viewScoreboard"));
    expect(getByTestId("scoreboard")).toBeInTheDocument();
});