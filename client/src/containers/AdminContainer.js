// @flow

import type { State, ErrorsType } from '../store/CommonStoreTypes';
import React from 'react';
import { connect } from 'react-redux';
import {
  WrapperFlex,
  Title,
  Admin,
  AdminLogin,
  AdminImageGallery,
  AdminImageGalleryEdit,
  AdminCategories,
  AdminTabs,
} from '../components';
import { login, loadImages, addProduct } from '../actions/AdminActions';

const AdminContainer = ({
  error = null,
  admin,
  dispatch,
}: {
  error: ErrorsType,
  admin: Object,
  dispatch: Function,
}) => {
  const onLogin = action => dispatch(login(action));
  const onAuth = () => {
    window.open(admin.url, 'Auth', 'top=100,left=100,width=700,height=500');
  };
  const onImageSelect = product => dispatch(addProduct(product));
  const onEditCategory = category =>
    dispatch(category => console.log(category));
  // const onEditCategory = category => dispatch(onEditCategory(category))

  let content = null;
  if (!admin.isAdmin) {
    content = <AdminLogin onSubmit={onLogin} hasErrors={error} />;
  }
  if (admin.isAdmin && !admin.token) {
    content = <Admin admin={admin} onAdminAuth={onAuth} hasErrors={error} />;
  }
  if (admin.isAdmin && admin.token && admin.images.thumbnails) {
    content = (
      <AdminTabs>
        {[
          <AdminImageGallery
            admin={admin}
            onImageSelect={onImageSelect}
            hasErrors={error}
            key={'AdminTab1'}
          />,
          <AdminImageGalleryEdit
            admin={admin}
            onImageSelect={onImageSelect}
            hasErrors={error}
            key={'AdminTabEditProduct'}
          />,
          <AdminCategories
            key={'AdminTabCategories'}
            admin={admin}
            onEditCategory={onEditCategory}
          />,
        ]}
      </AdminTabs>
    );
  }

  if (!content) {
    dispatch(loadImages(admin));
  }

  return (
    <WrapperFlex>
      <Title>Admin</Title>
      {content}
    </WrapperFlex>
  );
};

export default connect((state: State) => ({
  admin: state.admin,
  error: state.error,
}))(AdminContainer);
