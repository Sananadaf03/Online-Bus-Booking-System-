# 🚌 BusGo — Bus Ticket Booking App

A complete, fully functional bus ticket booking web app built with HTML, CSS, and vanilla JavaScript. No framework or backend required.

## 🚀 How to Run in VS Code

### Option 1 — Live Server (Recommended)
1. Open the `bus-booking` folder in VS Code
2. Install the **Live Server** extension (by Ritwick Dey) if you haven't already
3. Right-click on `index.html` → **"Open with Live Server"**
4. The app opens at `http://127.0.0.1:5500`

### Option 2 — Direct File Open
- Simply open `index.html` in any modern browser (Chrome, Firefox, Edge)
- No server needed for basic functionality

---

## 📁 Project Structure

```
bus-booking/
├── index.html              # Home page — search form
├── css/
│   └── style.css           # All styles (dark theme)
├── js/
│   ├── app.js              # Home page logic
│   └── data.js             # Bus data + BookingStore (localStorage)
└── pages/
    ├── bus-list.html       # Search results with filters & sort
    ├── seat-selection.html # Interactive seat map + passenger form
    ├── confirmation.html   # Booking confirmation ticket
    └── my-bookings.html    # All bookings with cancel option
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 Search | Search buses by origin, destination, date & passengers |
| 🗺️ Popular Routes | One-click preset routes |
| 🚌 Bus Listing | 6 real buses with ratings, amenities, price, seats |
| 🔧 Filters | Filter by bus type, departure time, price range, amenities |
| 💺 Seat Selection | Interactive 40-seat bus layout with aisle gap |
| 👤 Passenger Info | Form for each passenger (name, age, gender) |
| 🎫 Confirmation Ticket | Beautiful ticket card with PNR |
| 📋 My Bookings | View all bookings, cancel, re-view ticket |
| 💾 Persistence | Bookings saved in `localStorage` — survive refresh |

---

## 🎨 Design

- **Theme**: Dark navy with orange accent (`#f97316`)
- **Fonts**: Syne (headings) + DM Sans (body) via Google Fonts
- **Responsive**: Works on mobile & desktop

---

## 🧪 Try This Flow

1. On the home page, type **Chennai** → **Bangalore**, pick a date, click **Search Buses**
2. Filter/sort the results, click **Select Seats →** on any bus
3. Click seats in the seat map until you've selected the right count
4. Fill passenger name, age, gender for each seat
5. Click **Proceed to Payment →**
6. View your confirmation ticket with PNR
7. Visit **My Bookings** to see all tickets and cancel if needed

---

## 🔧 Customization

- **Add more buses**: Edit the `BUS_DATA` array in `js/data.js`
- **Add more cities**: Add `<option>` tags in the `<datalist id="cities">` in `index.html`
- **Change colors**: Edit CSS variables at the top of `css/style.css`
