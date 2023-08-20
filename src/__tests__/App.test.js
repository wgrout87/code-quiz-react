import React from "react";
import { render, fireEvent } from "@testing-library/react";
import QuizSpace from "../components/QuizSpace";
import { SiteProvider } from "../utils/GlobalState";
import Header from "../components/Header";

test("Clicking the 'View the Scoreboard' button displays the high scores and back again", () => {
    const { getByTestId } = render(
        <SiteProvider>
            <Header />
            <QuizSpace />
        </SiteProvider>
    );
    expect(getByTestId("header")).toBeInTheDocument();
    expect(getByTestId("instructions")).toBeInTheDocument();
    fireEvent.click(getByTestId("viewScoreboard"));
    expect(getByTestId("scoreboard")).toBeInTheDocument();
    fireEvent.click(getByTestId("instructionsBtn"));
    expect(getByTestId("instructions")).toBeInTheDocument();
});

test("From 'instructions' to 'scoreboard' with perfect answers and begin new quiz", () => {
    const { getByTestId, getAllByTestId } = render(
        <SiteProvider>
            <Header />
            <QuizSpace />
        </SiteProvider>
    );
    fireEvent.click(getByTestId("beginQuiz"));
    expect(getByTestId("question")).toBeInTheDocument();
    expect(getAllByTestId("incorrectAnswer").length).toBe(3);
    expect(getAllByTestId("correctAnswer").length).toBe(1);
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    expect(getByTestId("gameOver")).toBeInTheDocument();
    expect(getAllByTestId("charBtn").length).toBe(26);
    fireEvent.click(getAllByTestId("charBtn")[0]);
    fireEvent.click(getAllByTestId("charBtn")[1]);
    fireEvent.click(getAllByTestId("charBtn")[2]);
    expect(getByTestId("scoreboard")).toBeInTheDocument();
    expect(getByTestId("ABC")).toBeInTheDocument();
    fireEvent.click(getByTestId("playAgainBtn"));
    expect(getByTestId("question")).toBeInTheDocument();
});

test("From 'instructions' to 'scoreboard' with perfect answers and begin new quiz", () => {
    const { getByTestId, getAllByTestId } = render(
        <SiteProvider>
            <Header />
            <QuizSpace />
        </SiteProvider>
    );
    fireEvent.click(getByTestId("beginQuiz"));
    expect(getByTestId("question")).toBeInTheDocument();
    expect(getAllByTestId("incorrectAnswer").length).toBe(3);
    expect(getAllByTestId("correctAnswer").length).toBe(1);
    fireEvent.click(getByTestId("incorrectAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getByTestId("correctAnswer"));
    expect(getByTestId("gameOver")).toBeInTheDocument();
    expect(getAllByTestId("charBtn").length).toBe(26);
    fireEvent.click(getAllByTestId("charBtn")[0]);
    fireEvent.click(getAllByTestId("charBtn")[1]);
    fireEvent.click(getAllByTestId("charBtn")[2]);
    expect(getByTestId("scoreboard")).toBeInTheDocument();
    expect(getByTestId("ABC")).toBeInTheDocument();
    fireEvent.click(getByTestId("playAgainBtn"));
    expect(getByTestId("question")).toBeInTheDocument();
});