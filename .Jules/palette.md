## 2024-05-23 - React DatePicker Accessibility Limitations
**Learning:** `react-datepicker` component strips direct `aria-label` props from the underlying input element, making it inaccessible to screen readers if used without a visible label.
**Action:** Always use an external `<label>` with `htmlFor` linked to the `id` of the datepicker, or use `aria-labelledby`. If a visual label isn't desired, use `sr-only` class on the label element. Do not rely on `aria-label` prop on the component itself.
