# Design System Documentation: The Adaptive Obsidian

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Curator"**

This design system is engineered to feel less like a website and more like a high-performance extension of the macOS Monterey/Sonoma ecosystem. It rejects the "flat web" in favor of **Tonal Depth** and **Adaptive Geometry**. We move beyond standard layouts by embracing the "Dynamic Island" philosophy: elements are not static boxes; they are living, breathing containers that morph and expand. 

The aesthetic is defined by "Organic Brutalism"—using heavy, bold typography and deep blacks, softened by extreme corner radii and glassmorphism. By utilizing intentional asymmetry and overlapping "sheets" of content, we create a sense of high-tech sophistication that feels native to a power user's workflow.

---

## 2. Colors & Surface Philosophy

### The Palette
We utilize a high-contrast foundation with a specialized violet-blue accent core.

*   **Foundation:** `background` (#0e0e0e) and `surface` (#0e0e0e).
*   **Accents:** `primary` (#a5a5ff) for high-impact CTAs and `secondary` (#a790fe) for interactive states.
*   **Status:** `error` (#ff6e84) for critical feedback, used sparingly against dark surfaces.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are strictly prohibited for sectioning or containment. Boundaries must be defined through:
1.  **Background Shifts:** Placing a `surface-container-high` (#1f1f1f) element on a `surface` (#0e0e0e) background.
2.  **Tonal Transitions:** Using the `surface-container` tiers to imply hierarchy.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of frosted obsidian. 
*   **Level 0 (Base):** `surface-container-lowest` (#000000) for deep background sections.
*   **Level 1 (The Page):** `surface` (#0e0e0e) for the primary reading area.
*   **Level 2 (The Card):** `surface-container` (#191919) for content blocks.
*   **Level 3 (The Popover):** `surface-container-highest` (#262626) for elements closest to the user.

### The "Glass & Gradient" Rule
To achieve the premium macOS feel, floating utility elements (like top navigation or Notch-style overlays) must use **Glassmorphism**. Combine `surface-variant` (#262626) at 60% opacity with a `backdrop-blur` of 20px. 
*   **Signature Texture:** Use a subtle linear gradient from `primary` (#a5a5ff) to `primary-dim` (#6462ec) for primary buttons to give them a "liquid light" appearance.

---

## 3. Typography
We use **Inter** as our system-style typeface, mimicking the clarity of San Francisco.

*   **Display (lg/md):** Use for hero statements. These should be tight-tracked (-0.02em) and Bold. They represent the "Authoritative" voice of the app.
*   **Headline (lg/md/sm):** Used to introduce feature clusters. These drive the editorial rhythm.
*   **Title (lg/md/sm):** Specifically for card headers and functional labels.
*   **Body (lg/md):** Optimized for readability. Use `on-surface-variant` (#ababab) for secondary body text to reduce visual noise.
*   **Label (md/sm):** All-caps, tracked out (+0.05em) for technical metadata, utilizing `secondary` (#a790fe) color for a high-tech "HUD" feel.

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved by stacking. A `surface-container-high` element should never sit on a `surface-bright` element; it lacks "logic." Always move from dark (back) to light (front) to simulate natural light hitting a raised surface.

### Ambient Shadows
Shadows must feel like atmospheric light, not a "drop shadow" effect.
*   **Values:** Use a 40px to 60px blur with a 4% opacity.
*   **Color:** The shadow must be tinted with `on-primary-container` (#10007f) to create a "glow" rather than a "stain."

### The "Ghost Border" Fallback
If a boundary is required for accessibility (e.g., in input fields), use a **Ghost Border**: `outline-variant` (#484848) at **15% opacity**. This provides a guide for the eye without breaking the "No-Line" rule.

---

## 5. Components

### Buttons
*   **Primary:** Rounded `full` (9999px). Gradient background (`primary` to `primary-dim`). Text color: `on-primary-fixed` (#000000).
*   **Secondary:** Glass-style. Background: `surface-container-highest` at 40% opacity. Text color: `on-surface` (#ffffff).
*   **Interactive State:** On hover, increase brightness by 10% and scale to 1.02x to simulate the macOS "springy" feel.

### Input Fields
*   **Style:** Minimalist capsules. Use `surface-container-low` (#131313) as the base.
*   **Focus:** No heavy outline. Instead, shift the background to `surface-container-high` and add a subtle 2px "glow" using `primary`.

### Cards & Lists
*   **Rule:** Forbid divider lines.
*   **Execution:** Use `spacing-8` (2rem) of vertical white space to separate list items. If items must be grouped, use a subtle background shift to `surface-container-lowest` for the entire group, with items nested as `surface-container`.

### The "Dynamic Notch" (Special Component)
A signature element for this system. A floating, top-center element used for notifications or navigation.
*   **Corner Radius:** `xl` (1.5rem).
*   **Color:** `surface-container-highest` (#262626).
*   **Behavior:** Must appear to "grow" from the top of the viewport.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Asymmetry:** Let text align left while images or "Dynamic Island" elements sit off-center or overlap section boundaries.
*   **Use Generous Radii:** Use `xl` (1.5rem) for all main containers to match the hardware curvature of a MacBook.
*   **Respect the "Dark":** Ensure `on-surface-variant` (#ababab) is used for long-form text to prevent eye strain on deep black backgrounds.

### Don't:
*   **Don't use 100% white text for everything:** It creates "vibration" against deep black. Use `on-surface` (#ffffff) for headlines and `on-surface-variant` (#ababab) for body.
*   **Don't use "Web-Standard" Borders:** Never use a solid 1px line to separate the header from the body. Use a backdrop-blur or a tonal shift.
*   **Don't over-saturate:** Keep the `primary` accent restricted to CTAs and active states. The "Luxury" feel comes from the dominance of the obsidian surfaces.