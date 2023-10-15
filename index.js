const today = new Date();
const raceDay = new Date("April 7, 2024");

getWeekNumber = () => {
  const timeDifference = raceDay.getTime() - today.getTime();

  // Calculate the number of milliseconds in a week
  const millisecondsInAWeek = 7 * 24 * 60 * 60 * 1000;

  // Calculate the number of full weeks
  const fullWeeks = Math.floor(timeDifference / millisecondsInAWeek);

  return 24 - fullWeeks;
}

tasks = [
  ['Walk 15 min', 'Walk 4:00 Run 1:00 Complete 4x', 'Walk 20 minutes', 'Walk 3:30 Run 1:30 Complete 5x', 'Rest', 'Walk 3:30 Run 1:30 Complete 4x <br> Walk 0:30 Run 1:30 Complete 3x', 'Rest'],
  ['Walk 20 min', 'Walk 2:30 Run 2:30 Complete 5x', 'Walk 25 minutes', 'Walk 2:00 Run 3:00 Complete 5x', 'Rest', 'Walk 2:00 Run 3:00 Complete 4x <br> Walk 0:30 Run 2:30 Complete 2x', 'Rest'],
  ['Walk 30 min', 'Walk 1:30 Run 3:30 Complete 5x', 'Walk 35 minutes', 'Walk 1:30 Run 3:30 Complete 6x', 'Rest', 'Walk 1:30 Run 3:30 Complete 4x <br> Walk 0:30 Run 3:00 Complete 2x', 'Rest'],
  ['Walk 35 min', 'Walk 1:00 Run 4:00 Complete 6x', 'Walk 40 minutes', 'Walk 0:30 Run 4:30 Complete 6x', 'Rest', 'Walk 0:30 Run 4:30 Complete 6x <br> Walk 0:15 Run 4:45', 'Rest'],
  ['Cross training', '1 mile', 'Strength', '1 mile', 'Rest or yoga', '2 miles', 'Rest'],
  ['Cross training', '2 miles', 'Strength', '2 miles', 'Rest or yoga', '3 miles', 'Rest'],
  ['Cross training', '2 miles', 'Strength', '3 miles', 'Rest or yoga', '4 miles', 'Rest'],
  ['Cross training', '3 miles', 'Strength', '4 miles', 'Rest or yoga', '5 miles', 'Rest'],
  ['Cross training', '3 miles', 'Strength', '4 miles', 'Rest or yoga', '5 miles', 'Rest'],
  ['Cross training', '4 miles', 'Strength', '4 miles', 'Rest or yoga', '6 miles', 'Rest'],
  ['Cross training', '4 miles', 'Strength', '4 miles', 'Rest or yoga', '7 miles', 'Rest'],
  ['Cross training', '4 miles', 'Strength', '3 miles', 'Rest or yoga', '5 miles', 'Rest'],
  ['Cross training', '3 miles', 'Strength', '4 miles', 'Rest or yoga', '8 miles', 'Rest'],
  ['Cross training', '4 miles', 'Strength', '3 miles', 'Rest or yoga', '10 miles', 'Rest'],
  ['Cross training', '5 miles', 'Strength', '4 miles', 'Rest or yoga', '8 miles', 'Rest'],
  ['Cross training', '4 miles', 'Strength', '4 miles', 'Rest or yoga', '12 miles', 'Rest'],
  ['Cross training', '4 miles', 'Strength', '5 miles', 'Rest or yoga', '14 miles', 'Rest'],
  ['Cross training', '3 miles', 'Strength', '4 miles', 'Rest or yoga', '10 miles', 'Rest'],
  ['Cross training', '4 miles', 'Strength', '5 miles', 'Rest or yoga', '16 miles', 'Rest'],
  ['Cross training', '4 miles', 'Strength', '5 miles', 'Rest or yoga', '18 miles', 'Rest'],
  ['Cross training', '5 miles', 'Strength', '5 miles', 'Rest or yoga', '20 miles', 'Rest'],
  ['Cross training', '4 miles', 'Strength', '4 miles', 'Rest or yoga', '12 miles', 'Rest'],
  ['Cross training', '3 miles', 'Strength', '4 miles', 'Rest or yoga', '6 miles', 'Rest'],
  ['Cross training', '3 miles', 'Strength', '2 miles', 'Rest', 'Train to France!', 'God, grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.'],
];

document.getElementById("week-number").innerText = getWeekNumber();
document.getElementById("task").innerHTML = tasks[getWeekNumber() - 1][(today.getDay() + 6) % 7];