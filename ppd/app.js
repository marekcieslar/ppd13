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

text.innerHTML = plan.months[todayMonth].days[todayDay-1].description;
title.innerHTML = plan.months[todayMonth].days[todayDay-1].motto;
monthTitle.innerHTML = plan.months[todayMonth].motto;

// virtues
let virtuesTitle = document.querySelector('.virtues-title');
let virtuesText = document.querySelector('.virtues-text');

// get number of week
let januaryFirst = new Date(today.getFullYear(), 1, 1);
let week = Math.ceil( (((today - januaryFirst) / 86400001) + todayDay + 1) / 7 );

let virtueNum = (week+2) % 13;

virtuesTitle.innerHTML = virtues.virtues[virtueNum].name;
virtuesText.innerHTML = virtues.virtues[virtueNum].description;
