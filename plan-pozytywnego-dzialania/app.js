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
