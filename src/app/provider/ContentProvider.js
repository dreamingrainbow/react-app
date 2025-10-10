import React from 'react';
import AppFallback from '../../components/common/app-fallback';
import { useContentContext } from '../../hooks/useContent';
import PageBuilder from '../../components/PageBuilder';

const Content = ({ config }) => {
  const {
    state: values,
    dispatch,
    setLoading,
    setError,
    setEditMode,
    setPreviewMode,
    setRenderSections,
    setActiveSections,
    renderSections,
  } = useContentContext(config);
  /*
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  */

  if (values.loading && !values.error) {
    return <AppFallback />;
  }
  if (values.error) {
    return <>{values.error}</>;
  }
  if (values.editMode) {
    return (
      <PageBuilder
        values={values}
        dispatch={dispatch}
        setLoading={setLoading}
        setError={setError}
        setEditMode={setEditMode}
        setPreviewMode={setPreviewMode}
        setRenderSections={setRenderSections}
        setActiveSections={setActiveSections}
        renderSections={renderSections}
      />
    );
  }
  return values.renderSections;
};

export const ContentProvider = ({ config }) => {
  return <Content config={config} />;
};

export default ContentProvider;
