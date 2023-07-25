import { RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom';
import './App.scss';
import { HomeScr } from './screens/home-scr/home-scr';
import { createTheme, ThemeProvider } from '@mui/material';
import { ContactMe } from './screens/contact-me/contact-me';
import { WhatsNext } from './screens/whats-next/whats-next';
import { Error404 } from './screens/error-404/error-404';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const ErrorBoundary = () => {
  let error = useRouteError();
  console.error(error);
  return <Error404/>;
}

const router = createBrowserRouter([
  {
    path: "/contact-me",
    element: (<ContactMe/>),
  },
  {
    path: "/whats-next",
    element: (<WhatsNext/>),
  },
  {
    path: "/",
    element: (
      <HomeScr/>
    ),
    errorElement: <ErrorBoundary/>,
  }
]);

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
