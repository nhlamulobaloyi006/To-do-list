# Todo App

A todo app built with vanilla JS — the way I wanted it. Users sign up with a username and email, then land on a personal dashboard where they can add, edit, complete, and delete tasks. Everything's saved to `localStorage`, so nothing gets lost on refresh.

🔗 **Live:** https://nb-todo.vercel.app/
📦 **Repo:** https://github.com/nhlamulobaloyi006/nb-todo-app.git

## ✨ Features

- 🔐 **Sign-up flow** — username + email with live validation
- 👤 **Personal dashboard** — shows your initial as a profile avatar
- ➕ **Add tasks** — button only appears when you actually type something
- ✏️ **Edit tasks** — click the pencil icon to edit in place
- 🗑️ **Delete tasks** — remove tasks you don't need
- ✔️ **Complete tasks** — mark as done, they fade out and move to the completed count
- 📊 **Live stats** — total tasks, remaining, completed
- 💾 **Persistent storage** — user + tasks saved to `localStorage`
- 📳 **Haptic feedback** — `navigator.vibrate()` on button presses (works on mobile)
- ⚡ **Enter to add** — no mouse needed
- 📱 **Responsive layout**

## 🧠 How It Works

1. **Welcome screen** — user enters username (min 5 chars) and a `@gmail.com` email
2. **Validation runs on every keystroke** — submit button stays disabled until both are valid
3. **On submit** — credentials save to `localStorage`, user is redirected to the dashboard
4. **Dashboard** — shows profile initial, task stats, and the task input
5. **Adding a task** — pushes to the `activities` array, saves to `localStorage`, re-renders
6. **Editing a task** — click pencil → input swaps to edit mode → click GO to save
7. **Completing a task** — click check → task fades out and moves to completed count
8. **Deleting a task** — click trash → removed instantly with confirmation message

## 📁 Project Structure

```
nb-todo-app/
├── index.html
├── styles.css
├── script.js      # imports, DOM refs, validation, helpers
├── main.js        # app logic, event listeners, rendering
├── icons/         # edit, delete, done SVGs
└── README.md
```

### What's in each file

**`script.js`** — the toolbox:
- DOM element references (exported)
- Validation functions (`validateUsername`, `validateEmail`, `validateInput`)
- UI helpers (`showDashboard`, `hideDashboard`, `userProfile`, `enableSubmitBtn`)
- Data mutation (`renderTaskBtn`)

**`main.js`** — the brain:
- State (`loginCredentials`, `activities`, `taskCompleted`)
- Reads/writes `localStorage`
- Renders the task list dynamically
- Wires up every event listener

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/nhlamulobaloyi006/nb-todo-app.git
cd nb-todo-app
```

### 2. Open it

Double-click `index.html`, or use a live server:

```bash
npx serve .
```

**Important:** because you're using ES modules (`import`/`export`), you **must** use a live server. Opening `index.html` directly with `file://` will throw CORS errors.

## 🛠️ Built With

- **HTML5** — semantic structure
- **CSS3** — Flexbox, custom class-based show/hide (`.enable` / `.disable`)
- **Vanilla JavaScript** — ES modules, Promises, DOM manipulation, localStorage
- **SVG icons** — edit, delete, done

## 💾 LocalStorage Keys

| Key | Holds |
|-----|-------|
| `loginCredentials` | Array of user objects `{ username, email }` |
| `activities` | Array of task strings |
| `taskCompleted` | Array of completed task markers |

To reset the app, open DevTools → Application → Local Storage → clear those keys.

## 🎨 Customization

### Change the email rule

Right now it only accepts `@gmail.com`. To accept any valid email, tweak `validateEmail()` in `script.js`:

```js
email.value.trim().includes("@") // instead of "@gmail.com"
```

### Change the minimum username length

In `validateUsername()`:

```js
username.value.trim().length < 5  // change 5 to whatever
```

### Turn off vibration

Every button has `navigator.vibrate(200)`. Remove those lines if you don't want haptics.

## 🗺️ Possible Improvements

- [ ] Dark / light theme toggle
- [ ] Due dates and priorities for tasks
- [ ] Categories or tags
- [ ] Drag to reorder
- [ ] Multiple user accounts (currently only stores the first)
- [ ] Logout button
- [ ] Filter view — All / Active / Completed
- [ ] Undo delete
- [ ] Connect to a real backend for cross-device sync

## 📜 License

MIT — do whatever you want with it.

---

**Made with ❤ and vanilla JS by Nhlamulo Baloyi**
