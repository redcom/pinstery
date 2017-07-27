// @flow

import type { AdminType } from '../store/CommonStoreTypes';
import React from 'react';

import styled from 'styled-components';
import { defaultSpaceInBetween } from '../styles/vars';
import { AdminImage } from '../components';

const AdminImageGalleryLine = styled.ul`
  display: flex;
  padding: ${defaultSpaceInBetween};
  list-style: none;
  flex-direction: column;
  width: 100%;
}`;

type ExtendedAdminImageGallery = AdminType & {
  hasErrors: Object,
  onImageSelect: Function,
};

const isProductPublished = (admin, id) =>
  !!admin.publishProducts.find(item => item.id === id);

const AdminImageGallery = ({
  admin,
  onImageSelect,
  hasErrors,
}: ExtendedAdminImageGallery) =>
  <AdminImageGalleryLine>
    {admin.images.children.map(image =>
      <AdminImage
        image={image}
        onSubmit={onImageSelect}
        key={image.id}
        hasErrors={hasErrors}
        isPublished={isProductPublished(admin, image.id)}
      />,
    )}
  </AdminImageGalleryLine>;
export default AdminImageGallery;
