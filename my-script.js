const evilButton = document.getElementById("evil-button");
evilButton.style.left = "47%";
evilButton.style.top = "43%";

evilButton.addEventListener("click", () => {
  alert("Nice Try");
  window.close;
});

const OFFSET = 100;

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;
  const buttonBox = evilButton.getBoundingClientRect();

  const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width);
  const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height);

  const horizontalOffset = buttonBox.width / 2 + OFFSET;
  const verticalOffset = buttonBox.height / 2 + OFFSET;

  if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
    setButtonPosition(buttonBox.x + (horizontalOffset / horizontalDistanceFrom) * 10, buttonBox.y + (verticalOffset / verticalDistanceFrom) * 10);
  }
});

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2;
}

function setButtonPosition(left, top) {
  const buttonBox = evilButton.getBoundingClientRect();
  const windowBox = document.body.getBoundingClientRect();
  if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
    left = windowBox.right - OFFSET - buttonBox.width;
  }

  if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
    left = windowBox.left + OFFSET;
  }

  if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
    top = windowBox.bottom - OFFSET - buttonBox.height;
  }

  if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
    top = windowBox.top + OFFSET;
  }

  evilButton.style.left = `${left}px`;
  evilButton.style.top = `${top}px`;
}

const levelText = document.querySelector(".level");

document.querySelector(".level-btn1").addEventListener("click", () => {
  document.body.classList.add("increase");
  levelText.innerHTML = "level 2";
});

document.querySelector(".level-btn2").addEventListener("click", () => {
  document.body.classList.remove("increase");
  levelText.innerHTML = "level 1";
});
