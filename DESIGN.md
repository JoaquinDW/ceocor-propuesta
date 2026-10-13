---
name: CEOCOR
description: Editorial humano para Centro Odontológico Corrientes
colors:
  paper: "#f6f5f0"
  ink: "#183f39"
  green: "#174a43"
  green-dark: "#143c36"
  muted: "#526158"
  line: "#d8ddd2"
  sage: "#dde4d6"
  lime: "#d6e99b"
  white: "#fffef9"
  focus: "#729854"
  on-green-muted: "#d0e2d6"
  on-green-line: "#52776b"
  field-line: "#94a88f"
  placeholder: "#596a5b"
  sage-outline: "#b7c6b1"
  mobile-form-line: "#b5c3ae"
  caption-ink: "#3e4940"
  caption-paper: "rgba(246,245,240,.85)"
  visit-caption-paper: "rgba(246,245,240,.9)"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(66px, 6.6vw, 94px)"
    fontWeight: 600
    lineHeight: 1.07
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(38px, 3.6vw, 52px)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-.04em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "23px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-.025em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "11px"
    fontWeight: 600
  button:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
  emphasis:
    fontFamily: "Playfair, Georgia, serif"
    fontWeight: 500
rounded:
  caption: "2px"
  image-note: "3px"
  aside: "4px"
  button: "5px"
  circle: "50%"
  field: "0"
  portrait: "3px 130px 3px 3px"
spacing:
  label-gap: "7px"
  brand-gap: "8px"
  icon-gap: "15px"
  text-link-gap: "17px"
  field-gap: "23px"
  button-gap: "28px"
  section-gap: "30px"
  split-gap: "70px"
  broad-gap: "90px"
  wide-gap: "130px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "14px 23px"
  button-primary-hover:
    backgroundColor: "{colors.green-dark}"
    textColor: "{colors.paper}"
  button-outline:
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "14px 23px"
  button-outline-hover:
    backgroundColor: "{colors.green}"
    textColor: "{colors.paper}"
  text-link:
    textColor: "{colors.ink}"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "9px 0 13px"
    width: "100%"
  navigation:
    textColor: "{colors.ink}"
  treatment-disclosure:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "27px 0"
  treatment-aside:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.ink}"
    rounded: "{rounded.aside}"
    padding: "38px 43px"
  portrait-note:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.image-note}"
    padding: "18px 30px 18px 18px"
  smile-seal:
    backgroundColor: "{colors.green}"
    textColor: "{colors.lime}"
    rounded: "{rounded.circle}"
    size: "112px"
---

# Design System: CEOCOR

## Overview

**Creative North Star: "Editorial humano"**

Editorial humano: warm paper, deep green and a natural smile create a calm, personal expression of odontological care. Broad asymmetric splits and generous section rhythm support clear reading; thin rules and tonal surfaces organize the page.

This captures the implemented proposal in dist/styles.css and dist/index.html, guided by DIRECTION.md and PRODUCT.md. The user delegated design through “hazlo”; the atmosphere and token names below describe the implementation, rather than individually approved stylistic decisions.

**Key Characteristics:**

- Warm paper, sage and deep green tonal surfaces.
- Manrope headings, DM Sans reading text and Playfair italic emphasis.
- A softened portrait corner, circular smile seal and overlapping clinical/human note.
- Native disclosures, visible keyboard focus and restrained motion.

## Colors

The palette pairs a recognizable teal-green identity with warm paper and quiet sage. Frontmatter values are normative; the sidecar’s synthesized tonal ramps are preview metadata, not additional production colors.

### Primary

- **Deep teal-green** (`green`): primary actions, logo, smile seal and philosophy surface; `green-dark` is the primary hover state.
- **Lime** (`lime`): selective emphasis on the deep green surface, seal lettering and selection highlight.

### Neutral

- **Warm paper** (`paper`): page background and text on green.
- **Green ink** (`ink`): headings and primary text; **muted green** (`muted`): reading support and secondary information.
- **Soft sage** (`sage`): treatment aside, contact surface and circular note icon.
- **Warm white** (`white`): primary button text and portrait-note surface.
- **Quiet line** (`line`): section rules, disclosure borders and separators.
- Supporting tokens retain actual field, caption, on-green, focus and sage-outline colors. Keep their context-specific assignments; they are not new accents.

## Typography

**Display Font:** Manrope, sans-serif. **Body Font:** DM Sans, sans-serif. **Emphasis Font:** Playfair, Georgia, serif, italic at weight 500.

All three families load from local TTF assets with `font-display: swap`. Manrope regular serves weight 400; its bold face is declared for 600–800. DM Sans is declared at 400. Playfair is the selective italic voice; it is not the body family.

- **Display:** hero headline uses the frontmatter clamp, tight tracking and 1.07 line height. Its italic word has 1.12 line height and -.03em tracking.
- **Headline:** base section headings use the frontmatter clamp; individual sections have source-specific overrides (philosophy 52px, visit 45px, FAQ 36px and contact 57px).
- **Title:** treatment summaries use 23px, weight 600 and 1.4 line height; principle headings use 20px.
- **Body:** global base is 16px/1.6. Reading blocks use 13–17px with 1.7–1.8 line height where specified; desktop hero description is capped at 375px.
- **Label:** field labels are 11px/600; navigation is 13px/600. Final legibility overrides retain 11px captions and fine print. Mobile inputs become 16px at 600px.

## Layout

The shared shell is `min(1280px, calc(100% - 112px))`. Width becomes `calc(100% - 72px)` at 1100px, `calc(100% - 48px)` at 800px and `calc(100% - 40px)` at 600px. These provide 56, 36, 24 and 20px outer gutters respectively when the max width does not bind.

Desktop hero is a 1:1 split with 70px gap. Treatment content is 1.35:1; philosophy and visit are 1.1:1; contact is 1.15:1. Content stays intentionally asymmetric rather than normalizing all sections to cards. Desktop section padding ranges from 80 to 112px; section-specific compact values remain in CSS.

At 800px the navigation becomes an absolute dropdown controlled by the menu button; the content retains two columns. At 600px the hero, treatment, philosophy, visit, FAQ and contact sections stack. The portrait shifts from 610px fixed height to a 4:4.4 ratio. The footer resolves to one column through the final override. At 360px the header CTA hides and hero actions stack. At 1600px the portrait grows to 660px and hero display becomes 96px.

## Elevation & Depth

Depth comes mainly from alternating paper, sage and green, hairline separators and overlapping editorial objects. The sole component shadow is the portrait note: `0 14px 30px rgba(19,55,39,.09)`. The smile seal and portrait note overlap the image; most surfaces and disclosure rows remain flat.

## Shapes

Buttons use 5px corners, the aside 4px, the portrait note and ordinary image 3px, and the hero caption 2px. Form fields remain square with only a bottom border. Circular geometry is reserved for the note icon, disclosure toggle, smile seal and contact dot.

The signature portrait has `3px 130px 3px 3px` corners; its top-right radius becomes 90px at 800px and 100px at 600px. This exception gives the large image its silhouette without making every component heavily rounded. Icons use thin strokes, round caps and round joins.

## Components

### Buttons and text links

Primary buttons use green/warm-white, 14px 23px padding, 54px minimum height and a 28px icon gap. Hover uses dark green with paper text; active translates 2px downward. Outline buttons retain a 1px green border and fill green on hover. Header and hero variants have smaller sizes in CSS. Text links use Manrope 600 with 17px gap; hover underlines and shifts the arrow by `(3px, -3px)`.

Interactive links, buttons and summaries use a 3px focus outline with 5px offset in `focus`. Fields use 2px with 3px offset. Do not suppress the outline.

### Navigation

Desktop links are horizontal with an underline that scales in on hover. The mobile menu button appears at 800px, exposes `aria-controls` and synchronized `aria-expanded`/accessible label, and transforms two lines into a cross. The dropdown uses paper with a bottom rule, 25px 24px 32px padding and 16px text. Selecting a link closes it; Escape closes it and returns focus to the menu button. Resizing above 800px closes the menu.

### Disclosures

Treatments are native `details/summary` rows separated by 1px rules. Opening a row fills its 32px circular toggle green and rotates the 17px plus 45 degrees. The first treatment starts open; named grouping and JavaScript maintain one open treatment. Content is padded `0 48px 25px 0` on desktop. Consultation links preselect the relevant service.

FAQ uses independent native disclosures, 14px summaries, 21px vertical padding and a rotating plus; multiple FAQ items can remain open. Keep semantic keyboard behavior and source-specific sizing.

### Aside, portrait note and seal

The sage aside is a flat, 4px-corner panel with a fine partial circular outline and thin tooth icon. The warm-white note pairs a 41px sage icon circle with a two-line Manrope caption. The green/lime smile seal is a decorative circular SVG, rotated 14 degrees; no continuous spin is implemented. Retain explicit illustrative-image captions.

### Contact fields and WhatsApp form

Inputs, select and textarea are transparent, full width and square, with a 1px `field-line` bottom border and `9px 0 13px` padding. Labels sit 7px above them; fields have 23px bottom separation. Placeholder color is `placeholder`; textarea has 70px minimum height and vertical resizing. Mobile controls use 16px text. The full-width submit button keeps the icon at the opposite edge.

The form uses native required/name validation plus a trimmed-name check. It prepares an encoded WhatsApp message with name, selected service and optional text, then opens WhatsApp. A polite live status and “Abrir WhatsApp” fallback link remain available. It does not transmit the message automatically. There is no custom disabled or error palette; retain native validation rather than documenting invented states.

### Motion

Portrait reveal animates `clip-path` from `inset(0 0 100% 0)` to `inset(0)` for 1.2s with `cubic-bezier(.16,1,.3,1)`. Button and menu state transitions use .25s; arrows and disclosure transforms use .3s. Smooth anchor scrolling has 32px scroll padding. `prefers-reduced-motion: reduce` switches scrolling to auto and disables every animation and transition, including pseudo-elements.

## Do's and Don'ts

### Do:

- Do preserve the local font assets and the three distinct font roles.
- Do reuse the green, paper and sage assignments and thin dividers.
- Do retain native details/summary, keyboard focus, semantic labels and reduced-motion behavior.
- Do label illustrative campaign and interior imagery.
- Do keep WhatsApp submission as message preparation; the visitor chooses when to send.

### Don't:

- Don’t add routine shadows to flat sections or disclosure rows.
- Don’t turn the exceptional portrait corner into the default component radius.
- Don’t replace editorial splits with repeated card grids.
- Don’t invent clinicians, patient outcomes, testimonials or clinical statistics.
- Don’t let new decorative motion bypass prefers-reduced-motion.
