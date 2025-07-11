
function showLink(button) {
  const card = button.closest('.anime-card');
  const linkBox = card.querySelector('.download-box');
  const telegramLink = card.querySelector('.telegram-link');

  if (linkBox) {
    linkBox.style.display = 'block';

    const downloadLink = linkBox.querySelector('a');
    if (downloadLink) {
      // Prevent multiple event bindings
      downloadLink.onclick = function (e) {
        setTimeout(() => {
          if (telegramLink) {
            telegramLink.style.display = 'block';
          }
        }, 1000);
      };
    }
  }
}

function filterAnime() {
  const input = document.getElementById('search').value.toLowerCase();
  const cards = document.querySelectorAll('.anime-card');

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(input) ? 'block' : 'none';
  });
}
