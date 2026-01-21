function generateExcuse() {
  let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro','Mi padre','Mi madre','Mi hermana'];
  let action = ['se comió', 'se orinó', 'aplastó', 'rompió','vendió'];
  let what = ['mi tarea', 'mi telefono', 'el coche', 'a mi hermano','mi cartera' ];
  let when = ['antes de la clase', 'cuando estaba durmiendo', 'mientras hacía ejercicio', 'durante mi almuerzo', 'mientras yo estaba jugando'];
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excuse = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + ".";

  document.getElementById("excuse").innerHTML = excuse;
  }