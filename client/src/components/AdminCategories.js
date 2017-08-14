// @flow

import type { AdminType } from '../store/CommonStoreTypes';
import React from 'react';

import styled from 'styled-components';

type ExtendedAdminCategories = AdminType & {
  hasErrors: Object,
  onEditCategory: Function,
};


class AdminCategories extends React.Component {
  props: ExtendedAdminCategories;

  render() {
    const {onEditCategory, admin} = this.props;
    return (
    <div onClick={onEditCategory}>
      {JSON.stringify(admin.categories)}
    </div>
    )
  }
}

export default AdminCategories
