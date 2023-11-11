window.onload = function(whi, action, what, when) {
  document.querySelector("#excuse").innerHTML = randomExcuse();

};

let randomExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoExcuse = Math.floor(Math.random() * who.length);
  let actionExcuse = Math.floor(Math.random() * action.length);
  let whatExcuse = Math.floor(Math.random() * what.length);
  let whenExcuse = Math.floor(Math.random() * when.length);

  return (
    who[whoExcuse] +
    " " +
    action[actionExcuse] +
    " " +
    what[whatExcuse] +
    " " +
    when[whenExcuse]
  );
};
