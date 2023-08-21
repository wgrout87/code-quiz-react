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

test("From 'instructions' to 'scoreboard' with incorrect answers and begin new quiz", () => {
    const { getByTestId, getAllByTestId, container } = render(
        <SiteProvider>
            <Header />
            <QuizSpace />
        </SiteProvider>
    );
    fireEvent.click(getByTestId("beginQuiz"));
    expect(getByTestId("question")).toBeInTheDocument();
    expect(getAllByTestId("incorrectAnswer").length).toBe(3);
    expect(getAllByTestId("correctAnswer").length).toBe(1);
    fireEvent.click(getAllByTestId("incorrectAnswer")[0]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('170');
    fireEvent.click(getAllByTestId("incorrectAnswer")[1]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('160');
    fireEvent.click(getAllByTestId("incorrectAnswer")[2]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('150');
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getAllByTestId("incorrectAnswer")[0]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('140');
    fireEvent.click(getAllByTestId("incorrectAnswer")[1]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('130');
    fireEvent.click(getAllByTestId("incorrectAnswer")[2]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('120');
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getAllByTestId("incorrectAnswer")[0]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('110');
    fireEvent.click(getAllByTestId("incorrectAnswer")[1]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('100');
    fireEvent.click(getAllByTestId("incorrectAnswer")[2]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('90');
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getAllByTestId("incorrectAnswer")[0]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('80');
    fireEvent.click(getAllByTestId("incorrectAnswer")[1]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('70');
    fireEvent.click(getAllByTestId("incorrectAnswer")[2]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('60');
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getAllByTestId("incorrectAnswer")[0]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('50');
    fireEvent.click(getAllByTestId("incorrectAnswer")[1]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('40');
    fireEvent.click(getAllByTestId("incorrectAnswer")[2]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('30');
    fireEvent.click(getByTestId("correctAnswer"));
    fireEvent.click(getAllByTestId("incorrectAnswer")[0]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('20');
    fireEvent.click(getAllByTestId("incorrectAnswer")[1]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('10');
    fireEvent.click(getAllByTestId("incorrectAnswer")[2]);
    expect(getByTestId("gameOver")).toBeInTheDocument();
    expect(getAllByTestId("charBtn").length).toBe(26);
    fireEvent.click(getAllByTestId("charBtn")[1]);
    fireEvent.click(getAllByTestId("charBtn")[2]);
    fireEvent.click(getAllByTestId("charBtn")[3]);
    expect(getByTestId("scoreboard")).toBeInTheDocument();
    expect(getByTestId("BCD")).toBeInTheDocument();
    fireEvent.click(getByTestId("playAgainBtn"));
    expect(getByTestId("question")).toBeInTheDocument();
});