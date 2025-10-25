This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧭 Additional Questions & Technical Notes

### 🧩 Front End Implementation

**1. Component Structure**  
The project uses a modular component hierarchy to ensure reusability and maintainability:
- **Layout components**: Header, Footer, Navigation.
- **Section components**: Hero, Experiences, Gallery, etc.
- **UI components**: Button, SectionTitle, Card, etc.  
Each layer serves a specific purpose, keeping the codebase organized and scalable.

**2. State Management**  
Local states (`useState`, `useEffect`) handle UI-level logic such as toggles or menus.  
For future scalability, global state can be managed using Zustand or React Context if data needs to persist across pages.  
The choice depends on scope — local for isolated UI logic, global for shared data.

**3. Responsive Strategy**  
Responsiveness is achieved primarily through **Tailwind CSS** responsive utilities (`sm:`, `md:`, `lg:`, `xl:`).  
CSS Grid and Flexbox are used to create fluid layouts.  
Images maintain proportions using `aspect-[ratio]`, ensuring visual consistency across devices.

**4. Performance Optimization**  
Optimizations implemented and planned:
- **Image Optimization** via Next.js `next/image` or compressed assets.  
- **Code Splitting** and lazy loading for non-critical components.  
- **Preloading** fonts and hero images for faster LCP.  
- **Static generation (SSG)** for faster page load and caching benefits.
  
---

### 🗂 Data Management

**5. Data Fetching**  
Data currently comes from local JSON under `/data`.  
Each JSON file is structured consistently with keys like `id`, `title`, `description`, and `images`.  
This design makes it scalable and easily replaceable by an API in the future.

**6. API Integration**  
A dedicated API service layer is defined in `/services/api.ts`.  
This handles data fetching, loading, and error states.  
Planned improvements include integrating with a Laravel Filament API using:
```ts
export const getSections = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sections`);
    return await res.json();
  } catch (error) {
    console.error('Failed to fetch sections:', error);
    return [];
  }
};
