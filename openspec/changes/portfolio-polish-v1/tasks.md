# Tasks: Portfolio Polish v1

## Phase 1: Content Cleanup

- [ ] 1.1 Replace TODO placeholders in `src/data/translations.ts` with real content or "Próximamente"/"Coming soon"
  - **Verify:** `grep -c "TODO" src/data/translations.ts` returns 0
  - **Commit:** `feat(content): replace TODO placeholders in translations`

## Phase 2: SEO & Dynamic Lang

- [ ] 2.1 Add `<title>`, viewport, favicon, theme-color, `<meta name="description">` to `index.html`
  - **Verify:** Lighthouse SEO audit shows title + description present
  - **Commit:** `feat(seo): add title, description, and viewport meta tags`
- [ ] 2.2 Add OG tags (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`) to `index.html`
  - **Verify:** Manual `<meta>` inspection shows all OG properties
  - **Commit:** `feat(seo): add Open Graph social meta tags`
- [ ] 2.3 Add `useEffect` in `src/context/LanguageContext.tsx` to sync `document.documentElement.lang` with state
  - **Verify:** `document.documentElement.lang` is `es` on load and switches to `en` on toggle
  - **Commit:** `feat(a11y): sync html lang attribute with language context`

## Phase 3: Structural Refactor

- [ ] 3.1 Create `src/sections/` and `git mv` Hero, SobreMi, Experiencia, Proyectos, Habilidades, Contacto from `src/components/`
  - **Verify:** `ls src/sections/` lists 6 files; git history preserved
  - **Commit:** `refactor(structure): move section components to src/sections`
- [ ] 3.2 Update imports in `src/pages/HomePage.tsx` to point to `../sections/`
  - **Verify:** `npm run build` and `npm run lint` exit 0 with no import errors
  - **Commit:** `refactor(structure): update HomePage imports for sections folder`

## Phase 4: Accessibility & Contact UX

- [ ] 4.1 Add skip-to-content link as first element in `src/App.tsx`; wrap routes in `<div id="main-content">`
  - **Verify:** Tab focus reveals link; clicking it moves focus to `#main-content`
  - **Commit:** `feat(a11y): add skip-to-content link and main-content target`
- [ ] 4.2 Disable submit in `src/sections/Contacto.tsx` (after move); add persistent read-only hint text
  - **Verify:** Submit button has `disabled`; hint visible in DOM; no network request on attempt
  - **Commit:** `feat(contact): make contact form read-only with user hint`

## Phase 5: Documentation

- [ ] 5.1 Rewrite `README.md` with title, stack, decisions, run instructions, deploy info, and author
  - **Verify:** File contains all required sections listed in spec R5
  - **Commit:** `docs(readme): write professional project documentation`

## Phase 6: Testing Infrastructure

- [ ] 6.1 Install devDependencies: vitest, @testing-library/react, @testing-library/jest-dom, @testing-library/user-event, jsdom, @vitest/coverage-v8
  - **Verify:** `npm ls vitest @testing-library/react jsdom` shows packages
  - **Commit:** `chore(deps): add vitest and testing-library devDependencies`
- [ ] 6.2 Create `vitest.config.ts` with jsdom environment, globals, coverage, and `src/setupTests.ts` import
  - **Verify:** `npm run test` executes without config errors
  - **Commit:** `test(config): add vitest config with jsdom and coverage`
- [ ] 6.3 Create `src/setupTests.ts` importing `@testing-library/jest-dom` and setting `MotionConfig reduceMotion="always"`
  - **Verify:** Tests run without Framer Motion animation warnings
  - **Commit:** `test(config): add test setup with jest-dom and motion reduction`
- [ ] 6.4 Add `test` script to `package.json`
  - **Verify:** `npm run test` is available and runs vitest
  - **Commit:** `chore(scripts): add npm test script for vitest`
- [ ] 6.5 Write unit test for `LanguageContext` lang toggle asserting `document.documentElement.lang` change
  - **Verify:** Test passes; covers S4.1 and S4.2
  - **Commit:** `test(context): add language toggle unit test`
- [ ] 6.6 Write integration test for `Contacto` asserting disabled submit and read-only hint
  - **Verify:** Test passes; covers S10.1 and S10.2
  - **Commit:** `test(contact): add contact form read-only integration test`
- [ ] 6.7 Write smoke test in `src/__tests__/smoke.test.tsx` rendering `<App />` and asserting nav + 6 sections
  - **Verify:** Test passes; `ls src/__tests__/` shows file; 3+ tests total pass
  - **Commit:** `test(smoke): add App render smoke test`

## Execution Order

1. Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6
2. Within Phase 2: 2.1 and 2.2 may run in parallel; 2.3 is independent
3. Within Phase 3: 3.1 must precede 3.2
4. Within Phase 6: 6.1 → 6.2 → 6.3 → 6.4 → 6.5 → 6.6 → 6.7 (infrastructure before tests)
