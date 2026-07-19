// ============================================================
// BusGo — App Logic (app.js)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // Set min date to today
  const dateInput = document.getElementById('travelDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  // Swap button
  const swapBtn = document.getElementById('swapBtn');
  if (swapBtn) {
    swapBtn.addEventListener('click', () => {
      const from = document.getElementById('fromCity');
      const to = document.getElementById('toCity');
      [from.value, to.value] = [to.value, from.value];
    });
  }

  // Popular route chips
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const from = document.getElementById('fromCity');
      const to = document.getElementById('toCity');
      if (from && to) {
        from.value = chip.dataset.from;
        to.value = chip.dataset.to;
      }
    });
  });

  // Tab switching
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Search form
  const searchForm = document.getElementById('searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const from = document.getElementById('fromCity').value.trim();
      const to = document.getElementById('toCity').value.trim();
      const date = document.getElementById('travelDate').value;
      const passengers = document.getElementById('passengers').value;

      if (!from || !to) {
        alert('Please enter both departure and destination cities.');
        return;
      }
      if (from.toLowerCase() === to.toLowerCase()) {
        alert('Departure and destination cannot be the same city.');
        return;
      }

      // Navigate to bus list
      const params = new URLSearchParams({ from, to, date, passengers });
      window.location.href = `pages/bus-list.html?${params}`;
    });
  }
});
