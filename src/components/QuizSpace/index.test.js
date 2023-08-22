import React from "react";
import { render, fireEvent } from "@testing-library/react";
import QuizSpace from "./index";
import { SiteProvider } from "../../utils/GlobalState";

jest.spyOn(global, 'setTimeout');

test("The timer decreases each second and game ends at 0 time remaining", async () => {
    const { getByTestId, getAllByTestId, container } = render(
        <SiteProvider>
            <QuizSpace />
        </SiteProvider>
    );
    fireEvent.click(getByTestId("beginQuiz"));
    expect(getByTestId("question")).toBeInTheDocument();
    expect(getAllByTestId("incorrectAnswer").length).toBe(3);
    expect(getAllByTestId("correctAnswer").length).toBe(1);
    expect(container.querySelector("#timeRemaining").textContent).toBe('180');
    expect(setTimeout).toHaveBeenCalledTimes(1);
    setTimeout(() => {
        expect(container.querySelector("#timeRemaining").textContent).toBe('179');
    }, 1000);
    setTimeout(() => {
        expect(container.querySelector("#timeRemaining").textContent).toBe('178');
    }, 1000);
    setTimeout(() => {
        expect(container.querySelector("#timeRemaining").textContent).toBe('177');
    }, 1000);
    setTimeout(() => {
        expect(container.querySelector("#timeRemaining").textContent).toBe('1');
    }, 176000);
    setTimeout(() => {
        expect(container.querySelector("#timeRemaining").textContent).toBe('0');
        expect(container.querySelector("#timeRemaining").style.visibility).toBe('1');
        expect(getByTestId("gameOver")).toBeInTheDocument();
    }, 1000);
    setTimeout(() => {
        expect(container.querySelector("#timeRemaining").textContent).toBe('0');
        expect(container.querySelector("#timeRemaining").style.visibility).toBe('0');
        expect(getByTestId("gameOver")).toBeInTheDocument();
    }, 1000);
})