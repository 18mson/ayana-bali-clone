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

## Additional Questions & Technical Notes

### Front End Implementation

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

### Data Management

**5. Data Fetching**  
Data is currently sourced from the local JSON file under `/data`.  
Each JSON file is structured consistently with keys like `id`, `title`, `description`, and `images`.  
This design makes it scalable and easily replaceable by an API in the future.

**6. API Integration**  
A dedicated API service layer is defined in `/services/api.ts`.  
This handles data fetching, loading, and error states.  
Planned improvements include integrating with a Laravel Filament API using:
``` ts
export const getSections = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sections`);
    return await res.json();
  } catch (error) {
    console.error('Failed to fetch sections:', error);
    return [];
  }
};
```
This pattern ensures scalability, clean error handling, and caching support (SWR/React Query).

**7. Content Structure** 
Content types, such as rooms, experiences, and dining, are modular and follow consistent data schemas.
This allows the same component logic to render multiple content types dynamically.

---

## Deployment & Infrastructure

**8. Vercel Deployment**  
The project is deployed on **Vercel**, taking advantage of its automatic CI/CD and global CDN for optimal performance.  
Configuration highlights:
- Automatic build and deploy from the main branch on GitHub.  
- CDN-based image optimization through Vercel’s native handling.  
- Optional `vercel.json` can be used for caching headers, rewrites, or redirects.  
- Environment variables are securely managed via the Vercel dashboard.

**9. Environment Setup**  
The environment setup ensures smooth transitions between development and production:
```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:8000/api

# .env.production
NEXT_PUBLIC_API_URL=https://api.ayana-clone.com/api
```
**10. Asset Optimization**
Images: Compressed before deployment and served from /public or via CDN.
Fonts: Preloaded using <link rel="preload"> for faster first render.
Static assets: Cached aggressively with immutable headers for better Lighthouse performance.
Lazy loading: Applied to non-critical sections and images to improve page speed and initial render time.

---

## CMS Integration (Bonus Points)

**11. API Design (Laravel Filament)**
If Laravel Filament is implemented, the API would follow RESTful principles with endpoints such as:

GET /api/sections — Fetch all sections dynamically.

GET /api/rooms/:id — Fetch individual room details.

GET /api/galleries — Retrieve image galleries.

Each endpoint returns normalized JSON data formatted for the frontend, ensuring easy mapping to components.

**12. Content Modeling**
A flexible database schema is designed to support dynamic sections and modular content:
| Table | Columns |
|--------|----------|
| **sections** | id, slug, title, description, order |
| **media** | id, section_id, url, alt_text, type |
| **categories** | id, name, slug |
| **pages** | id, name, route, meta_title, meta_description |

This design allows the CMS to handle any page (Rooms, Dining, Experiences) dynamically without changing frontend code.

**13. Admin UX**  
Laravel Filament would serve as a lightweight CMS interface for non-technical users.  
Proposed admin features:
- **CRUD Management:** Create, edit, reorder, and delete sections.  
- **Drag-and-Drop Ordering:** Easily rearrange content blocks.  
- **Media Uploads:** Direct image uploads with previews and auto-optimization.  
- **Role-Based Access:** Different permissions for admin, editor, and viewer roles.  
- **Live Preview (Optional):** View frontend layout updates in real time for a better editorial experience.

These features aim to make content management **intuitive**, **efficient**, and **editor-friendly**, aligning with modern CMS usability standards.

**Future Plan:**  
Integrating Laravel Filament would bridge the frontend with a real backend, enabling:
- Full API-driven dynamic content rendering.  
- Editable homepage and resort sections without code changes.  
- Better scalability for multilingual or multi-location resorts (e.g., Bali, Jakarta, Labuan Bajo).

---

## Best Practices

**14. Code Organization**

The project follows a modular, scalable structure for easier collaboration and maintainability:

app/          # Next.js routing and pages
components/   # Reusable UI and section components
data/         # Local JSON content for static data
services/     # API integration and data fetching logic
styles/       # Tailwind global styles and configuration
public/       # Static assets (images, icons, etc.)


This structure simplifies onboarding and future feature development.

**15. Error Handling**

Error handling is implemented at multiple levels to ensure a graceful user experience:
Network errors: Caught with try/catch blocks inside API services, with console logging and fallback returns.
Data errors: Components handle empty or malformed data gracefully with placeholder content.
UI errors: Error boundaries can be implemented to catch render errors and show fallback UIs instead of crashing.
This approach ensures stability even under unreliable network or API conditions.
