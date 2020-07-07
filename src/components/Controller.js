export default function Controller(issuesList) {
  const todoList = issuesList.filter((issue) => {
    if (issue.status === 'to-do') return issue;
  });

  const doingList = issuesList.filter((issue) => {
    if (issue.status === 'doing') return issue;
  });

  const reviewList = issuesList.filter((issue) => {
    if (issue.status === 'review') return issue;
  });

  const doneList = issuesList.filter((issue) => {
    if (issue.status === 'done') return issue;
  });

  return [todoList, doingList, reviewList, doneList];
}
