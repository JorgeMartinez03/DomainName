/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Datos individuales de los dominios.

  let articles = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let tlds = [".com", ".net"];

  let domainNames = [];

  for (let article of articles) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          domainNames.push(`${article}${adjective}${noun}${tld}`);
        }
      }
    }
  }

  const generateButton = document.querySelector("#generate");
  const domainContainer = document.querySelector("#domain");

  generateButton.onclick = () => {
    domainContainer.innerHTML = "<h1>Generated Domains:</h1>";

    domainNames.forEach(domain => {
      const domainElement = document.createElement("p");
      domainElement.textContent = domain;
      domainContainer.appendChild(domainElement);
    });
  };
};