# Overview

This project is a web application built with React and Typescript that will allow users to compare their favorite pokemon

# Tools used

## [React](https://react.dev/learn)

React is a frontend framework that makes it easy(er) to add interactivity to static html websites. It is one of the most popular frontend frameworks and comparable to other frameworks such as Angular, or Svelte. It is helpful because it allows us to define UI components which can be re-used in any part of the project.

## [Vite](https://vite.dev/guide/)

Vite is a build tool that speed up the developer experience. It provides a development server that allows for hot module replacement (HMR) when devloping so any changes made to the frontend code will be reflected in real time. It also provides a build command that can be used to build our react code into optimized html, css, and javascript files so it can be used in production.

## [Tailwind CSS](https://tailwindcss.com/docs/styling-with-utility-classes)

Writing raw css is a pain in the butt and it can be hard to keep track of all the random class names you have to make to style stuff. Tailwind is essentially a bunch of sensible, compact css classes that can be added and composed to style any html element. Essentially each class does one thing and you can add a bunch of classes to an element to style it properly.

## [Shadcn-ui](https://ui.shadcn.com/docs)

Shadcn-ui is a collection of re-usable React components. Things like [buttons, dropdowns, and tabs](https://ui.shadcn.com/docs/components)  that would otherwise be a bit of a pain to code correctly and accessibly can now just be installed via a simple command. When you use the command line to add a component, it copies the component code into our project so we can have full control over the components looks and functionality if needed. When you add a component it comes pre-styled by default, and the global styles can also be edited to achieve a specific theme.

[tweakcn](https://tweakcn.com/editor/theme) seems like it would be super helpful website to help try out different themes.

# Helpful commands

Install necessary packages.
```
npm clean-install
```

Run the development server
```
npm run dev
```

Add a shadcn component to the project
```
npx shadcn@latest add <component>
```

# Developer Guidelines
1. In general, try and use the shadcn pre-built components as much as possible. This will save a lot of time.
2. When it comes to styling, do as much as you can by customizing the theme using css variables instead of adding tailwind css classes to an instance of the component. For example, if we want our buttons to be red, DO NOT add tailwind css to every button:
    ```JSX
    <Button className='bg-red-500'>Oof</Button>
    ```

    and instead modify the css variables in `index.css`

    ```css
    :root {
      /* other variables */
      --primary: red
      /* other variables */
    }

    :dark {
      /* other variables */
      --primary: red
      /* other variables */
    }
    ```

    and use the appropriate variant in the `Button` component. (Note the variant is not needed here since buttons should use the primary variant as default)

    ```JSX
    <Button variant='primary'>yay</Button>
    ```
