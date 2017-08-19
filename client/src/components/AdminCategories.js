// @flow

import type { AdminType, ErrorsType } from '../store/CommonStoreTypes';
import React from 'react';
import Chip from 'material-ui/Chip';
import { WrapperFlex, Errors } from '../components';
import TextField from 'material-ui/TextField';
import styled from 'styled-components';

type ExtendedAdminCategories = AdminType & {
  hasErrors: ErrorsType,
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
const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    padding: 2px 2px;
    margin: 5px 5px;
  }
`;
const CategoriesList = ({ categories = {}, onDeleteItem }) => {
  const deleteItem = id => e => {
    onDeleteItem(id);
  };
  const categs = Object.values(categories || []);
  if (!categs.length) return null;
  const elems = categs.map(cat =>
    <Chip
      label={cat.category}
      key={cat.id}
      onRequestDelete={deleteItem({ id: cat.id })}
    />,
  );
  return (
    <CategoriesWrapper>
      {elems}
    </CategoriesWrapper>
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
  onDeleteCategory = category => {
    this.props.onEditCategory({
      category,
      action: 'delete',
    });
  };

  render() {
    const { admin, hasErrors: { error } } = this.props;
    return (
      <WrapperFlexRow>
        <BoxCategoriesList>
          <CategoriesList
            categories={admin.categories}
            onDeleteItem={this.onDeleteCategory}
          />
        </BoxCategoriesList>
        <BoxFormAddCategories>
          <FormAddCategory onAddCategory={this.onAddCategory} />
          {error
            ? <Errors>
                {error.message}
              </Errors>
            : <div />}
        </BoxFormAddCategories>
      </WrapperFlexRow>
    );
  }
}

export default AdminCategories;
