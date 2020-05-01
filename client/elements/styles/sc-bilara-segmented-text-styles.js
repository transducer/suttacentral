import { html,css } from 'lit-element';
import '../styles/sc-font-styles.js'

export const commonStyles = css`
  :root{
    --sc-screen-sm: 600px;
    --sc-screen-md: 840px;
    --sc-screen-l: 960px;
    --sc-screen-xl: 1280px;

    --sc-size-xxs: 2px;
    --sc-size-xs: 4px;
    --sc-size-sm: 8px;
    --sc-size-md: 16px;
    --sc-size-md-larger: 24px;
    --sc-size-lg: 32px;
    --sc-size-xl: 48px;
    --sc-size-xxl: 64px;
  }

  nav{
    display: inline-block;
  }
  body {
    margin: 4em 0;
    background-color: var(--sc-primary-background-color);
    font-family: var(--sc-sans-font);
    color: var(--sc-primary-text-color);
  }
  main {
    display: flex;
    justify-content: center;
    margin: 2em 1em;
  }

  /* Anchor tooltips. */
  article {
    position: relative;
  }

  .text{
  font-family: var(--sc-serif-font);
}

p{
  font-size: var(--sc-skolar-font-size-md);
  line-height: 1.4em
}

p .text{
  
}

  header {
    text-align: center;
    margin: 2em 0;
    color: var(--sc-secondary-text-color);
  }

  header p span.text{
    margin: 0;
    font-variant-caps: all-small-caps;
    font-weight: normal;
    font-family: var(--sc-sans-font);
  }

  header p{
    margin: 0
  }

  header h1 {
    margin: 0;
    font-variant-caps: small-caps;
    font-weight: normal;
    font-size: 2.15rem;
    font-family: var(--sc-serif-font);
    font-variant-caps: small-caps;
    letter-spacing: var(--sc-caps-letter-spacing);
  }

  .evam  {
    font-variant-caps: small-caps;
  }

  .variant,
  .comment,
  a {
    display: inline-block;
    font-family: sans-serif;
    z-index: 10;
    box-sizing: border-box;
    color: var(--sc-secondary-text-color);
  }

  .variant,
  .comment {
    font-size: var( --sc-skolar-font-size-xs);
    padding: var(--sc-size-sm) var(--sc-size-md);
    border-radius: var(--sc-size-sm);
    background-color: var(--sc-secondary-background-color);
    line-height: 1.3
  }

  .variant:hover,
  .comment:hover{
    cursor: help;
  }

.reference  a {
    color: var(--sc-secondary-text-color);
    text-decoration: none;
    padding-right: var(--sc-size-xs);
    white-space: nowrap;
   font-feature-settings: "dnom";
  font-size: var(--sc-skolar-font-size-md);
  font-weight: 500;
  letter-spacing: -0.4px;
  font-variant-caps: normal;
  position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    line-height: 0.3;
  }

  .pts:before{
    content: "pts";
    font-variant-caps: all-small-caps;
     font-feature-settings: "ordn";
  }

  blockquote{
    margin: 0;
  }

  blockquote .text{
    margin-left: 2em;
  }

  /* Set shared styles for the tooltip, but don't show it. Specify classes, avoid unattributed attribute selector for performance.*/

  .comment[data-tooltip]::after,
  .variant[data-tooltip]::after {
    content: attr(data-tooltip);
    display: none;
    position: absolute;
    white-space: normal;
    width: 300px;
    left: 50%;
    margin-left: -150px;
    padding: var(--sc-size-sm) var(--sc-size-md);
    border-radius: var(--sc-size-sm);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    z-index: 10;
    box-sizing: border-box;
    background-color: var(--sc-secondary-background-color);
    color: var(--sc-secondary-text-color);
  }

  .comment[data-tooltip]::after {
    border-style: solid;
    border-width: 1px 1px 1px 4px;
    border-color: var(--sc-primary-accent-color);
  }

  .variant[data-tooltip]::after {
    border-style: solid;
    border-width: 1px 1px 1px 4px;
    border-color: var(--sc-secondary-accent-color);
  }

  .spanFocused {
    background-color: var(--sc-primary-color-light);
    color: var(--sc-paper-tooltip-color);
  }

  span, p, li {
    hanging-punctuation: first last;
  }
`;

export const plainStyles = html`
  <style>
    article {
      max-width: 720px;
    }

    .reference,
    .root {
      display: none;
    }

    /* Set styles for tooltip marker. First we hide the actual content. These settings ensure the beginning, i.e. the :before content, is visible and the rest is hidden. Height is important to maintain even line-height. */
    .comment,
    .variant {
      width: 10px;
      height: 1em;
      white-space: nowrap;
      background-color: inherit;
      padding: 0 6px 0 0;
      overflow: hidden;
      border: none;
    }

    /* Set asterisk as note marker, align it as superscript, and ensure the line-height is not affected. */
    .comment::before,
    .variant::before {
      content: "✱";
      color: var(--sc-primary-color);
      vertical-align: super;
      line-height: 1;
    }

    .comment[data-tooltip]:hover,
    .variant[data-tooltip]:hover{
      cursor: help;
    }

    /* Show the tooltip. Note that using this technique it is not possible to use transition on the display.*/
    .comment[data-tooltip]:hover::after,
    .variant[data-tooltip]:hover::after {
      display: block;
    }
  </style>
`;

export const plainPlusStyles = html`
  <style>
    .root {
      display: none;
    }

    /* Let min width be handled by media queries, max width according to the nested grid width.*/
    .segment {
      display: grid;
      grid-template-columns: 100px minmax(0, auto);
      grid-column-gap: var(--sc-size-lg);
    }

    .reference {
      grid-column: 1;
      grid-row: 1 / span 3;
    }

    .translation {
      grid-column: 2;
    }

    .translation {
      display: grid;
      grid-template-columns: minmax(240px, 720px) minmax(120px, 480px);
      grid-column-gap: var(--sc-size-lg);
      position: relative;
    }

    .text {
      grid-column: 1;
    }

    .comment {
      grid-column: 2;
      position: absolute;
      grid-row: 1;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }

    .comment {
      border-style: solid;
      border-width: 1px 1px 1px 4px;
      border-color: var(--sc-primary-accent-color);
    }

    /* click on notes to raise obscured note when they overlap. this should be replaced by JS  */
    .comment:active{
      z-index: 1000;
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    /* remove <br> tags to avoid unsighlty spaces in verses. */
    br {
      content: "";
    }

    @media only screen and (max-width: 600px) {
      .segment,
      .reference,
      .translation,
      .root {
        display: block;
      }

      .variant,
      .comment {
        display: table;
        position: relative;
        margin-top: var(--sc-size-sm);
      }

      .comment:active,
      .variant:active {
        z-index: 1;
        box-shadow: none;
      }
    }
  </style>
`;

export const sideBySideStyles = html`
  <style>
    .segment {
      display: grid;
      grid-template-columns: minmax(240px, 720px) minmax(240px, 720px);
      grid-column-gap: var(--sc-size-lg);
    }

    .reference {
      display: none;
    }

    .translation {
      grid-column: 1;
    }

    .root {
      grid-column: 2;
    }

    br {
      content: "";
    }

    /* Center the tooltip in the respective column */
    .translation,
    .root {
      position: relative
    }

    /* Set styles for tooltip marker. First we hide the actual content of the .comment tag. These settings ensure the beginning of .comment, i.e. the :before content, is visible and the rest is hidden. Height is important to maintain even line-height. */
    .comment,
    .variant {
      width: 10px;
      height: 1em;
      white-space: nowrap;
      background-color: inherit;
      padding: 0 5px 0 0;
      overflow: hidden;
    }

    /* Set asterisk as note marker, align it as superscript, and ensure the line-height is not affected. */
    .comment:before,
    .variant:before {
      content: "✱";
      color: var(--sc-primary-color);
      vertical-align: super;
      line-height: 1;
    }

    .comment[data-tooltip]:hover,
    .variant[data-tooltip]:hover {
      cursor: help;
    }

    /* Show the tooltip. Note that using this technique it is not possible to use transition on the display.*/
    .comment[data-tooltip]:hover::after,
    .variant[data-tooltip]:hover::after {
      display: block;
    }

    @media only screen and (max-width: 600px) {
      .segment,
      .translation,
      .root {
          display: block;
          position: relative;
      }
      .root .text {
          color: var(--sc-secondary-text-color);
      }
    }
  </style>
`;

export const sideBySidePlusStyles = html`
  <style>
    .segment {
      display: grid;
      grid-template-columns: 100px  minmax(0, auto) minmax(0, auto);
      grid-column-gap: var(--sc-size-lg);
      position: relative;
    }

    .reference {
      grid-column: 1;
      grid-row: 1 / span 3;
    }

    .translation{
      grid-column: 2;
    }

    .root{
      grid-column: 3;
    }

    .translation,
    .root {
      display: grid;
      grid-template-columns: minmax(240px, 720px) minmax(120px, 300px);
      grid-column-gap: var(--sc-size-lg);
      position: relative;
    }

    .text {
      grid-column: 1;
    }

    .comment,
    .variant {
      grid-column: 2;
      position: absolute;
      grid-row: 1;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    .variant {
      border-style: solid;
      border-width: 1px 1px 1px 4px;
      border-color: var(--sc-secondary-accent-color);
    }

    .comment {
      border-style: solid;
      border-width: 1px 1px 1px 4px;
      border-color: var(--sc-primary-accent-color);
    }

    .comment:active,
    .variant:active {
      z-index: 1000;
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    br {
      content: "";
    }

    blockquote {
      margin: 0;
    }

    @media only screen and (max-width: 1280px) {
      .translation,
      .root,
      .variant,
      .comment {
        display: table;
        position: relative;
        box-shadow: none;
        margin-top: var(--sc-size-sm);
      }

      .segment {
        grid-template-columns: minmax(240px, 720px) minmax(240px, 720px);
      }

      .reference {
        grid-column: 1 / span 2;
      }

      .translation{
        grid-column: 1;
      }

      .root{
        grid-column: 2;
      }

      .comment:active,
      .variant:active {
        z-index: 1;
        box-shadow: none;
      }
    }

    @media only screen and (max-width: 600px) {
      .segment,
      .reference,
      .translation,
      .root {
        display: block;
      }

      .variant,
      .comment {
        display: table;
        position: relative;
        box-shadow: none;
        margin-top: var(--sc-size-sm);
      }

      .comment:active,
      .variant:active {
        z-index: 1;
        box-shadow: none;
      }

      .root .text {
        color: var(--sc-secondary-text-color);
      }
    }
  </style>
`;

export const lineByLineStyles = html`
  <style>
    .segment {
      display: grid;
      grid-template-columns: minmax(200px, 720px);
    }

    .reference {
      display: none;
    }

    .translation {
      grid-column: 1;
    }

    .root {
      grid-column: 1;
    }

    .root .text {
      color: var(--sc-secondary-text-color);
    }

    br {
      content: "";
    }

    .comment,
    .variant {
      width: 10px;
      height: 1em;
      white-space: nowrap;
      background-color: inherit;
      padding: 0 5px 0 0;
      overflow: hidden;
    }

    /* Set asterisk as note marker, align it as superscript, and ensure the line-height is not affected. */
    .comment:before,
    .variant:before {
      content: "✱";
      color: var(--sc-primary-color);
      vertical-align: super;
      line-height: 1;
    }

    .comment[data-tooltip]:hover,
    .variant[data-tooltip]:hover {
      cursor: help;
    }

    /* Show the tooltip. Note that using this technique it is not possible to use transition on the display.*/
    .comment[data-tooltip]:hover::after,
    .variant[data-tooltip]:hover::after {
      display: block;
    }
    </style>
  `;

  export const lineByLinePlusStyles = html`
    <style>
    .segment {
      display: grid;
      grid-template-columns: 100px minmax(0, auto);
      grid-column-gap: var(--sc-size-lg);
    }

    .reference {
      grid-column: 1;
      grid-row: 1 / span 3;
    }

    .translation {
      grid-column: 2;
    }

    .root{
      grid-column: 2;
    }

    .root .text {
      color: var(--sc-secondary-text-color);
    }

    .translation,
    .root {
      display: grid;
      grid-template-columns: minmax(240px, 720px) minmax(120px, 480px);
      grid-column-gap: var(--sc-size-lg);
      position: relative;
    }

    .text {
      grid-column: 1;
    }

    .comment,
    .variant {
      grid-column: 2;
      position: absolute;
      grid-row: 1;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    .variant {
      border-style: solid;
      border-width: 1px 1px 1px 4px;
      border-color: var(--sc-secondary-accent-color);
    }

    .comment {
      border-style: solid;
      border-width: 1px 1px 1px 4px;
      border-color: var(--sc-primary-accent-color);
    }

    .comment:active,
    .variant:active {
      z-index: 1000;
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    br {
      content:"";
    }

    blockquote {
      margin: 0;
    }

    blockquote .text {
      margin-left: 2em;
    }

    @media only screen and (max-width: 840px) {
      .segment,
      .reference,
      .translation,
      .root {
        display: block;
      }

      .variant,
      .comment {
        display: table;
        position: relative;
        box-shadow: none;
        margin-top: var(--sc-size-sm);
      }

      .comment:active,
      .variant:active{
        z-index: 1;
        box-shadow: none;
      }
    }
  </style>
`;

export const allInlineReferenceStyles = html`
  <style>
    /* Set column width on article. Position: relative ensures that the tooltips anchor to <article> */
    article {
      max-width: 720px;
    }

    .variant,
    .root {
      display: none;
    }

    /* Set styles for tooltip marker. First we hide the actual content of the .comment tag. These settings ensure the beginning of .comment, i.e. the :before content, is visible and the rest is hidden. Height is important to maintain even line-height. */
    .comment,
    .variant {
      width: 10px;
      height: 1em;
      white-space: nowrap;
      background-color: inherit;
      padding: 0 5px 0 0;
      overflow: hidden;
    }

    /* Set asterisk as note marker, align it as superscript, and ensure the line-height is not affected. */
    .comment:before,
    .variant:before {
      content: "✱";
      color: red;
      vertical-align: super;
      line-height: 1;
    }

    .comment[data-tooltip]:hover,
    .variant[data-tooltip]:hover {
      cursor: help;
    }

    /* Show the tooltip. Note that using this technique it is not possible to use transition on the display.*/
    .comment[data-tooltip]:hover::after,
    .variant[data-tooltip]:hover::after {
      display: block;
    }
  </style>
`;

export const mainInlineReferenceStyles = html`
  <style>
    /* Set column width on article. Position: relative ensures that the tooltips anchor to <article> */
    article {
      max-width: 720px;
    }

    .variant,
    .root,
    a {
      display: none;
    }

    a:first-of-type {
      display: inline-block;
    }

    /* Set styles for tooltip marker. First we hide the actual content of the .comment tag. These settings ensure the beginning of .comment, i.e. the :before content, is visible and the rest is hidden. Height is important to maintain even line-height. */
    .comment,
    .variant {
      width: 10px;
      height: 1em;
      white-space: nowrap;
      background-color: inherit;
      padding: 0 5px 0 0;
      overflow: hidden;
    }

    /* Set asterisk as note marker, align it as superscript, and ensure the line-height is not affected. */
    .comment:before,
    .variant:before {
      content: "✱";
      color: red;
      vertical-align: super;
      line-height: 1;
    }

    .comment[data-tooltip]:hover,
    .variant[data-tooltip]:hover {
      cursor: help;
    }

    /* Show the tooltip. Note that using this technique it is not possible to use transition on the display.*/
    .comment[data-tooltip]:hover::after,
    .variant[data-tooltip]:hover::after {
      display: block;
    }
  </style>
`;