export default function getStudentsByLocation(listOfObjects, city) {
  if (Array.isArray(listOfObjects)) {
    return listOfObjects.filter((student) => student.location === city);
  }
  return [];
}
