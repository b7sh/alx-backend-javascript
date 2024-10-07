export default function getListStudentIds(listOfObject) {
  if (Array.isArray(listOfObject)) {
    return listOfObject.map((student) => student.id);
  }
  return [];
}
