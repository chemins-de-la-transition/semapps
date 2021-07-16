import React from 'react';
import { ShowBase, Title } from 'react-admin';
import { MainList } from '@semapps/archipelago-layout';
import MarkdownField from '../../commons/fields/MarkdownField';
import HeaderTitle from '../../commons/HeaderTitle';
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';
import PageTitle from './PageTitle';

const PageShow = ({ id, ...rest }) => {
  if (!id.startsWith('http')) {
    id = process.env.REACT_APP_MIDDLEWARE_URL + 'pages/' + id;
  }
  return (
    <ShowBase id={id} {...rest}>
      <HeaderTitle />
      <FullWidthBox>
        <LargeContainer>
          <MainList>
            <Title source="semapps:title" title={<PageTitle />} />
            <MarkdownField source="semapps:content" addLabel={false} />
          </MainList>
        </LargeContainer>
      </FullWidthBox>
    </ShowBase>
  );
};

export default PageShow;
