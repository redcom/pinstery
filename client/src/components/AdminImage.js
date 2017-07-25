// @flow
import React from 'react';
import styled from 'styled-components';
import { Button, Errors, WrapActions } from '../components';
import { defaultSpaceInBetween } from '../styles/vars';

type Props = {
  onSubmit: Function,
  hasErrors: ErrorsType,
  image: Object,
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
      > input {
        padding: 1em;
        border: 1px solid grey;
      }
      > textarea {
        height: 5em;
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
      url: image.thumbnails[0].large.url,
      id: image.id,
    });
  };

  render() {
    const { title, description, price } = this.state;
    const { hasErrors: { error }, image } = this.props;
    return (
      <Li>
        <div>
          <Img
            src={image.thumbnails[0].large.url}
            alt="img"
            title={image.name}
          />
        </div>
        <div className="category">
          <select name="category" onChange={this.onChange}>
            <option value="">Select Category</option>
            <option value="cat1">Category 1</option>
            <option value="cat1">Category 1</option>
            <option value="cat1">Category 1</option>
          </select>
          <select name="size" onChange={this.onChange}>
            <option value="">Select Size</option>
            <option value="cat1">Size 1</option>
          </select>
        </div>
        <div className="itemDetails">
          <div>
            <input
              type="text"
              value={title}
              placeholder="Title"
              name="title"
              required="required"
              onChange={this.onChange}
            />
            <textarea
              cols="4"
              rows="10"
              placeholder="Description"
              id="descrription"
              name="description"
              required="required"
              onChange={this.onChange}
            >
              {description}
            </textarea>
            <input
              type="number"
              value={price}
              placeholder="Price"
              name="price"
              required="required"
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
            <Button onClick={this.onFormSubmit} width="auto">
              Send
            </Button>
          </WrapActions>
        </div>
      </Li>
    );
  }
}
export default AdminImage;
