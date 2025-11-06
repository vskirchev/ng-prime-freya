# Invexa

This project is based on the **[PrimeNG Freya Theme](https://freya.primeng.org/)** — a premium Angular UI theme by PrimeTek.  
We’ve adapted it into a **clean starter template** for building scalable, feature-based Angular applications.

---

## 🧱 Project Overview

The Freya NG theme was downloaded as a base UI template.  
All original demo components were removed, except one kept as a **reference** for future development.

This repository serves as our **internal starter** for future Angular projects using the Freya design system.  
The goal is to **reuse** and **transform** any Freya UI component on demand while maintaining a clean, modular architecture.

---

## 🗂️ Project Structure

We follow a **feature-based folder structure** for scalability and maintainability.

```
src/
└── app/
    ├── core/               # Global and shared logic
    │   ├── interceptors/   # HTTP interceptors (e.g., auth, logging)
    │   ├── layout/         # Layout components (header, sidebar, etc.)
    │   ├── services/       # Global/shared services
    │   ├── directives/     # Common directives
    │   └── core.module.ts  # Core Angular module
    ├── features/           # Feature-specific modules and components
    ├── app.config.ts
    └── app.component.ts
```

> 🧩 Unlike traditional Angular setups, we do **not use a `shared/` folder**.  
> All reusable logic lives in the `core/` folder to promote a single source of truth for shared functionality.

---

## ⚡ State Management — NgRx Signal Store

This project uses **[NgRx Signal Store](https://ngrx.io/guide/signals/signal-store)** for reactive state management.

### 🧠 Concept Overview

NgRx Signal Store is a lightweight store built on Angular **signals**, combining the simplicity of signals with the structure of NgRx.

**Key Concepts:**
- **Stores as reactive classes** — each store exposes signals and computed values directly.  
- **State immutability** — updates are made through `patchState()`, ensuring predictable state changes.  
- **No boilerplate** — no reducers, actions, or effects files.  
- **Angular-native reactivity** — integrates seamlessly with components using the `inject()` API.

**Example:**
```ts
import { signalStore, patchState, withState } from '@ngrx/signals';

interface TodoState {
  todos: string[];
}

const initialState: TodoState = {
  todos: []
};

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  (store) => ({
    add(todo: string) {
      patchState(store, { todos: [...store.todos(), todo] });
    },
  })
);
```

**Learn more:**  
👉 [NgRx Signal Store Documentation](https://ngrx.io/guide/signals/store)

---

## 🧑‍💻 Development

Start a local development server:

```bash
ng serve
```

Open your browser at [http://localhost:4200](http://localhost:4200).  
The app will automatically reload when you modify any source file.

---

## 🧰 Common Commands

### Generate new components or features
```bash
ng generate component component-name
```

### Build the project
```bash
ng build
```

### Run tests
```bash
ng test
```

---

## 🧭 Future Plans

- Gradually reintroduce Freya UI components as reusable modules.  
- Maintain consistent theming and layout standards across future projects.  
- Integrate common core utilities (auth, API services, layout framework).

---

## 📚 Additional Resources

- [Angular CLI Overview](https://angular.dev/tools/cli)  
- [PrimeNG Documentation](https://primefaces.org/primeng)  
- [NgRx Signal Store](https://ngrx.io/guide/signals/store)
