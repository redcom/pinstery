// @flow
import React from 'react';
import styled from 'styled-components';
import { Errors, WrapActions } from '../components';
import { defaultSpaceInBetween } from '../styles/vars';
import { map, values } from 'ramda';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import type { ErrorsType } from '../store/CommonStoreTypes';

type Props = {
  onSubmit: Function,
  hasErrors: ErrorsType,
  image: Object,
  categories: Object,
  isPublished: boolen,
};

const Img = styled.img`width: auto;`;
const Li = styled.li`
  display: flex;
  padding: ${defaultSpaceInBetween};
  &:nth-child(2n + 0) {
    background: #f0f0f0;
  }
  > div.category {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1em;
    select {
      margin: 1em 0;
    }
  }
  > div.itemAction {
    align-self: flex-end;
  }
  > div.itemDetails {
    flex: 4;
    > div {
      display: flex;
      flex-direction: column;
      > * {
        margin: ${defaultSpaceInBetween};
      }
    }
  }
`;
class AdminImage extends React.Component {
  props: Props;

  state = {
    title: '',
    description: '',
    category: '',
    size: '',
    price: '',
  };

  componentDidMount() {
    const {
      image: {
        title = '',
        description = '',
        category = '',
        size = '',
        price = '',
      },
    } = this.props;

    this.setState({
      title,
      description,
      category,
      size,
      price,
    });
  }

  onChange = evt => {
    const name = evt.target.name;
    this.setState({
      [name]: evt.target.value,
    });
  };

  onFormSubmit = () => {
    const { title, description, price = 1, size = 1, category } = this.state;
    const { image, onSubmit } = this.props;

    onSubmit({
      title,
      description,
      price,
      size,
      category,
      url: image.url,
      id: image.id,
    });
  };

  showCategoriesOption(categories = {}, defaultValue) {
    const options = map(
      ({ category, id }) =>
        <option value={category} key={id}>
          {category}
        </option>,
      values(categories),
    );

    return (
      <select name="category" onChange={this.onChange} value={defaultValue}>
        <option value="">Select Category</option>
        {options}
      </select>
    );
  }

  render() {
    const {
      title = '',
      description = '',
      category = '',
      size = '',
      price = '',
    } = this.state;
    const { hasErrors: { error }, image, isPublished, categories } = this.props;
    return (
      <Li>
        <div>
          <Img src={`${image.url}`} alt="img" title={image.name} />
        </div>
        <div className="category">
          {this.showCategoriesOption(categories, category)}
          <select name="size" onChange={this.onChange} value={size}>
            <option value="">Select Size</option>
            <option value="cat1">Size 1</option>
          </select>
          {`Status: ${isPublished ? 'YES' : 'NO'}`}
        </div>
        <div className="itemDetails">
          <div>
            <TextField
              required
              id="title"
              label="Title"
              name="title"
              value={title}
              onChange={this.onChange}
            />
            <TextField
              required
              id="description"
              label="Description"
              name="description"
              value={description}
              onChange={this.onChange}
              multiline
              rowsMax="4"
            />
            <TextField
              required
              id="price"
              label="Price"
              name="price"
              value={price}
              type="number"
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="itemAction">
          <WrapActions>
            {error
              ? <Errors>
                  {error.message}
                </Errors>
              : <div />}
            <Button
              raised
              color="primary"
              onClick={this.onFormSubmit}
              width="auto"
            >
              Send
            </Button>
          </WrapActions>
        </div>
      </Li>
    );
  }
}
export default AdminImage;
