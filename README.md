#Styles themes example

## Documentation
### Why is it necessary
A limited palette is what modern design requires.
This pattern allows you to switch the palette at runtime. Save the desired one in local storage.
All participants in the development know what color to take from the palette for each case.
Any module can be easily moved to other projects as uses the !default key in variables.
Any color can be quickly changed.
Random colors will not appear in the project

## Files

The color palette is saved in the _colors file

```
src/styles/_colors.scss
```
To change this file, you need a very good reason. Try to avoid adding a new color.
The palette is built from design. Usually this is a very limited number of colors.

Each component in the component folder must contain variables with all their colors
with flag !default

Example:

```
src/styles/components/header.scss
```

```
$header-back: #25333d !default;
$header-color: #E9ECEF !default;

.header {
  background: $header-back;
  color: $header-color;
  display: flex;
  padding: .2rem;
  height: 3rem;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
}

```

All variables from these files are copied to _variables
Each variable is assigned a variable from the palette from the src / styles / _colors.scss file

Example:

```
$header-back: $invert-main;
$header-color: $invert-typography-3;

$layout-back: $background-border-2;
$layout-color: $typography-2;

$team-info-back: $invert-main;
$team-info-color: $invert-typography-3;

$btn-primary-back: $button-info;
$btn-primary-border-color: $button-info;
$btn-primary-color: $invert-typography-4;

```

If you need to add a new variable to the palette. That will have to update ThemeInterface
and all files from the src / app / themes folder.
