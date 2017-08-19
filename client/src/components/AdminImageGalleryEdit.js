// @flow

import type { AdminType } from '../store/CommonStoreTypes';
import React from 'react';

import styled from 'styled-components';
import { defaultSpaceInBetween } from '../styles/vars';
import { AdminImageEdit } from '../components';
import { values } from 'ramda';

const AdminImageGalleryLine = styled.ul`
  display: flex;
  padding: ${defaultSpaceInBetween};
  list-style: none;
  flex-direction: column;
  width: 100%;
}`;

type ExtendedAdminImageGalleryEdit = AdminType & {
  hasErrors: Object,
  onImageSelect: Function,
};

const AdminImageGalleryEdit = ({
  admin,
  onImageSelect,
  hasErrors,
}: ExtendedAdminImageGalleryEdit) =>
  <AdminImageGalleryLine>
    {values(admin.publishedProducts).map(image =>
      <AdminImageEdit
        image={image}
        onSubmit={onImageSelect}
        categories={admin.categories}
        key={image.id}
        hasErrors={hasErrors}
        isPublished
      />,
    )}
  </AdminImageGalleryLine>;
export default AdminImageGalleryEdit;
