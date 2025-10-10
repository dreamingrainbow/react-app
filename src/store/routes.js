import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    routes: [
      {
        path: '/',
        config: {
          editMode: true,
          previewMode: false,
          published: false,
          error: null,
          loading: false,
          activeSections: [
            {
              component: 'Box',
              props: {
                sx: {
                  width: '100%',
                  height: '100vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              },
              children: [
                {
                  component: 'Typography',
                  props: { color: 'primary' },
                  content: 'react-app',
                },
              ],
            },
          ],
          layout: 'Layout',
          component: 'Home',
          authRoute: false,
        },
      },
      {
        path: '*',
        config: {
          editMode: true,
          previewMode: false,
          published: false,
          error: null,
          loading: false,
          activeSections: [],
          layout: 'FullPageLayout',
          component: 'NotFound',
          authRoute: false,
        },
      },
  ],
};

const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    setRoutes: (state, action) => {
      state.routes = action.payload;
    },
  },
});

export const { setRoutes } = routesSlice.actions;

export const routesSelector = (state) => state.routes.routes;

export default routesSlice.reducer;
