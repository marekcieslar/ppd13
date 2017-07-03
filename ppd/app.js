let monthTitle = document.querySelector('.month-title');
let date = document.querySelector('.date');
let title = document.querySelector('.title');
let text = document.querySelector('.text');


// set Date
let today = new Date();
let todayDay = today.getDate();
let todayMonth = today.getMonth();
let showDate = `${todayDay} ${monthName(todayMonth)} ${today.getFullYear()}`;
date.innerHTML = showDate;

text.innerHTML = plan.months[todayMonth].days[todayDay - 1].description;
title.innerHTML = plan.months[todayMonth].days[todayDay - 1].motto;
monthTitle.innerHTML = plan.months[todayMonth].motto;

/*
 * VIRTUES
 */

let virtuesTitle = document.querySelector('.virtues-title');
let virtuesText = document.querySelector('.virtues-text');

// get number of week
let januaryFirst = new Date(today.getFullYear(), 0, 1);
let week = Math.ceil( (((today - januaryFirst) / 86400000) + januaryFirst.getDay() + 1) / 7);
let virtueNum = (week) % 13;
virtuesTitle.innerHTML = virtues.virtues[virtueNum].name;
virtuesText.innerHTML = virtues.virtues[virtueNum].description;

/*
 * GOALS
 */

let mainGoals = document.querySelector('.main-goals');
let goalsFilter = goals.filter( a => a.priority === 'A' && !a.done);

let l = goalsFilter.length;
let list = document.createElement('ul');
for (let i = 0; i<l; i++) {
    let element = document.createElement('li');
    let h3 = document.createElement('h3');
    h3.innerHTML = goalsFilter[i].name;
    element.appendChild(h3);
    list.appendChild(element);
}
mainGoals.appendChild(list);











