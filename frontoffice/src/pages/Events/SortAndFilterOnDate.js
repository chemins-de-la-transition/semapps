function sortStartDate (firstElemId,SecondElemId,order, eventsData){
    const eventStartDate1 = eventsData[firstElemId]['pair:startDate'];
    const eventStartDate2 = eventsData[SecondElemId]['pair:startDate'];
    if (eventStartDate1 === eventStartDate2){
      return 0;
    }
    const eventStartDateObject1 = new Date(eventStartDate1);
    const eventStartDateObject2 = new Date(eventStartDate2);
    const ascResponse = (order === 'ASC') ? -1: 1;
    return (eventStartDateObject1 < eventStartDateObject2) ? ascResponse : -ascResponse;
}

const sortAndFilterOnDate = (ids,eventsData,nb) => {
        // filter on startData
        let sortedIds = ids;
        sortedIds = sortedIds.filter(elemId => {
            return (typeof eventsData[elemId]['pair:startDate'] !== 'undefined' && eventsData[elemId]['pair:startDate'].length !== 0) ;
          });
        // take those wth startDate in the future
        let futureIds = sortedIds.filter(elemId => {
          const eventStartDate = new Date(eventsData[elemId]['pair:startDate']);
          const today = Date.now();
          return (eventStartDate >= today) ;
        });
        futureIds = futureIds.slice(0,nb).sort((firstElemId,SecondElemId) => {
            return sortStartDate(firstElemId,SecondElemId,'DESC',eventsData);
          });
        if (futureIds.length < nb){
          // take those with startDate in the past
          let pastIds = sortedIds.filter(elemId => {
            const eventStartDate = new Date(eventsData[elemId]['pair:startDate']);
            const today = Date.now();
            return (eventStartDate <= today) ;
          });
          sortedIds = futureIds.concat(pastIds.sort((firstElemId,SecondElemId) => {
            return sortStartDate(firstElemId,SecondElemId,'DESC',eventsData);
          }));
          sortedIds = sortedIds.slice(0,nb);
        } else {
          sortedIds = futureIds ;
        }
    return sortedIds;
};

export default sortAndFilterOnDate;