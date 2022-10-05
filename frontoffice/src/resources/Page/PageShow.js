import React from 'react';
import { ShowBase, Title } from 'react-admin';
import MarkdownField from '../../commons/fields/MarkdownField';
import HeaderTitle from '../../commons/HeaderTitle';
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';
import PageTitle from './PageTitle';
import BodyList from "../../commons/lists/BodyList/BodyList";

const PageShow = ({ id, ...rest }) => {
  if (!id.startsWith('http')) {
    id = process.env.REACT_APP_MIDDLEWARE_URL + 'pages/' + id;
  }
  return (
    <ShowBase id={id} {...rest}>
      <HeaderTitle />
      <FullWidthBox>
        <LargeContainer>
          <BodyList>
            <Title source="semapps:title" title={<PageTitle />} />
            <MarkdownField source="semapps:content" addLabel={false} />
          </BodyList>
        </LargeContainer>
      </FullWidthBox>
    </ShowBase>
  );
};

export default PageShow;
