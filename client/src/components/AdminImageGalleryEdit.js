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

type ExtendedAdminImageGalleryEdit = AdminType & {
  hasErrors: Object,
  onImageSelect: Function,
};

const AdminImageGalleryEdit = ({
  admin,
  onImageSelect,
  hasErrors,
}: ExtendedAdminImageGalleryEdit) =>
  (<AdminImageGalleryLine>
    {admin.publishProducts.map(image =>
      (<AdminImage
        image={image}
        onSubmit={onImageSelect}
        key={image.id}
        hasErrors={hasErrors}
        isPublished
      />),
    )}
  </AdminImageGalleryLine>);
export default AdminImageGalleryEdit;
