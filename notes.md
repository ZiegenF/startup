 'I love web programming'
# CS 260 Notes

This file represents what I have learned about web programming.

- [My startup](https://startup.cs260.click)
- [My simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

Interesting things I have learned about AWS

## HTML

Interesting things I have learned about HTML

## React

Interesting things I have learned about React

## React Phase 1 (Simon)

- Vite: `npm run dev` runs the app locally, `npm run build` makes the `dist` folder for deploying.
- React apps have one `index.html`. `index.jsx` loads `App` from `src/app.jsx`.
- `app.jsx` holds the header, footer, and router. Each page is its own component in `src/<page>/<page>.jsx`.
- Router: `NavLink to="play"` must match `Route path="/play"`.
- Porting a page: copy the `<main>` from the old HTML, change `class` to `className`, add `/>` to `img` and `input`, move the CSS into the component folder and import it.
- State: `const [x, setX] = React.useState(start)`. Calling `setX` redraws the page.
- My server is Amazon Linux, so deploy scripts need `ec2-user` instead of `ubuntu`.