 DevStack

## 🚀About The Project

DevStack is a web app where we can look at different technologies and make our own development stack. We can see details like category, difficulty and rating for each technology, then add the ones we like to our stack. I made the design simple so it is easy to pick the right tools for a project.

## 🛠️Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React Icons
- React Toastify
- Vite

## ✨ Features

- Every technology card shows its category, difficulty, rating and a short description.
- Click "Add to Stack" to add a technology to your stack. You can remove them one by one, or use "Remove All" to clear everything.
- The same technology cannot be added twice. Once it is added, the button is disabled.
- A small toast message shows at the bottom right when you add or remove something.
- The website works on mobile, tablet and desktop screens.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a way to write HTML-like code inside JavaScript. It makes it easy to see what a component looks like, so the code is easier to write and read. Without JSX, I would have to create every element using plain JavaScript, which is much harder.

---

### 2. What is the difference between props and state?

Props are data that a parent component sends to a child component. The child can only read them, it cannot change them.
State is data that lives inside a component and can change over time. When state changes, React updates the screen automatically.

In my project, `stack` is state (in `App.tsx`). The `tech` and `isAdded` values that go into `TechnologyCard` are props.

---

### 3. What does the `useState` hook do, and where did you use it?

`useState` lets a component keep data that can change. When the data changes, React shows the new value on the screen.

I used it in `App.tsx` to store the technologies the user has selected:

```tsx
const [stack, setStack] = useState<Technology[]>([]);
```

I also used it for `technologies`, `loading` and `error`, and in `Navbar` to open and close the mobile menu.

---

### 4. What does the `useEffect` hook do, and why did you need it?

`useEffect` runs some code after the component shows on the screen. It is often used to fetch data.

In `App.tsx`, I used it to load the technologies from `/data.json` when the page opens. The dependency array is empty (`[]`), so it runs only one time. If I fetched the data directly inside the component, it would fetch again on every render.

---
### 5. Why does every item in a `.map()` list need a unique `key`?

React uses the `key` to know which item is which in a list. When something is added, removed or changed, React updates only that item instead of the whole list. If keys are not unique, React can update the wrong item.

I used `key={tech.id}`. I did not use the index, because the index changes when an item is removed.

---

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different things on the screen based on a condition.

I used it in `Sidebar.tsx`. If the stack is empty, it shows "Your Stack is empty". Otherwise, it shows the list of selected technologies:

```tsx
{stack.length === 0 ? (
  <div>Your Stack is empty</div>
) : (
  <ul>{/* selected technologies */}</ul>
)}
```

---

### 7. How do you pass data from parent to child, and child to parent?

A parent sends data to a child using props. A child cannot send data directly to the parent. So the parent gives the child a function as a prop, and the child calls that function to send data back.

In my project, `App.tsx` has an `addStack` function, and it is passed down as a prop to `TechnologyCard`. When the button is clicked, the card calls `addStack(tech)`, and the `stack` state in the parent is updated.
