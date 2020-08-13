export default function getIssueIndex(issueId, list) {
  const issueIndex = list.findIndex((element) => element.id === issueId);
  return issueIndex;
}
