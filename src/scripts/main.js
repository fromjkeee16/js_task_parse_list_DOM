'use strict';

function parseSalary(salary) {
  return +salary.replaceAll(/[$,.]/g, '');
}

function sortList(list) {
  const items = [...list.children];

  items.sort(
    (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
  );

  return items;
}

function getEmployees(list) {
  return [...list.children].map((element) => {
    const { salary, position, age } = element.dataset;

    return {
      name: element.textContent,
      position: position,
      salary: parseSalary(salary),
      age: +age,
    };
  });
}

const domList = document.querySelector('ul');

const sortedList = sortList(domList);

domList.append(...sortedList);

getEmployees(domList);
