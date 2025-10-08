import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import * as yup from 'yup';

import { Accordions } from './common/Accordions';
import { useApp } from '../hooks/useApp';
import TextField from './elements/text-field/TextField';
import Form from './common/form';
import DraggableBox from './DraggableBox';

const ComponentEditor = ({ comp }) => {
  switch (comp.component) {
    case 'Image':
      return (
        <Box>
          <Typography variant="h6">Image</Typography>
          <Button>Delete</Button>
          <DraggableBox id={comp.id}>
            <Box>
              <Form
                initialValues={{
                  src: comp.props.src,
                  alt: comp.props.alt,
                  width: comp.props.width,
                  height: comp.props.height,
                }}
                validationSchema={{
                  src: yup.string().required('Image src is required'),
                  alt: yup.string().required('Image alt is required'),
                  width: yup.number().required('Image width is required'),
                  height: yup.number().required('Image height is required'),
                }}
                onSubmit={() => console.log('save')}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography variant="h6">Image Options</Typography>
                  <TextField
                    name="src"
                    label="Image src"
                    placeholder="src"
                  />
                  <TextField
                    name="alt"
                    label="Image Alt Text"
                    placeholder="alt"
                  />
                  <TextField
                    name="width"
                    placeholder="width"
                    label="Image Width"
                  />
                  <TextField
                    name="height"
                    label="Image Height"
                    placeholder="height"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    color="success"
                  >
                    Save
                  </Button>
                </Box>
              </Form>
            </Box>
          </DraggableBox>
        </Box>
      );
    case 'Box':
    default:
      return (
        <Box>
          <Typography variant="h6">Props</Typography>
          <Typography variant="body1">
            {JSON.stringify(comp.props, false, 2)}
          </Typography>
          <Typography variant="h6">Content</Typography>
          <Typography variant="body1">
            {JSON.stringify(comp.content, false, 2)}
          </Typography>
        </Box>
      );
  }
};

const ComponentAccordion = ({ activeSections }) => {
  const createComponentItems = (sections) => {
    return sections.map((comp, index) => ({
      title: comp.component,
      content: comp.children ? (
        <Accordions items={createComponentItems(comp.children)} />
      ) : (
        <ComponentEditor comp={comp} id={`${comp.component}-${index}`} />
      ),
    }));
  };

  const components = createComponentItems(activeSections);
  return (
    <Box sx={{ height: 'calc(100vh - 120px)', overflow: 'hidden' }}>
      <Box
        sx={(theme) => ({
          overflowY: 'auto',
          height: '100%',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: theme.palette.background.paper,
          },
          '&::-webkit-scrollbar-thumb': {
            background: theme.palette.divider,
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: theme.palette.divider,
          },
        })}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
          <Typography>Page Wizard</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
            <Accordions
              items={[
                {
                  title: 'Layout',
                  content: (
                    <Accordions
                      items={[
                        {
                          title: 'Box',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a box to the page.
                              </Typography>
                              <Typography variant="body2">
                                A box is a multi-purpose container for content.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Container',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a container to the page.
                              </Typography>
                              <Typography variant="body2">
                                A container is a main layout orientation
                                container for content.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Grid',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a grid to the page.
                              </Typography>
                              <Typography variant="body2">
                                A grid is a flexible layout container for
                                content.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Stack',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a stack to the page.
                              </Typography>
                              <Typography variant="body2">
                                A stack is a one-dimensional layout container
                                for content.
                              </Typography>
                            </Box>
                          ),
                        },
                      ]}
                    />
                  ),
                },
                {
                  title: 'Feedback',
                  content: (
                    <Accordions
                      items={[
                        {
                          title: 'Alert',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a alert to the page.
                              </Typography>
                              <Typography variant="body2">
                                An alert is a feedback component for content.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Confirm',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a confirm to the page.
                              </Typography>
                              <Typography variant="body2">
                                A confirm is a feedback component for content.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Styled Alert',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a styled alert to the page.
                              </Typography>
                              <Typography variant="body2">
                                A styled alert is a feedback component for
                                content.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Styled Confirm',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a styled confirm to the page.
                              </Typography>
                              <Typography variant="body2">
                                A styled confirm is a feedback component for
                                content.
                              </Typography>
                            </Box>
                          ),
                        },
                      ]}
                    />
                  ),
                },
                {
                  title: 'Icons',
                  content: (
                    <Accordions
                      items={[
                        {
                          title: 'Icon',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a icon to the page.
                              </Typography>
                              <Typography variant="body2">
                                An icon is a visual representation of content.
                              </Typography>
                            </Box>
                          ),
                        },
                      ]}
                    />
                  ),
                },
                {
                  title: 'Forms',
                  content: (
                    <Accordions
                      items={[
                        {
                          title: 'Form',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a form to the page.
                              </Typography>
                              <Typography variant="body2">
                                A form is a container for form elements.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Text Field',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a text field to the page.
                              </Typography>
                              <Typography variant="body2">
                                A text field is a form element for input.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Checkbox',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a checkbox to the page.
                              </Typography>
                              <Typography variant="body2">
                                A checkbox is a form element for input.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Radio',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a radio to the page.
                              </Typography>
                              <Typography variant="body2">
                                A radio is a form element for input.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Select',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a select to the page.
                              </Typography>
                              <Typography variant="body2">
                                A select is a form element for input.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Name Section',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a name section to the page.
                              </Typography>
                              <Typography variant="body2">
                                A name section is a form element for input.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Address Section',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a address section to the page.
                              </Typography>
                              <Typography variant="body2">
                                A address section is a form element for input.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Password Section',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a password section to the page.
                              </Typography>
                              <Typography variant="body2">
                                A password section is a form element for input.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Confirm Password Section',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a confirm password section to the page.
                              </Typography>
                              <Typography variant="body2">
                                A confirm password section is a form element for
                                input.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Password Reset Section',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a password reset section to the page.
                              </Typography>
                              <Typography variant="body2">
                                A password reset section is a form element for
                                input.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Email Section',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a email section to the page.
                              </Typography>
                              <Typography variant="body2">
                                A email section is a form element for input.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Phone Section',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a phone section to the page.
                              </Typography>
                              <Typography variant="body2">
                                A phone section is a form element for input.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Date Section',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a date section to the page.
                              </Typography>
                              <Typography variant="body2">
                                A date section is a form element for input.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Icon Button',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a icon button to the page.
                              </Typography>
                              <Typography variant="body2">
                                An icon button is a button with an icon.
                              </Typography>
                            </Box>
                          ),
                        },
                      ]}
                    />
                  ),
                },
                {
                  title: 'Components',
                  content: (
                    <Accordions
                      items={[
                        {
                          title: 'Breadcrumbs',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add breadcrumbs to the page.
                              </Typography>
                              <Typography variant="body2">
                                Breadcrumbs are a navigation component for
                                content.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Header',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a header to the page.
                              </Typography>
                              <Typography variant="body2">
                                A header is a navigation component for content.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Footer',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a footer to the page.
                              </Typography>
                              <Typography variant="body2">
                                A footer is a navigation component for content.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Content',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a content to the page.
                              </Typography>
                              <Typography variant="body2">
                                A content is a container for content.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Typography',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a typography to the page.
                              </Typography>
                              <Typography variant="body2">
                                A typography is a text component for content.
                              </Typography>
                            </Box>
                          ),
                        },
                        {
                          title: 'Image',
                          content: (
                            <Box padding={1}>
                              <Typography variant="body1">
                                Add a image to the page.
                              </Typography>
                              <Typography variant="body2">
                                An image is a visual component for content.
                              </Typography>
                            </Box>
                          ),
                        },
                      ]}
                    />
                  ),
                },
                {
                  title: 'Custom',
                  content: <Accordions items={[]} />,
                },
              ]}
            />
            <Accordions items={components} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const PageBuilder = ({
  values,
  dispatch,
  setEditMode,
  setPreviewMode,
  setActiveSections,
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6">Page Builder</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button onClick={() => setActiveSections([])}>Clear</Button>
            <Button
              onClick={() =>
                dispatch({ type: 'SET_PREVIEW_MODE', payload: true })
              }
            >
              Publish
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
              <Button onClick={() => setEditMode(!values.editMode)}>
                Toggle Edit
              </Button>
              <Button onClick={() => setPreviewMode(!values.previewMode)}>
                Preview
              </Button>
            </Box>
            <ComponentAccordion activeSections={values.activeSections} />
          </Box>
        </Box>
        <Box sx={{ flex: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {values.renderSections}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PageBuilder;
