# DomeUI

Welcome to the **Dome** open source component React UI library.

## Explore the components in Storybook:

[Storybook](https://dome-ui.vercel.app/)

### How to use

Download the dependencies:

```sh
yarn add domeui-components

# or

npm install domeui-components
```

Use the component:

```js
import { Button } from "domeui-components";
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
https://github.com/Dome-UI/dome-ui.git
```

Enter the folder and download the dependencies
```sh
cd dome-ui

# after

yarn
```

### 2. Branch
Create a branch, where you can easily develop your component.
```sh
yarn checkout -b feat/ComponentName-component
```

### 3. Folder
Create a folder with the component name inside `./lib/components`.

### 4. Files
Inside `./lib/components/ComponentName`:

  - `index.tsx`
    - This file will contain your component developed in React.

  - `index.stories.js`
    - To render your component in Storybook, example:
    ```js
    // Import your component
    import { ComponentName } from '@lib/components/ComponentName';

    // Side menu name (Category)
    export default {
      title: "Components/ComponentName",
      component: ComponentName,
    }

    const Template = args => <ComponentName {...args} />

    // Variations within "Component name" (Create a new side submenu).
    export const Default = Template.bind({})

    // Properties of each variation
    Default.args = {
      label: "Default label example",
    }
    ```

  - `styles.ts`
    - Styling your component which is in `index.tsx`.

  - `theme.ts`
    - It will contain some default properties that your component will have, the result of which is a _Select_ in the Storybook, for example:
  ```js
  export const border = {
    none: "0",
    small: "4px",
    medium: "10px",
    full: "10000px",
  };
  ```

  - `types.ts`
    - Typing that will be used inside the `index.tsx` component and the `styles.ts` styling.

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
    <td align="center">
      <a href="https://github.com/Tonashiro">
        <img src="https://github.com/Tonashiro.png" width="100px;" alt="Photo of Vinicius Tonashiro on GitHub"/><br>
        <sub>
          <b>Vinicius Tonashiro</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
