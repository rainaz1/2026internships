{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let internships = [];\
\
fetch('internships.json')\
  .then(response => response.json())\
  .then(data => \{\
    internships = data;\
    displayInternships(internships);\
  \});\
\
function displayInternships(list) \{\
  const container = document.getElementById('internship-list');\
  container.innerHTML = '';\
  list.forEach(intern => \{\
    const div = document.createElement('div');\
    div.classList.add('internship');\
    div.innerHTML = `\
      <h3>$\{intern.title\} @ $\{intern.company\}</h3>\
      <p><strong>Location:</strong> $\{intern.location\}</p>\
      <p><strong>Paid:</strong> $\{intern.paid ? "Yes" : "No"\} | <strong>Remote:</strong> $\{intern.remote ? "Yes" : "No"\}</p>\
      <a href="$\{intern.link\}" target="_blank">View Listing</a>\
    `;\
    container.appendChild(div);\
  \});\
\}\
\
function filterInternships() \{\
  const locationInput = document.getElementById('search-location').value.toLowerCase();\
  const paid = document.getElementById('filter-paid').value;\
  const remote = document.getElementById('filter-remote').value;\
\
  const filtered = internships.filter(intern => \{\
    return (\
      intern.location.toLowerCase().includes(locationInput) &&\
      (paid === "" || intern.paid.toString() === paid) &&\
      (remote === "" || intern.remote.toString() === remote)\
    );\
  \});\
\
  displayInternships(filtered);\
\}\
}