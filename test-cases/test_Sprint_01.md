
# ✅ Test Case: Verify Basic Page Structure

**Test Case ID:** TC_UI_001  
**Title:** Verify layout structure of portfolio homepage  
**Sprint:** Sprint 1 - Basic Structure  
**Created By:** Your Name  
**Date:** 2025-08-04  
**Priority:** High  
**Precondition:** Project is set up locally; index.html and styles.css exist  
**Test Environment:** Desktop browser (Chrome, Firefox)

---

## 🧪 Test Steps

| Step | Action                                                                           |
|------|----------------------------------------------------------------------------------|
| 1    | Open `index.html` in a browser                                                   |
| 2    | Check if the `<header>` contains a quote section and navigation bar              |
| 3    | Confirm the `<main>` is split into a left side panel and right main content area |
| 4    | Check if the `<footer>` is visible at the bottom                                 |
| 5    | Inspect with dev tools to verify correct class names and structure               |
| 6    | Confirm that `styles.css` is applied (background colors should be visible)       |
| 7    | Check responsiveness by resizing the window (optional for Sprint 1)              |

---

## ✅ Expected Results

- The header, navigation bar, main content, side panel, and footer are **all visible**.
- `.Side-Pannel` takes up ~5% of the width, `.Main-Content` ~95%.
- Background colors visually distinguish each section.
- No layout is broken on desktop view.
- No console errors in browser dev tools.

---

## ❌ Postconditions / Bugs Found

- None (or list any found during testing)
