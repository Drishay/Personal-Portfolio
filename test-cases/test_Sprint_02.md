# ✅ Test Case: Verify Navigation, Side Panel, and Scrollable Content

**Test Case ID:** TC_UI_002  
**Title:** Verify navigation tabs, side panel toggle, and scrollable main content  
**Sprint:** Sprint 2 - Navigation & Scrollable Content  
**Created By:** Your Name  
**Date:** 2025-08-07  
**Priority:** High  
**Precondition:** Sprint 2 changes implemented on top of Sprint 1; browser and dev tools ready  
**Test Environment:** Desktop browser (Chrome, Firefox)

---

## 🧪 Test Steps

| Step | Action                                                                                 |
|------|----------------------------------------------------------------------------------------|
| 1    | Open `index.html` in a browser                                                         |
| 2    | Verify that the top navigation bar includes `Home`, `About`, `Contact`, and `Projects` |
| 3    | Click on the toggle button to open the side panel (fast project switcher)              |
| 4    | Confirm that the side panel appears and overlaps or shifts layout correctly            |
| 5    | Scroll the main content area and ensure it scrolls independently                       |
| 6    | Observe if the footer is revealed after scrolling to the bottom of main content        |
| 7    | Check browser console for any JavaScript or CSS errors (optional)                      |
| 8    | Use dev tools to verify correct structure with `<nav>`, `<aside>`, and class names     |

---

## ✅ Expected Results

- Navigation bar displays all intended tabs.
- Side panel toggles open and close correctly on button click.
- Main content area is independently scrollable without affecting the layout.
- Footer only becomes visible when user scrolls to the bottom of the main content.
- Page layout remains intact and responsive at desktop width.
- Semantic tags (`<nav>`, `<aside>`, etc.) are used appropriately.
- No console or layout errors are present in dev tools.

---

## ❌ Postconditions / Bugs Found

- None (or list any bugs such as: side panel not toggling, scroll not functioning, layout broken, etc.)
