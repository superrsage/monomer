# Monomer Design System

## Brand Identity
- Mission-driven, environmental tone
- Clean, modern, scientific yet approachable
- Conveys urgency about plastic crisis + hope through AI innovation

## Colors
- **Primary (Forest):** #1B4332 — headers, navbar, dark sections
- **Secondary (Sage):** #52796F — supporting elements, hover states
- **Accent (Earth):** #8B6914 — CTAs, highlights, emphasis
- **Background (Cream):** #F5F1EB — light section backgrounds
- **White:** #FFFFFF — card backgrounds, alternating sections
- **Dark:** #1a1a1a — body text

## Typography
- **Font Family:** Inter (sans-serif)
- **Headings:** Bold, tight tracking
  - H1 (Hero): 4xl–6xl, font-bold
  - H2 (Section): 3xl–4xl, font-bold
  - H3 (Card titles): xl–2xl, font-semibold
- **Body:** base–lg, font-normal, leading-relaxed
- **Stats/Numbers:** 3xl–5xl, font-bold

## Spacing
- Section padding: py-20 px-6
- Container: max-w-6xl mx-auto
- Card gap: gap-8
- Element spacing: space-y-6

## Components
- **Buttons:** Rounded-lg, px-8 py-3, font-semibold, transition hover
  - Primary: bg-earth text-white, hover:brightness
  - Secondary: border-2 border-white text-white, hover:bg-white/10
- **Cards:** Rounded-xl, p-8, shadow-lg, bg-white
- **Stat Cards:** Centered, large number on top, label below
- **Step Cards:** Number badge + title + description, vertical or horizontal layout

## Section Patterns
- Alternating backgrounds: white → cream → forest (dark) → white → cream
- Dark sections (forest bg) use white/cream text
- Each section: semantic <section> with id for anchor links

## Visual Style
- Generous whitespace
- Subtle gradients allowed on hero
- No heavy imagery — rely on typography, color blocks, and whitespace
- Icons: simple line icons if needed (Lucide or Heroicons style)
