# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `jsx-a11y/ariaUnsupportedElements`

### `0`

```

 lint/jsx-a11y/ariaUnsupportedElements/reject/1/file.tsx:1 lint/jsx-a11y/ariaUnsupportedElements ━━━

  ✖ Avoid the role attribute and aria-* attributes when using meta, html, script, and style
    elements.

    <meta charset='UTF-8' aria-hidden='false' />
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Using roles on elements that do not support them can cause issues with screen readers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
<meta charset="UTF-8" aria-hidden="false" />;

```

### `1`

```

 lint/jsx-a11y/ariaUnsupportedElements/reject/2/file.tsx:1 lint/jsx-a11y/ariaUnsupportedElements ━━━

  ✖ Avoid the role attribute and aria-* attributes when using meta, html, script, and style
    elements.

    <meta charset='UTF-8' role='meta' />
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Using roles on elements that do not support them can cause issues with screen readers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```
<meta charset="UTF-8" role="meta" />;

```

### `2`

```

 lint/jsx-a11y/ariaUnsupportedElements/reject/3/file.tsx:1 lint/jsx-a11y/ariaUnsupportedElements ━━━

  ✖ Avoid the role attribute and aria-* attributes when using meta, html, script, and style
    elements.

    <html aria-required='true' />
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Using roles on elements that do not support them can cause issues with screen readers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```
<html aria-required="true" />;

```

### `3`

```

 lint/jsx-a11y/ariaUnsupportedElements/reject/4/file.tsx:1 lint/jsx-a11y/ariaUnsupportedElements ━━━

  ✖ Avoid the role attribute and aria-* attributes when using meta, html, script, and style
    elements.

    <html role='html'></html>
    ^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Using roles on elements that do not support them can cause issues with screen readers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `3: formatted`

```
<html role="html">
</html>;

```

### `4`

```

 lint/jsx-a11y/ariaUnsupportedElements/reject/5/file.tsx:1 lint/jsx-a11y/ariaUnsupportedElements ━━━

  ✖ Avoid the role attribute and aria-* attributes when using meta, html, script, and style
    elements.

    <script aria-label='script'></script>
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Using roles on elements that do not support them can cause issues with screen readers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `4: formatted`

```
<script aria-label="script">
</script>;

```

### `5`

```

 lint/jsx-a11y/ariaUnsupportedElements/reject/6/file.tsx:1 lint/jsx-a11y/ariaUnsupportedElements ━━━

  ✖ Avoid the role attribute and aria-* attributes when using meta, html, script, and style
    elements.

    <script role='script'></script>
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Using roles on elements that do not support them can cause issues with screen readers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `5: formatted`

```
<script role="script">
</script>;

```

### `6`

```

 lint/jsx-a11y/ariaUnsupportedElements/reject/7/file.tsx:1 lint/jsx-a11y/ariaUnsupportedElements ━━━

  ✖ Avoid the role attribute and aria-* attributes when using meta, html, script, and style
    elements.

    <style aria-labelledby></style>
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Using roles on elements that do not support them can cause issues with screen readers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `6: formatted`

```
<style aria-labelledby={true}>
</style>;

```

### `7`

```

 lint/jsx-a11y/ariaUnsupportedElements/reject/8/file.tsx:1 lint/jsx-a11y/ariaUnsupportedElements ━━━

  ✖ Avoid the role attribute and aria-* attributes when using meta, html, script, and style
    elements.

    <style role='style'></style>
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Using roles on elements that do not support them can cause issues with screen readers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `7: formatted`

```
<style role="style">
</style>;

```

### `8`

```
✔ No known problems!

```

### `8: formatted`

```
<meta charset="UTF-8" />;

```

### `9`

```
✔ No known problems!

```

### `9: formatted`

```
<html maria="text">
</html>;

```

### `10`

```
✔ No known problems!

```

### `10: formatted`

```
<script>
</script>;

```

### `11`

```
✔ No known problems!

```

### `11: formatted`

```
<style parole={true}>
</style>;

```