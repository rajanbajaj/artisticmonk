# UI_UX.md — Modern UI/UX Rules for AI Coding Agents

> Drop this file in any project root. Reference it from AGENTS.md:
> "For any UI work, follow UI_UX.md."
> Project rules (AGENTS.md, existing design system) win over this file.

## 1. Before you build

- Look at the existing UI first. Match its colors, fonts, spacing and components.
- Reuse existing components. Do not build a second button, card or modal.
- If the project has no design system, pick one small set of choices (see section 3) and stick to it.
- Do the smallest change that solves the task. No redesigns unless asked.

## 2. Core principles

- **Clarity first.** One main action per screen. Make it obvious.
- **Simple and calm.** Remove anything that does not help the user.
- **Consistent.** Same thing looks and behaves the same everywhere.
- **Fast feeling.** Show something immediately. Use loading states, not blank screens.
- **Forgiving.** Confirm risky actions. Let users undo. Never lose their input.

## 3. Visual basics

- **Spacing:** use a fixed scale (4, 8, 12, 16, 24, 32, 48). No random pixel values.
- **Type:** one font family, max 2. Clear sizes for title, heading, body, small.
- **Color:** 1 main color, 1 accent, neutrals. Use color tokens/variables, never hardcode hex in components.
- **Contrast:** text must be readable (WCAG AA, 4.5:1 for body text).
- **Radius and shadow:** pick one style and reuse it.
- **Icons:** one icon set only.

## 4. Layout and responsive

- Design mobile first, then widen.
- Test at phone (~375px), tablet (~768px) and desktop (~1280px).
- Nothing may clip, overlap or scroll sideways by accident.
- Touch targets at least 44x44px.
- Keep line length readable (about 60–80 characters).

## 5. States (every screen needs all of these)

- Loading (skeleton or spinner)
- Empty (say what to do next)
- Error (say what went wrong and how to fix it, in plain words)
- Success (short, clear feedback)
- Disabled, hover, focus, active

## 6. Accessibility (not optional)

- Everything works with keyboard only. Visible focus ring.
- Use real HTML elements (`button`, `a`, `label`), not clickable `div`s.
- Every image has `alt` text. Every icon-only button has a label.
- Every form input has a visible label and error text.
- Respect `prefers-reduced-motion` and `prefers-color-scheme`.
- Do not use color alone to show meaning.

## 7. Light and dark mode

- Support both if the project supports themes.
- Use theme tokens, not fixed colors.
- Check every new screen in both modes.

## 8. Motion

- Subtle and short (150–250ms).
- Use motion to explain change, not to decorate.
- Turn it off for reduced-motion users.

## 9. Forms and content

- Short labels, plain language, no jargon.
- Buttons say what they do ("Save post", not "Submit").
- Validate as the user goes, show errors next to the field.
- Keep error messages kind and specific.

## 10. Performance

- Optimize images (right size, lazy load below the fold).
- Avoid layout shift: set image width/height.
- Do not add a heavy library for a small UI need.

## 11. Terminal / CLI UI (if the project is a terminal app)

- Show clear progress for long tasks.
- Color is a bonus, not the only signal. Works with `NO_COLOR`.
- Short output by default, `--verbose` for detail.
- Errors say what happened and what to try next.
- Support keyboard shortcuts and show them in help.
- Never print secrets.

## 12. Done checklist

Before saying a UI task is done, confirm:

- [ ] Matches existing style and reuses components
- [ ] Looks right at phone, tablet and desktop widths
- [ ] Loading, empty and error states exist
- [ ] Keyboard works, focus is visible, labels exist
- [ ] Light and dark mode both checked
- [ ] Contrast is good
- [ ] Lint, types and build pass
- [ ] You actually looked at the rendered result (screenshot or browser), not just a green build

## 13. Never do

- Never hardcode colors, spacing or fonts outside the design tokens.
- Never remove accessibility features to make something look cleaner.
- Never ship a UI change you have not looked at.
- Never add new dependencies for styling without a reason.
- Never inject raw HTML without sanitizing it.
