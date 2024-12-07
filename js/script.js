function showSet(setNumber) {
  const mainImage = document.getElementById('main-image');
  const mainText = document.getElementById('main-text');

  if (setNumber === 1) {
      mainImage.src = "../images/flut.jpg";
      mainImage.alt = "flute";
      mainText.textContent = "Medium Fluting";
  } else if (setNumber === 2) {
      mainImage.src = "../images/test.jpg";
      mainImage.alt = "Test";
      mainText.textContent = "Test Liner";
  }
}
