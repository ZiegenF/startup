<<<<<<< HEAD
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
=======
# CS 260 Notes

This file represents what I have learned about web programming.

- [My startup](https://startup.cs260.click)
- [My simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

- Domains and how servers can run
- How to run an instance and create and instance
- Fixing an instance if its IP address fails

## HTML
- Every page needs DOCTYPE html, head, and body.
- header, main, and footer give each page a consistent structure.
- Links between pages use a href="page.html". The path is relative to the current file.
- Forms use label for="id> to connect a label to its input id="id".
- Images need the exact file path and name, including the extension, or they show as broken.
- Live Server auto-refreshes the browser every time I save.

## React

Interesting things I have learned about React
>>>>>>> d7b9ff35f0d03e473f4afd2cc630d0778d224b48

## React Phase 1 (Simon)

- Vite: `npm run dev` runs the app locally, `npm run build` makes the `dist` folder for deploying.
- React apps have one `index.html`. `index.jsx` loads `App` from `src/app.jsx`.
- `app.jsx` holds the header, footer, and router. Each page is its own component in `src/<page>/<page>.jsx`.
- Router: `NavLink to="play"` must match `Route path="/play"`.
- Porting a page: copy the `<main>` from the old HTML, change `class` to `className`, add `/>` to `img` and `input`, move the CSS into the component folder and import it.
- State: `const [x, setX] = React.useState(start)`. Calling `setX` redraws the page.
- My server is Amazon Linux, so deploy scripts need `ec2-user` instead of `ubuntu`.