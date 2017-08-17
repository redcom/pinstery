// @flow

import type { AdminType } from '../store/CommonStoreTypes';
import React from 'react';
import Chip from 'material-ui/Chip';
import { WrapperFlex } from '../components';
import TextField from 'material-ui/TextField';
import styled from 'styled-components';

type ExtendedAdminCategories = AdminType & {
  hasErrors: Object,
  onEditCategory: Function,
};
const WrapperFlexRow = WrapperFlex.extend`flex-direction: row;`;
const BoxFormAddCategories = styled.div`
  min-height: 250px;
  flex: 1;
  text-align: center;
`;

const BoxCategoriesList = styled.div`
  border-right: 1px solid #808080;
  flex: 1;
  min-height: 250px;
`;
const CategoriesList = ({ categories = [] }) => {
  if (!categories.length) return null;
  const elems = categories.map(cat =>
    <Chip label={cat.label} key={cat.key} onRequestDelete={() => null} />,
  );
  return (
    <div>
      {elems}
    </div>
  );
};

const TextFieldWide = styled(TextField)`
  width: 80%;
`;
const FormAddCategory = ({ onAddCategory }) => {
  const onKeyDown = e => {
    // send event on enter
    if (e.keyCode === 13) {
      onAddCategory(e.target.value);
    }
  };
  return (
    <TextFieldWide
      label="Category"
      margin="normal"
      required
      onKeyDown={onKeyDown}
    />
  );
};

class AdminCategories extends React.Component {
  props: ExtendedAdminCategories;
  state: {
    isSubmited: false,
  };

  onAddCategory = category => {
    this.props.onEditCategory({
      category,
      action: 'add',
    });
  };

  render() {
    const { onEditCategory, admin } = this.props;
    return (
      <WrapperFlexRow>
        <BoxCategoriesList>
          <CategoriesList categories={admin.categories} />
        </BoxCategoriesList>
        <BoxFormAddCategories>
          <FormAddCategory onAddCategory={this.onAddCategory} />
        </BoxFormAddCategories>
      </WrapperFlexRow>
    );
  }
}

export default AdminCategories;
