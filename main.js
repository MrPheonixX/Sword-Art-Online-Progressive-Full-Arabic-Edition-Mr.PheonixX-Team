
const content = document.getElementById('content');

const books = {
  sao: Array.from({ length: 28 }, (_, i) => ({
    title: `SAO Volume ${i + 1}`,
    pdf: `SAO${i + 1}.pdf`
  })),
  progressive: Array.from({ length: 9 }, (_, i) => ({
    title: `Progressive Volume ${i + 1}`,
    pdf: `Progressive${i + 1}.pdf`
  })),
  extras: [
    { title: "Welcome to the NHK", pdf: "Welcome.pdf" },
    { title: "No Longer Human", pdf: "NoLongerHuman.pdf" }
  ]
};

function switchTab(tab) {
  content.innerHTML = "";
  books[tab].forEach(book => {
    content.innerHTML += `
      <div class="card">
        <h2>${book.title}</h2>
        <button onclick="openPDF('${book.pdf}')">📖 اقرأ الآن</button>
      </div>`;
  });
}

function openPDF(file) {
  window.open(file, '_blank');
}

switchTab('sao');

