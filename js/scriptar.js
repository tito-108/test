function showSet(setNumber) {
  const mainImage = document.getElementById('main-image');
  const mainText = document.getElementById('main-text');

  if (setNumber === 1) {
      mainImage.src = "../images/flut.jpg";
      mainImage.alt = "فلوت";
      mainText.textContent = "فلوت فاخر";
  } else if (setNumber === 2) {
      mainImage.src = "../images/test.jpg";
      mainImage.alt = "تست";
      mainText.textContent = "تست معالج";
  }
}
