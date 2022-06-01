export const defaultToArray = value => (!value ? [] : Array.isArray(value) ? value : [value]);

export const sortBySimilarity = (data, similarRecord, predicate) => (id1, id2) => {
  const id1Match = defaultToArray(similarRecord[predicate]).some(t => defaultToArray(data[id1][predicate]).includes(t));
  const id2Match = defaultToArray(similarRecord[predicate]).some(t => defaultToArray(data[id2][predicate]).includes(t));
  if( !id1Match && id2Match ) {
    return 1;
  } else if ( id1Match && !id2Match ) {
    return -1;
  } else {
    return 0;
  }
};

export const linkToFilteredList = (resource, filter) =>
  record =>
    '/' + resource + '?filter=' + encodeURIComponent(JSON.stringify({ [filter]: record[filter] || record.id }));

export const stripHtmlTags = (html) => {
  const document = new DOMParser().parseFromString(html, 'text/html');
  return document.body.textContent || "";
};
