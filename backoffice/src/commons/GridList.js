import * as React from 'react';
import { useListContext, linkToRecord, Link } from 'react-admin';
import { Grid } from '@material-ui/core';

// useful to prevent click bubbling in a datagrid with rowClick
const stopPropagation = e => e.stopPropagation();

// Our handleClick does nothing as we wrap the children inside a Link but it is
// required by ChipField, which uses a Chip from material-ui.
// The material-ui Chip requires an onClick handler to behave like a clickable element.
const handleClick = () => {};

const GridList = ({ children, linkType, spacing, ...otherProps }) => {
  const { ids, data, basePath } = useListContext();
  let myBasePath = basePath;
  return (
    <Grid container spacing={spacing}>
      {ids.map(id => {
        if (!data[id]) return null;
        
        if (data[id].type) {
          const type = [].concat(data[id].type)[0];
          if (type.includes(':')) {
            myBasePath = '/' + type.split(':')[1];
          }
        }
        
        return (
          <Grid item key={id} {...otherProps}>
            {linkType ? (
              <Link to={linkToRecord(myBasePath, id, linkType)} onClick={stopPropagation}>
                {React.cloneElement(React.Children.only(children), {
                  record: data[id],
                  myBasePath,
                  // Workaround to force ChipField to be clickable
                  onClick: handleClick
                })}
              </Link>
            ) : (
              React.cloneElement(React.Children.only(children), {
                record: data[id],
                myBasePath
              })
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

GridList.defaultProps = {
  xs: 6,
  spacing: 3,
  linkType: 'edit'
};

export default GridList;