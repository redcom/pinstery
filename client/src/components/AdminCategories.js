// @flow

import type { AdminType } from '../store/CommonStoreTypes';
import React from 'react';
import Chip from 'material-ui/Chip';
import { WrapperFlex } from '../components';
import styled from 'styled-components';

type ExtendedAdminCategories = AdminType & {
  hasErrors: Object,
  onEditCategory: Function,
};
const WrapperFlexRow = WrapperFlex.extend`
  flex-direction: row;
`;
const BoxFormAddCategories = styled.div`
  min-height: 250px;
  flex: 1;
`;

const BoxCategoriesList = styled.div`
  border-right: 1px solid #808080;
  flex: 1;
  min-height: 250px;
`;
const CategoriesList = ({categories = [{label: "aaa", key: 1}]}) => {
  if (!categories.length) return null;
  const elems = categories.map((cat, index) => {
    return <Chip
      label={cat.label}
      key={cat.key}
      onRequestDelete={() => null}
    />
  });
  return <div>{elems}</div>;
}


class AdminCategories extends React.Component {
  props: ExtendedAdminCategories;

  render() {
    const { onEditCategory, admin } = this.props;
    return (
      <WrapperFlexRow>
        <BoxCategoriesList>
          <CategoriesList categories1={admin.categories} />
        </BoxCategoriesList>
        <BoxFormAddCategories />
      </WrapperFlexRow>
    );
  }
}

export default AdminCategories;
