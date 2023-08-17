"use strict";

const wrapper = document.querySelector(".wrapper");
const url = "https://boredapi.com/api/activity";

function throwDice_D(max) {
  const result = Math.floor(Math.random() * max) + 1;
  return result;
}

async function getActivity() {
  const result = await fetch(url);
  return result.json();
}

async function generate() {
  console.log(
    `
    Roll the dice!
    Your random number is ${throwDice_D(20)}
    The difficulty is ${throwDice_D(20)}
    You decide your destiny!
    `
  );

  try {
    wrapper.innerHTML = '';
    const data = await Promise.all([
      getActivity(),
      getActivity(),
      getActivity(),
    ]);
    console.log(data);
    for (const el of data) {
      const element = document.createElement("div");
      element.innerHTML = `${el.activity}`;
      wrapper.appendChild(element);
    }
  } catch (error) {
    console.error(error);
  }
}
