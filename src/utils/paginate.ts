export const paginate = (arr: any[], numPerPage: number) => {
  const pageNumbers = arr.length / numPerPage;
  const paginatedArr = Array.from({ length: pageNumbers }, (_, i) => {
    const start = i * numPerPage;
    return arr.slice(start, start + numPerPage);
  });

  return paginatedArr;
};

export default paginate;
