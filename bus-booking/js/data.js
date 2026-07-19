// ============================================================
// BusGo — Bus Data & Utilities
// ============================================================

const BUS_DATA = [
  {
    id: 'BG101',
    operator: 'KPN Travels',
    type: 'AC Sleeper',
    rating: 4.6,
    reviews: 1240,
    departure: '21:00',
    arrival: '05:30',
    duration: '8h 30m',
    stops: 'Non-stop',
    price: 850,
    seatsAvailable: 12,
    amenities: ['WiFi', 'USB Charging', 'Blanket', 'Water'],
    bookedSeats: [2, 5, 8, 12, 15, 17, 22, 28, 33, 36]
  },
  {
    id: 'BG102',
    operator: 'Orange Tours',
    type: 'Volvo Multi-Axle',
    rating: 4.4,
    reviews: 890,
    departure: '22:30',
    arrival: '07:00',
    duration: '8h 30m',
    stops: '1 Stop',
    price: 750,
    seatsAvailable: 6,
    amenities: ['AC', 'USB Charging', 'TV'],
    bookedSeats: [1, 3, 6, 9, 11, 14, 16, 18, 20, 23, 25, 27, 30, 32, 35, 38]
  },
  {
    id: 'BG103',
    operator: 'Parveen Travels',
    type: 'Semi-Sleeper AC',
    rating: 4.2,
    reviews: 560,
    departure: '23:00',
    arrival: '08:30',
    duration: '9h 30m',
    stops: '2 Stops',
    price: 620,
    seatsAvailable: 18,
    amenities: ['AC', 'Snacks', 'Water'],
    bookedSeats: [4, 7, 10, 21, 26, 31]
  },
  {
    id: 'BG104',
    operator: 'SRS Travels',
    type: 'AC Seater',
    rating: 4.5,
    reviews: 2100,
    departure: '06:00',
    arrival: '13:00',
    duration: '7h 00m',
    stops: 'Non-stop',
    price: 580,
    seatsAvailable: 22,
    amenities: ['AC', 'USB Charging', 'Snacks', 'Pillow'],
    bookedSeats: [2, 5, 14, 19, 24]
  },
  {
    id: 'BG105',
    operator: 'IntrCity SmartBus',
    type: 'Luxury Sleeper',
    rating: 4.8,
    reviews: 3500,
    departure: '20:00',
    arrival: '04:00',
    duration: '8h 00m',
    stops: 'Non-stop',
    price: 1100,
    seatsAvailable: 4,
    amenities: ['WiFi', 'AC', 'USB Charging', 'Blanket', 'Pillow', 'Snacks', 'TV'],
    bookedSeats: [1, 2, 3, 5, 6, 8, 9, 10, 11, 13, 14, 15, 17, 18, 20, 22, 23, 25, 26, 28, 30, 32, 33, 35, 36, 37, 38, 39]
  },
  {
    id: 'BG106',
    operator: 'VRL Travels',
    type: 'Non-AC Sleeper',
    rating: 3.9,
    reviews: 445,
    departure: '19:30',
    arrival: '04:30',
    duration: '9h 00m',
    stops: '1 Stop',
    price: 420,
    seatsAvailable: 30,
    amenities: ['Water', 'Blanket'],
    bookedSeats: [3, 8, 15]
  }
];

function getBuses(filters = {}) {
  let buses = [...BUS_DATA];

  if (filters.type) {
    buses = buses.filter(b => b.type.toLowerCase().includes(filters.type.toLowerCase()));
  }
  if (filters.maxPrice) {
    buses = buses.filter(b => b.price <= filters.maxPrice);
  }
  if (filters.sort === 'price_asc') buses.sort((a, b) => a.price - b.price);
  if (filters.sort === 'price_desc') buses.sort((a, b) => b.price - a.price);
  if (filters.sort === 'rating') buses.sort((a, b) => b.rating - a.rating);
  if (filters.sort === 'departure') buses.sort((a, b) => a.departure.localeCompare(b.departure));

  return buses;
}

function getBusById(id) {
  return BUS_DATA.find(b => b.id === id);
}

// Booking storage
const BookingStore = {
  getAll() {
    return JSON.parse(localStorage.getItem('busgo_bookings') || '[]');
  },
  add(booking) {
    const bookings = this.getAll();
    bookings.unshift(booking);
    localStorage.setItem('busgo_bookings', JSON.stringify(bookings));
    return booking;
  },
  cancel(pnr) {
    const bookings = this.getAll();
    const idx = bookings.findIndex(b => b.pnr === pnr);
    if (idx !== -1) {
      bookings[idx].status = 'Cancelled';
      localStorage.setItem('busgo_bookings', JSON.stringify(bookings));
    }
  }
};

function generatePNR() {
  return 'BG' + Math.random().toString(36).substring(2, 8).toUpperCase();
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
}
