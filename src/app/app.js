import classes from './app.module.scss';

export const App = () => {
  const app = document.createElement('div');
  app.className = classes.app;

  return app;
};
