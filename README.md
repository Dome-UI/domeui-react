# DomeUI

Welcome to the **Dome** open source component React UI library.

## Explore the components in Storybook:

[Storybook](https://dome-ui.github.io/domeui-react/)

### How to use

Download the dependencies:

```sh
yarn add domeui-react

# or

npm install domeui-react
```

Use the component:

```js
import { Button } from 'domeui-react'
```

Customize your component:

```js
<Button
  IconRight="ArrowRight"
  backgroundColor="#F6BE27"
  border="small"
  buttonSize="medium"
  color="#242424"
  label="Press me"
/>
```

# Want to contribute to the project?

Did you think of a component that doesn't exist yet? and want to risk creating one? follow step by step.

### 0. Fork

Fork the project in your private Github profile, this will automatically create an identical repository without your private repositories.

### 1. Git clone

Enter the repository and the project

```sh
https://github.com/Dome-UI/domeui-react.git
```

Enter the folder and download the dependencies

```sh
cd domeui-react

# after

yarn
```

### 2. Branch

Create a branch, where you can easily develop your component.

```sh
yarn checkout -b feat/ComponentName-component
```

### 3. Folder

Create a folder with the component name inside `./src/components`.

### 4. Files

Inside `./src/components/ComponentName`:

- `ComponentName.tsx`

  - This file will contain your component developed in React.

- `index.stories.mdx`

  - To render your component in Storybook, example:

  ```js
  import { ComponentName } from './ComponentName';

  <Meta
    title="Components/ComponentName"
    component={ComponentName}
    argTypes={{
      <!-- Your types -->
    }}
     parameters={{
      layout: 'centered',
    }}
  />

  ## Default

  <Canvas columns={2} withSource="open" withToolbar>
    <Story
      name="Default"
      args={{ ...Button.defaultProps, label: 'Button default' }}
    >
      {(args) => <Button {...args} />}
    </Story>
  </Canvas>

  <ArgsTable story="Default" />
  ```

- `styles.ts`

  - Styling your component which is in `ComponentName.tsx`.

- `theme.ts`
  - It will contain some default properties that your component will have, the result of which is a _Select_ in the Storybook, for example:

```js
export const border = {
  none: '0',
  small: '4px',
  medium: '10px',
  full: '10000px',
}
```

- `types.ts`
  - Typing that will be used inside the `index.tsx` component and the `styles.ts` styling.

- `index.ts`
  - Export your component
  ```js
    export * from './ComponentName'
  ```

### 5. Pull Request

After the beautiful and beautiful development of the component, open a **Pull request** and wait for the validation.

## Contributors

The following people made this project possible:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/EduardooPV">
        <img src="https://github.com/EduardooPV.png" width="100px;" alt="Photo of Luiz Eduardo on GitHub"/><br>
        <sub>
          <b>Luiz Eduardo</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
