import React from 'react';
import { ContentProvider } from '../../app/provider/ContentProvider';

const Page = () => {
  return (
    <ContentProvider
      config={{
        activeSections: [
          {
            component: 'Box',
            props: {
              sx: {
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              },
            },
            children: [
              {
                component: 'Typography',
                props: {},
              },
              {
                component: 'Typography',
                props: {},
                content: 'Hello World',
              },
            ],
          },
        ],
      }}
    />
  );
};

export default Page;
