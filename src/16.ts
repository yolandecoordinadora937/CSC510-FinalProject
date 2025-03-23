import { app } from 'electron';
import * as React from 'react';

interface MyComponent {
  render(): JSX.Element;
}

class MyApp extends React.Component<MyComponent> {}

const root = document.getElementById('app')!;
root.appendChild(app.createApp()!);
