import React, { useReducer, useMemo } from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Stack,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Avatar,
  Link,
  Chip,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Divider,
} from '@mui/material';
import useAuth from '../hooks/useAuth';
import useChangeLanguage from '../hooks/useChangeLanguage';
import useDrawer from '../hooks/useDrawer';
import useModal from '../hooks/useModal';
import useSnackbar from '../hooks/useSnackbar';
import useSpeedDial from '../hooks/useSpeedDial';
import useTheme from '../hooks/useTheme';
import { useNavigate } from 'react-router-dom';

const Form = React.lazy(() => import('../components/common/form'));

const AddressSection = React.lazy(
  () => import('../components/forms/AddressSection')
);

const NameSection = React.lazy(() => import('../components/forms/NameSection'));

const PasswordResetSection = React.lazy(
  () => import('../components/forms/PasswordResetSection')
);

const TextField = React.lazy(
  () => import('../components/elements/text-field/TextField')
);

const AddressLine1TextField = React.lazy(
  () => import('../components/elements/text-field/AddressLine1TextField')
);

const AddressLine2TextField = React.lazy(
  () => import('../components/elements/text-field/AddressLine2TextField')
);

const EmailTextField = React.lazy(
  () => import('../components/elements/text-field/EmailTextField')
);

const PhoneTextField = React.lazy(
  () => import('../components/elements/text-field/PhoneTextField')
);

const TitleTextField = React.lazy(
  () => import('../components/elements/text-field/TitleTextField')
);

const FirstNameTextField = React.lazy(
  () => import('../components/elements/text-field/FirstNameTextField')
);

const MiddleNameTextField = React.lazy(
  () => import('../components/elements/text-field/MiddleNameTextField')
);

const LastNameTextField = React.lazy(
  () => import('../components/elements/text-field/LastNameTextField')
);

const PasswordTextField = React.lazy(
  () => import('../components/elements/text-field/PasswordTextField')
);

const ConfirmPasswordTextField = React.lazy(
  () => import('../components/elements/text-field/ConfirmPasswordTextField')
);

const ImageComponent = React.lazy(() => import('../components/common/image'));

const Drawer = React.lazy(() => import('../components/common/drawer'));

const Intro = React.lazy(() => import('../components/intro'));

const PageBuilder = React.lazy(() => import('../components/PageBuilder'));

const Layout = React.lazy(() => import('../layouts'));

const Home = React.lazy(() => import('../pages/home'));

const NotFound = React.lazy(() => import('../pages/not-found'));

const PayloadHandlers = {
  toggle: (v) => !v,
  set: (v) => v,
  filter: (items, filter, key) => items.filter((item) => item[key] !== filter),
};

export const ComponentLibrary = {
  Avatar,
  Header: ({ children }) => <>{children}</>,
  Breadcrumbs: ({ children }) => <>{children}</>,
  Chip,
  Divider,
  Form,
  AddressSection,
  NameSection,
  PasswordResetSection,
  TextField,
  AddressLine1TextField,
  AddressLine2TextField,
  EmailTextField,
  PhoneTextField,
  TitleTextField,
  FirstNameTextField,
  MiddleNameTextField,
  LastNameTextField,
  PasswordTextField,
  ConfirmPasswordTextField,
  Container,
  Typography,
  Card,
  CardContent,
  Link,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  Stack,
  Image: ImageComponent,
  Content: ({ children }) => <>{children}</>,
  Footer: ({ children }) => <>{children}</>,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Intro,
  PageBuilder,
  Layout,
  Home,
  NotFound,
};

export const useContentContext = (props) => {
  const _drawer = useDrawer();
  const _snackbar = useSnackbar();
  const _modal = useModal();
  const _speedDial = useSpeedDial();
  const _theme = useTheme();
  const _language = useChangeLanguage();
  const _auth = useAuth();
  const navigate = useNavigate();
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_LOADING':
        return {
          ...state,
          loading:
            typeof action.payload === 'function'
              ? action.payload(state.loading)
              : action.payload,
        };
      case 'SET_ERROR':
        return {
          ...state,
          error:
            typeof action.payload === 'function'
              ? action.payload(state.error)
              : action.payload,
        };
      case 'SET_EDIT_MODE':
        return {
          ...state,
          editMode:
            typeof action.payload === 'function'
              ? action.payload(state.editMode)
              : action.payload,
        };
      case 'SET_PREVIEW_MODE':
        return {
          ...state,
          previewMode:
            typeof action.payload === 'function'
              ? action.payload(state.previewMode)
              : action.payload,
        };
      case 'SET_RENDER_SECTIONS':
        return {
          ...state,
          renderSections:
            typeof action.payload === 'function'
              ? action.payload(state.renderSections)
              : action.payload,
        };
      case 'SET_ACTIVE_SECTIONS':
        return {
          ...state,
          activeSections:
            typeof action.payload === 'function'
              ? action.payload(state.activeSections)
              : action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    loading: props?.loading || false,
    error: null,
    editMode: props?.editMode || false,
    previewMode: props?.previewMode || false,
    activeSections: props?.activeSections || [],
    renderSections: null,
  });

  const setLoading = (loading) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const setError = (error) => {
    dispatch({ type: 'SET_ERROR', payload: error });
  };

  const setPreviewMode = (previewMode) => {
    dispatch({ type: 'SET_PREVIEW_MODE', payload: previewMode });
  };

  const setEditMode = (editMode) => {
    dispatch({ type: 'SET_EDIT_MODE', payload: editMode });
  };

  const setRenderSections = (renderSections) => {
    dispatch({ type: 'SET_RENDER_SECTIONS', payload: renderSections });
  };

  const setActiveSections = (activeSections) => {
    dispatch({ type: 'SET_ACTIVE_SECTIONS', payload: activeSections });
  };

  const handleAction = (action, index, section) => {
    let onClick = () => {};

    if (action.method === 'useDrawer') {
      onClick = () => {
        action.args.forEach((arg) => {
          if (arg.payloadAction) {
            // console.log("payloadAction", arg);
            _drawer[arg.type](...arg.payload);
            // _drawer.toggleDrawer('right');
          } else {
            _drawer[arg.type](...arg.payload);
          }
        });
      };
    } else if (action.method === 'useSnackbar') {
      onClick = () => {
        action.args.forEach((arg) => {
          if (arg.payloadAction) {
            _snackbar[arg.type](...arg.payload);
            _snackbar.enqueueSnackbar({
              message: arg.payloadAction.message,
              variant: arg.payloadAction.variant,
            });
          } else {
            _snackbar[arg.type](arg.payload);
          }
        });
      };
    } else if (action.method === 'useAuth') {
      onClick = () => {
        _auth[action.type](...action.args);
      };
    } else if (action.method === 'useNavigate') {
      onClick = () => {
        navigate(...action.args);
      };
    }

    const Component = ComponentLibrary[section.component];
    if (!Component) {
      if (section.component) {
        Component = section.component;
      }
    }
    return (
      <Component {...section.props} key={index} onClick={onClick}>
        {section.content}
      </Component>
    );
  };

  const handleForm = (index, section) => {
    let onSubmit = async (values) => {

    };

    const { initialValues, validationSchema } = section.props;

    const Component = ComponentLibrary[section.component];
    if (!Component) {
      if (section.component) {
        Component = section.component;
      }
    }
    return (
      <Component
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        key={index}
      >
        {section.children.map((subsection, subindex) =>
          handleItemSelection(subsection, subindex)
        )}
      </Component>
    );
  };

  const handleItemSelection = (section, index) => {
    if (!section.component) {
      return null;
    }
    let Component = ComponentLibrary[section.component];
    if (!Component) {
      if (section.component) {
        Component = section.component;
      }
    }

    if (section.children) {
      if (section.action && section.action.method === 'useForm') {
        // console.log('section', section);
        return handleForm(index, section);
      }
      return (
        <Component {...section.props} key={index}>
          {section.children.map((subsection, subindex) =>
            handleItemSelection(subsection, subindex)
          )}
        </Component>
      );
    } else {
      if (section.action) {
        if (section.action.method === 'dispatch') {
          return (
            <Component
              {...section.props}
              key={index}
              onClick={() =>
                dispatch({
                  type: section.action.type,
                  payload: PayloadHandlers[section.action.payload],
                })
              }
            >
              {section.content}
            </Component>
          );
        }
        if (section.action.method === 'event') {
          switch (section.action.type) {
            case 'WINDOW_ALERT':
              return (
                <Component
                  {...section.props}
                  key={index}
                  onClick={() => alert(section.action.payload)}
                >
                  {section.content}
                </Component>
              );

            case 'WINDOW_CONFIRM':
              // TODO: Add follow up action
              return (
                <Component
                  {...section.props}
                  key={index}
                  onClick={() => confirm(section.action.payload)}
                >
                  {section.content}
                </Component>
              );
            default:
              return (
                <Component {...section.props} key={index}>
                  {section.content}
                </Component>
              );
          }
        }

        return handleAction(section.action, index, section);
      }
      return (
        <Component {...section.props} key={index}>
          {section.content}
        </Component>
      );
    }
  };

  const renderSections = useMemo(() => {
    return state.activeSections.map((section, index) =>
      handleItemSelection(section, index)
    );
  }, [state.activeSections]);

  React.useEffect(() => {
    setRenderSections(renderSections);
  }, [renderSections]);

  return {
    state,
    dispatch,
    setLoading,
    setError,
    setPreviewMode,
    setEditMode,
    setRenderSections,
    setActiveSections,
    renderSections,
  };
};

export default useContentContext;
