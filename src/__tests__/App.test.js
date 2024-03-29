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
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:0');
    expect(container.querySelector("#currentCombo").textContent).toBe('0');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.0');
    expect(container.querySelector("#timeRemaining").textContent).toBe('180');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:1000');
    expect(container.querySelector("#currentCombo").textContent).toBe('1');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.1');
    expect(container.querySelector("#timeRemaining").textContent).toBe('180');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:2100');
    expect(container.querySelector("#currentCombo").textContent).toBe('2');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.2');
    expect(container.querySelector("#timeRemaining").textContent).toBe('180');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:3300');
    expect(container.querySelector("#currentCombo").textContent).toBe('3');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.3');
    expect(container.querySelector("#timeRemaining").textContent).toBe('180');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:4600');
    expect(container.querySelector("#currentCombo").textContent).toBe('4');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.4');
    expect(container.querySelector("#timeRemaining").textContent).toBe('180');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:6000');
    expect(container.querySelector("#currentCombo").textContent).toBe('5');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.5');
    expect(container.querySelector("#timeRemaining").textContent).toBe('180');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:7500');
    expect(container.querySelector("#currentCombo").textContent).toBe('6');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.6');
    expect(container.querySelector("#timeRemaining").textContent).toBe('180');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:9100');
    expect(container.querySelector("#currentCombo").textContent).toBe('7');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.7');
    expect(container.querySelector("#timeRemaining").textContent).toBe('180');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:10800');
    expect(container.querySelector("#currentCombo").textContent).toBe('8');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.8');
    expect(container.querySelector("#timeRemaining").textContent).toBe('180');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:12600');
    expect(container.querySelector("#currentCombo").textContent).toBe('9');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.9');
    expect(container.querySelector("#timeRemaining").textContent).toBe('180');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:14500');
    expect(container.querySelector("#currentCombo").textContent).toBe('10');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('2.0');
    expect(container.querySelector("#timeRemaining").textContent).toBe('180');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:16500');
    expect(container.querySelector("#currentCombo").textContent).toBe('11');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('2.1');
    expect(container.querySelector("#timeRemaining").textContent).toBe('180');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:18600');
    expect(container.querySelector("#currentCombo").textContent).toBe('12');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('2.2');
    expect(container.querySelector("#timeRemaining").textContent).toBe('180');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:20800');
    expect(container.querySelector("#currentCombo").textContent).toBe('13');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('2.3');
    expect(container.querySelector("#timeRemaining").textContent).toBe('180')
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:23100');
    expect(container.querySelector("#currentCombo").textContent).toBe('14');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('2.4');
    expect(container.querySelector("#timeRemaining").textContent).toBe('180')
    fireEvent.click(getByTestId("correctAnswer"));
    expect(getByTestId("gameOver")).toBeInTheDocument();
    expect(getAllByTestId("charBtn").length).toBe(26);
    fireEvent.click(getAllByTestId("charBtn")[0]);
    fireEvent.click(getAllByTestId("charBtn")[1]);
    fireEvent.click(getAllByTestId("charBtn")[2]);
    expect(getByTestId("scoreboard")).toBeInTheDocument();
    expect(getByTestId("ABC")).toBeInTheDocument();
    expect(getByTestId("ABC30000")).toBeInTheDocument('30000');
    fireEvent.click(getByTestId("playAgainBtn"));
    expect(getByTestId("question")).toBeInTheDocument();
});

test("From 'instructions' to 'scoreboard' with some correct answers and begin new quiz", () => {
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
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:0');
    expect(container.querySelector("#currentCombo").textContent).toBe('0');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.0');
    expect(container.querySelector("#timeRemaining").textContent).toBe('180');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:1000');
    expect(container.querySelector("#currentCombo").textContent).toBe('1');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.1');
    expect(container.querySelector("#timeRemaining").textContent).toBe('180');
    fireEvent.click(getAllByTestId("incorrectAnswer")[0]);
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:1000');
    expect(container.querySelector("#currentCombo").textContent).toBe('0');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.0');
    expect(container.querySelector("#timeRemaining").textContent).toBe('170');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:2000');
    expect(container.querySelector("#currentCombo").textContent).toBe('1');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.1');
    expect(container.querySelector("#timeRemaining").textContent).toBe('170');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:3100');
    expect(container.querySelector("#currentCombo").textContent).toBe('2');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.2');
    expect(container.querySelector("#timeRemaining").textContent).toBe('170');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:4300');
    expect(container.querySelector("#currentCombo").textContent).toBe('3');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.3');
    expect(container.querySelector("#timeRemaining").textContent).toBe('170');
    fireEvent.click(getAllByTestId("incorrectAnswer")[0]);
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:4300');
    expect(container.querySelector("#currentCombo").textContent).toBe('0');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.0');
    expect(container.querySelector("#timeRemaining").textContent).toBe('160');
    fireEvent.click(getAllByTestId("incorrectAnswer")[2]);
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:4300');
    expect(container.querySelector("#currentCombo").textContent).toBe('0');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.0');
    expect(container.querySelector("#timeRemaining").textContent).toBe('150');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:5300');
    expect(container.querySelector("#currentCombo").textContent).toBe('1');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.1');
    expect(container.querySelector("#timeRemaining").textContent).toBe('150');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:6400');
    expect(container.querySelector("#currentCombo").textContent).toBe('2');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.2');
    expect(container.querySelector("#timeRemaining").textContent).toBe('150');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:7600');
    expect(container.querySelector("#currentCombo").textContent).toBe('3');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.3');
    expect(container.querySelector("#timeRemaining").textContent).toBe('150');
    fireEvent.click(getAllByTestId("incorrectAnswer")[1]);
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:7600');
    expect(container.querySelector("#currentCombo").textContent).toBe('0');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.0');
    expect(container.querySelector("#timeRemaining").textContent).toBe('140');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:8600');
    expect(container.querySelector("#currentCombo").textContent).toBe('1');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.1');
    expect(container.querySelector("#timeRemaining").textContent).toBe('140');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:9700');
    expect(container.querySelector("#currentCombo").textContent).toBe('2');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.2');
    expect(container.querySelector("#timeRemaining").textContent).toBe('140');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:10900');
    expect(container.querySelector("#currentCombo").textContent).toBe('3');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.3');
    expect(container.querySelector("#timeRemaining").textContent).toBe('140');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:12200');
    expect(container.querySelector("#currentCombo").textContent).toBe('4');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.4');
    expect(container.querySelector("#timeRemaining").textContent).toBe('140');
    fireEvent.click(getAllByTestId("incorrectAnswer")[0]);
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:12200');
    expect(container.querySelector("#currentCombo").textContent).toBe('0');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.0');
    expect(container.querySelector("#timeRemaining").textContent).toBe('130');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:13200');
    expect(container.querySelector("#currentCombo").textContent).toBe('1');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.1');
    expect(container.querySelector("#timeRemaining").textContent).toBe('130');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:14300');
    expect(container.querySelector("#currentCombo").textContent).toBe('2');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.2');
    expect(container.querySelector("#timeRemaining").textContent).toBe('130');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:15500');
    expect(container.querySelector("#currentCombo").textContent).toBe('3');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.3');
    expect(container.querySelector("#timeRemaining").textContent).toBe('130');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(getByTestId("gameOver")).toBeInTheDocument();
    expect(getAllByTestId("charBtn").length).toBe(26);
    fireEvent.click(getAllByTestId("charBtn")[2]);
    fireEvent.click(getAllByTestId("charBtn")[3]);
    fireEvent.click(getAllByTestId("charBtn")[4]);
    expect(getByTestId("scoreboard")).toBeInTheDocument();
    expect(getByTestId("CDE")).toBeInTheDocument();
    expect(getByTestId("CDE18620")).toBeInTheDocument('18620');
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
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:0');
    expect(container.querySelector("#currentCombo").textContent).toBe('0');
    expect(container.querySelector("#currentPointsMultiplier").textContent).toBe('1.0');
    expect(container.querySelector("#timeRemaining").textContent).toBe('180');
    fireEvent.click(getAllByTestId("incorrectAnswer")[0]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('170');
    fireEvent.click(getAllByTestId("incorrectAnswer")[1]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('160');
    fireEvent.click(getAllByTestId("incorrectAnswer")[2]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('150');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:1000');
    fireEvent.click(getAllByTestId("incorrectAnswer")[0]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('140');
    fireEvent.click(getAllByTestId("incorrectAnswer")[1]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('130');
    fireEvent.click(getAllByTestId("incorrectAnswer")[2]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('120');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:2000');
    fireEvent.click(getAllByTestId("incorrectAnswer")[0]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('110');
    fireEvent.click(getAllByTestId("incorrectAnswer")[1]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('100');
    fireEvent.click(getAllByTestId("incorrectAnswer")[2]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('90');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:3000');
    fireEvent.click(getAllByTestId("incorrectAnswer")[0]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('80');
    fireEvent.click(getAllByTestId("incorrectAnswer")[1]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('70');
    fireEvent.click(getAllByTestId("incorrectAnswer")[2]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('60');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:4000');
    fireEvent.click(getAllByTestId("incorrectAnswer")[0]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('50');
    fireEvent.click(getAllByTestId("incorrectAnswer")[1]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('40');
    fireEvent.click(getAllByTestId("incorrectAnswer")[2]);
    expect(container.querySelector("#timeRemaining").textContent).toBe('30');
    fireEvent.click(getByTestId("correctAnswer"));
    expect(container.querySelector("#score").textContent).toBe('CURRENT SCORE:5000');
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
    expect(getByTestId("BCD")).toBeInTheDocument();
    expect(getByTestId("BCD5000")).toBeInTheDocument('5000');
    fireEvent.click(getByTestId("playAgainBtn"));
    expect(getByTestId("question")).toBeInTheDocument();
});