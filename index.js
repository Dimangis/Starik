function openSlider(index) {
  document.getElementById(`slider${index}`).style.display = "block";
  console.log(`slider${index}`);
}

function closeSlider(index) {
  document.getElementById(`slider${index}`).style.display = "none";
}

// Закрывать слайдер при клике за его пределами
document.querySelectorAll(".examine_item").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.stopPropagation(); // Останавливаем всплытие события
  });
});

// Добавляем обработчик события click к document
document.addEventListener("click", function (event) {
  const sliders = document.querySelectorAll(".slider");
  sliders.forEach(function (slider) {
    if (!slider.contains(event.target)) {
      slider.style.display = "none";
    }
  });
});
