async function loadInternships() {
  const response = await fetch('internships.json');
  const internships = await response.json();
  displayInternships(internships);

  // Filters
  document.getElementById('search').addEventListener('input', () => filterInternships(internships));
  document.getElementById('locationFilter').addEventListener('change', () => filterInternships(internships));
  document.getElementById('paidFilter').addEventListener('change', () => filterInternships(internships));
}

function displayInternships(internships) {
  const container = document.getElementById('internshipList');
  container.innerHTML = '';

  if (internships.length === 0) {
    container.innerHTML = '<p>No internships found.</p>';
    return;
  }

  internships.forEach(intern => {
    const div = document.createElement('div');
    div.className = 'internship';
    div.innerHTML = `
      <h3>${intern.title}</h3>
      <p><strong>Company:</strong> ${intern.company}</p>
      <p><strong>Location:</strong> ${intern.location}</p>
      <p><strong>Type:</strong> ${intern.paid}</p>
    `;
    container.appendChild(div);
  });
}

function filterInternships(data) {
  const search = document.getElementById('search').value.toLowerCase();
  const location = document.getElementById('locationFilter').value;
  const paid = document.getElementById('paidFilter').value;

  const filtered = data.filter(intern =>
    (intern.title.toLowerCase().includes(search) || intern.company.toLowerCase().includes(search)) &&
    (location === '' || intern.location === location) &&
    (paid === '' || intern.paid === paid)
  );

  displayInternships(filtered);
}

loadInternships();
