
const content = document.getElementById('content');

const books = {
  sao: Array.from({ length: 28 }, (_, i) => ({
    title: `SAO Volume ${i + 1}`,
    pdf: `pdfs/SAO${i + 1}.pdf`
  })),
  progressive: Array.from({ length: 9 }, (_, i) => ({
    title: `Progressive Volume ${i + 1}`,
    pdf: `pdfs/Progressive${i + 1}.pdf`
  })),
  extras: [
    { title: "Welcome to the NHK", pdf: "pdfs/Welcome.pdf" },
    { title: "No Longer Human", pdf: "pdfs/NoLongerHuman.pdf" }
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
function openPDF(path) {
  const viewer = window.open("", "_blank");
  viewer.document.write(`<iframe src="${path}" width="100%" height="100%" style="border:none;"></iframe>`);
}

switchTab("sao");
