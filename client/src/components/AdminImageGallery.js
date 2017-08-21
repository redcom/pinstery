// @flow

import type { AdminType } from '../store/CommonStoreTypes';
import React from 'react';
import ReactPaginate from 'react-paginate';
import {slice} from 'ramda';

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

const ReactPaginateStyled = styled.div`
  .pagination {
  list-style: none;
  display: flex;
  padding: 5px 5px;
  justify-content: space-around;
  flex-direction: row;
  > li {
      flex: 1;
      font-size: 1.5em;
      border: 1px solid grey;
      background: #f0f0f0;
      border-radius: 10px;
      margin: 5px;
      text-align: center;
    }
  }
`;

type ExtendedAdminImageGallery = AdminType & {
  hasErrors: Object,
  onImageSelect: Function,
};

const isProductPublished = (admin, id) => false;
// !!admin.publishProducts.find(item => item.id === id);

class AdminImageGallery extends React.Component {
  props: ExtendedAdminImageGallery


  state = {
    pageCount: 10,
    offset: 0,
  }
  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * 10);

    this.setState({
      offset: offset
    });
  };

  render() {
    const { admin, onImageSelect, hasErrors, } = this.props;
    const {offset, pageCount} = this.state;
    const slot = slice( offset, offset+pageCount, admin.images.children);

    return (
      <div>
      <AdminImageGalleryLine>
        {slot.map(image =>
          <AdminImage
            image={image}
            categories={admin.categories}
            onSubmit={onImageSelect}
            key={image.id}
            hasErrors={hasErrors}
            isPublished={isProductPublished(admin, image.id)}
          />,
        )}
      </AdminImageGalleryLine>
        <ReactPaginateStyled>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<a href="">...</a>}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
        </ReactPaginateStyled>
      </div>
    );
  }
}
export default AdminImageGallery;
