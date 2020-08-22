import { ADD, MINUS, DIVISION, MULTIPLICATION } from "../constants/counts";

export const addNumber = (number) => ({
  type: ADD,
  payload: number,
});

export const minusNumber = (number) => ({
  type: MINUS,
  payload: number,
});

export const divisionNumber = (number) => ({
  type: DIVISION,
  payload: number,
});

export const multiplicationNumber = (number) => ({
  type: MULTIPLICATION,
  payload: number,
});
