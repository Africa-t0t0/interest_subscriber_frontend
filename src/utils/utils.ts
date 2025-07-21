export const getInteresectionOfArrays = (array1: any[], array2: any[]) => {
    return array1.filter((value) => array2.includes(value));
};

export function differenceById(arr1: any[], arr2: any[]): any[] {
    const ids2 = new Set(arr2.map(item => item._id.toString()));
    console.log("arr1", arr1);
    console.log("arr2", arr2);
    console.log("IDs de arr2:", Array.from(ids2)); // debug
  
    const result = arr1.filter(item => {
      const idStr = item._id.toString();
      const isInSet = ids2.has(idStr);
      console.log(`¿${idStr} está en arr2?`, isInSet);
      return !isInSet;
    });
  
    return result;
}