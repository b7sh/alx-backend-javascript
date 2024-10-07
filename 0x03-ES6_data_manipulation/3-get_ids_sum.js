export default function getStudentIdsSum(listOfObjects) {
  if (Array.isArray(listOfObjects)) {
    return listOfObjects.reduce((sum, student) => sum + student.id, 0);
  }
  return 0;
}
