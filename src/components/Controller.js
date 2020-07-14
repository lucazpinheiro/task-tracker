export default function Controller(issuesList) {
  const todoList = issuesList.filter((issue) => issue.status === 'to-do');

  const doingList = issuesList.filter((issue) => issue.status === 'doing');

  const reviewList = issuesList.filter((issue) => issue.status === 'review');

  const doneList = issuesList.filter((issue) => issue.status === 'done');

  return [todoList, doingList, reviewList, doneList];
}
