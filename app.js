// Sample timetable data
const timetableData = [
  { time: '09:00 - 10:00', subject: 'Mathematics' },
  { time: '10:00 - 11:00', subject: '' }, // Gap
  { time: '11:00 - 12:00', subject: 'Physics' },
  { time: '12:00 - 13:00', subject: '' }, // Gap
  { time: '13:00 - 14:00', subject: 'Chemistry' },
  { time: '14:00 - 15:00', subject: '' }, // Gap
  { time: '15:00 - 16:00', subject: 'English' }
];

// Sample suggestions data
const suggestionsData = [
  {
    id: 1,
    title: 'Watch a short AI course',
    category: 'Learning',
    description: 'Use your free slot to watch a 30-min AI basics video.',
    duration: 60
  },
  {
    id: 2,
    title: 'Group Study Session',
    category: 'Collaboration',
    description: 'Invite friends for a quick group study on Physics.',
    duration: 60
  },
  {
    id: 3,
    title: 'Mindfulness Break',
    category: 'Personal Growth',
    description: 'Practice meditation or journaling for 20 minutes.',
    duration: 30
  },
  {
    id: 4,
    title: 'Google Docs Revision',
    category: 'Learning',
    description: 'Revise notes using Google Docs collaboration tools.',
    duration: 60
  }
];

// Render timetable
function renderTimetable() {
  const timetable = document.getElementById('timetable');
  timetable.innerHTML = '';
  timetableData.forEach(slot => {
    const div = document.createElement('div');
    div.className = 'timetable-slot' + (slot.subject === '' ? ' gap' : '');
    div.textContent = slot.subject ? `${slot.time}\n${slot.subject}` : `${slot.time}\nFree Slot`;
    timetable.appendChild(div);
  });
}

// Render suggestions (mock AI: show only for gaps)
function renderSuggestions() {
  const suggestionGrid = document.getElementById('suggestion-cards');
  suggestionGrid.innerHTML = '';
  // Find gaps in timetable
  const gaps = timetableData.filter(slot => slot.subject === '');
  // For demo, show all suggestions for each gap
  suggestionsData.forEach(suggestion => {
    const card = document.createElement('div');
    card.className = 'suggestion-card';
    card.innerHTML = `
      <div class="suggestion-category">${suggestion.category}</div>
      <h3>${suggestion.title}</h3>
      <p>${suggestion.description}</p>
      <button class="btn-primary" onclick="showActivityDetail(${suggestion.id})">View Details</button>
    `;
    suggestionGrid.appendChild(card);
  });
}

// Activity Detail Modal
function showActivityDetail(id) {
  const activity = suggestionsData.find(s => s.id === id);
  const modal = document.getElementById('activity-modal');
  const detail = document.getElementById('activity-detail');
  detail.innerHTML = `
    <h2>${activity.title}</h2>
    <p><strong>Category:</strong> ${activity.category}</p>
    <p>${activity.description}</p>
    <button class="btn-primary" onclick="startActivity(${activity.id})">Start Activity</button>
    <p style="margin-top:1rem;font-size:0.9rem;color:#888;">(AI/Google tool integration would go here)</p>
  `;
  modal.classList.remove('hidden');
}
function startActivity(id) {
  alert('Activity started! (Integration with Google tools/AI would go here)');
  document.getElementById('activity-modal').classList.add('hidden');
}
document.getElementById('close-modal').onclick = function() {
  document.getElementById('activity-modal').classList.add('hidden');
};

// Initial render
renderTimetable();
renderSuggestions();
