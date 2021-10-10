let form = document.getElementById("myForm");

const tasks = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inp = document.getElementById("input").value;
  var div = document.createElement("div");
  div.style.height = "3rem";
  div.style.width = "55rem";
  div.style.marginTop = "2rem";
  div.style.marginLeft = "2rem";
  div.style.color = "black";
  div.style.fontSize = "2rem";
  div.style.boxShadow = "0 1.2rem 3rem 0.5rem rgba(0, 0, 0, 0.2)";
  div.innerHTML = inp;
  document.getElementById("card").appendChild(div);
  const span1 = document.createElement("span");
  span1.style.position = "absolute";
  span1.style.right = "45rem";
  span1.style.cursor = "pointer";
  span1.innerHTML = '<i class="fas fa-trash-alt" title="remove"></i>';

  const span2 = document.createElement("span");
  span2.style.position = "absolute";
  span2.style.right = "40rem";

  span2.style.cursor = "pointer";
  span2.innerHTML = '<i class="fas fa-star" title="mark as done"></i>';
  div.appendChild(span1);
  div.appendChild(span2);

  span1.addEventListener("click", () => {
    var proceed = confirm("Are you sure to remove this task?");
    if (proceed) {
        div.remove();
    }

  });

  let isAdded = false;

  span2.addEventListener("click", () => {
    if (isAdded) {
      alert("task is already added as done");
      tasks.appendChild(div);
    } else {
      alert("task added as done!!");
      span2.style.color = "gray";
      isAdded = true;
    }
  });
  form.reset();
});

