export const allQuestions = [
  {
    name: "concat",
    questions: [
      {
        question: "Does concat return a new array?",
        answer: "Yes",
        explanation:
          "The concat method returns a new array containing the elements of the original array joined with the elements from additional arrays or values.",
      },
      {
        question: "Does concat create a new array?",
        answer: "Yes",
        explanation:
          "Concat creates and returns a new array without modifying the original arrays.",
      },
      {
        question: "Does concat modify the original array?",
        answer: "No",
        explanation:
          "Concat does not modify the original array; it returns a new array with the concatenated elements.",
      },
    ],
  },
  {
    name: "filter",
    questions: [
      {
        question: "Does filter return a new array?",
        answer: "Yes",
        explanation:
          "The filter method returns a new array containing all elements that pass the test implemented by the provided function.",
      },
      {
        question: "Does filter create a new array?",
        answer: "Yes",
        explanation:
          "Filter creates and returns a new array without modifying the original array.",
      },
      {
        question: "Does filter modify the original array?",
        answer: "No",
        explanation:
          "Filter does not modify the original array; it returns a new array with the filtered elements.",
      },
    ],
  },
  {
    name: "map",
    questions: [
      {
        question: "Does map return a new array?",
        answer: "Yes",
        explanation:
          "The map method returns a new array with the results of calling a provided function on every element in the calling array.",
      },
      {
        question: "Does map create a new array?",
        answer: "Yes",
        explanation:
          "Map creates and returns a new array without modifying the original array.",
      },
      {
        question: "Does map modify the original array?",
        answer: "No",
        explanation:
          "Map does not modify the original array; it returns a new array with the modified elements.",
      },
    ],
  },
  {
    name: "reduce",
    questions: [
      {
        question: "Does reduce return a new array?",
        answer: "No",
        explanation:
          "The reduce method returns a single value as a result of calling the provided function on each element of the array.",
      },
      {
        question: "Does reduce create a new array?",
        answer: "No",
        explanation:
          "Reduce does not create a new array; it returns a single value.",
      },
      {
        question: "Does reduce modify the original array?",
        answer: "No",
        explanation:
          "Reduce does not modify the original array; it returns a single value as a result.",
      },
    ],
  },
  {
    name: "forEach",
    questions: [
      {
        question: "Does forEach return a new array?",
        answer: "No",
        explanation:
          "The forEach method does not return a value; it simply iterates over the elements of the array.",
      },
      {
        question: "Does forEach create a new array?",
        answer: "No",
        explanation:
          "ForEach does not create a new array; it iterates over the elements of the existing array.",
      },
      {
        question: "Does forEach modify the original array?",
        answer: "No",
        explanation:
          "ForEach does not modify the original array; it simply iterates over its elements.",
      },
    ],
  },
  {
    name: "some",
    questions: [
      {
        question: "Does some return a new array?",
        answer: "No",
        explanation:
          "The some method returns a boolean value indicating whether at least one element in the array satisfies the provided testing function.",
      },
      {
        question: "Does some create a new array?",
        answer: "No",
        explanation:
          "Some does not create a new array; it returns a boolean value.",
      },
      {
        question: "Does some modify the original array?",
        answer: "No",
        explanation:
          "Some does not modify the original array; it simply checks if any elements satisfy the condition.",
      },
    ],
  },
  {
    name: "every",
    questions: [
      {
        question: "Does every return a new array?",
        answer: "No",
        explanation:
          "The every method returns a boolean value indicating whether all elements in the array satisfy the provided testing function.",
      },
      {
        question: "Does every create a new array?",
        answer: "No",
        explanation:
          "Every does not create a new array; it returns a boolean value.",
      },
      {
        question: "Does every modify the original array?",
        answer: "No",
        explanation:
          "Every does not modify the original array; it simply checks if all elements satisfy the condition.",
      },
    ],
  },
  {
    name: "indexOf",
    questions: [
      {
        question: "Does indexOf return a new array?",
        answer: "No",
        explanation:
          "The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.",
      },
      {
        question: "Does indexOf create a new array?",
        answer: "No",
        explanation:
          "IndexOf does not create a new array; it returns a single value.",
      },
      {
        question: "Does indexOf modify the original array?",
        answer: "No",
        explanation:
          "IndexOf does not modify the original array; it simply returns the index of the element if found.",
      },
    ],
  },
  {
    name: "includes",
    questions: [
      {
        question: "Does includes return a new array?",
        answer: "No",
        explanation:
          "The includes method determines whether an array includes a certain element, returning true or false as appropriate.",
      },
      {
        question: "Does includes create a new array?",
        answer: "No",
        explanation:
          "Includes does not create a new array; it returns a boolean value.",
      },
      {
        question: "Does includes modify the original array?",
        answer: "No",
        explanation:
          "Includes does not modify the original array; it simply checks if the element is present.",
      },
    ],
  },
  {
    name: "join",
    questions: [
      {
        question: "Does join return a new array?",
        answer: "No",
        explanation:
          "The join method returns a string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.",
      },
      {
        question: "Does join create a new array?",
        answer: "No",
        explanation:
          "Join does not create a new array; it returns a single string.",
      },
      {
        question: "Does join modify the original array?",
        answer: "No",
        explanation:
          "Join does not modify the original array; it returns a new string representing the array.",
      },
    ],
  },
  {
    name: "slice",
    questions: [
      {
        question: "Does slice return a new array?",
        answer: "Yes",
        explanation:
          "The slice method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).",
      },
      {
        question: "Does slice create a new array?",
        answer: "Yes",
        explanation:
          "Slice creates and returns a new array without modifying the original array.",
      },
      {
        question: "Does slice modify the original array?",
        answer: "No",
        explanation:
          "Slice does not modify the original array; it returns a new array with the selected elements.",
      },
    ],
  },
  {
    name: "sort",
    questions: [
      {
        question: "Does sort return a new array?",
        answer: "No",
        explanation:
          "The sort method sorts the elements of an array in place and returns the sorted array.",
      },
      {
        question: "Does sort create a new array?",
        answer: "No",
        explanation:
          "Sort does not create a new array; it sorts the elements of the original array in place.",
      },
      {
        question: "Does sort modify the original array?",
        answer: "Yes",
        explanation:
          "Sort modifies the original array by rearranging its elements according to the sorting algorithm.",
      },
    ],
  },
  {
    name: "reverse",
    questions: [
      {
        question: "Does reverse return a new array?",
        answer: "No",
        explanation:
          "The reverse method reverses the elements of an array in place and returns the reversed array.",
      },
      {
        question: "Does reverse create a new array?",
        answer: "No",
        explanation:
          "Reverse does not create a new array; it reverses the elements of the original array in place.",
      },
      {
        question: "Does reverse modify the original array?",
        answer: "Yes",
        explanation:
          "Reverse modifies the original array by reversing its elements in place.",
      },
    ],
  },
  {
    name: "splice",
    questions: [
      {
        question: "Does splice return a new array?",
        answer: "No",
        explanation:
          "The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.",
      },
      {
        question: "Does splice create a new array?",
        answer: "No",
        explanation:
          "Splice does not create a new array; it modifies the original array in place.",
      },
      {
        question: "Does splice modify the original array?",
        answer: "Yes",
        explanation:
          "Splice modifies the original array by changing its contents according to the specified parameters.",
      },
    ],
  },
  {
    name: "isArray",
    questions: [
      {
        question: "Is isArray return a new array?",
        answer: "No",
        explanation:
          "The isArray method determines whether the passed value is an Array.",
      },
      {
        question: "Is isArray create a new array?",
        answer: "No",
        explanation:
          "IsArray does not create a new array; it returns a boolean value.",
      },
      {
        question: "Is isArray modify the original array?",
        answer: "No",
        explanation:
          "IsArray does not modify any array; it simply checks if the passed value is an array.",
      },
    ],
  },
  {
    name: "flatMap",
    questions: [
      {
        question: "Does flatMap return a new array?",
        answer: "Yes",
        explanation:
          "The flatMap method first maps each element using a mapping function, then flattens the result into a new array.",
      },
      {
        question: "Does flatMap create a new array?",
        answer: "Yes",
        explanation:
          "FlatMap creates and returns a new array without modifying the original array.",
      },
      {
        question: "Does flatMap modify the original array?",
        answer: "No",
        explanation:
          "FlatMap does not modify the original array; it returns a new array with flattened elements.",
      },
    ],
  },
  {
    name: "from",
    questions: [
      {
        question: "Does from return a new array?",
        answer: "Yes",
        explanation:
          "The from method creates a new, shallow-copied array instance from an array-like or iterable object.",
      },
      {
        question: "Does from create a new array?",
        answer: "Yes",
        explanation:
          "From creates and returns a new array without modifying the original array-like object.",
      },
      {
        question: "Does from modify the original array?",
        answer: "No",
        explanation:
          "From does not modify the original array-like object; it creates a new array from it.",
      },
    ],
  },
  {
    name: "keys",
    questions: [
      {
        question: "Does keys return a new array?",
        answer: "No",
        explanation:
          "The keys method returns a new Array Iterator object that contains the keys for each index in the array.",
      },
      {
        question: "Does keys create a new array?",
        answer: "No",
        explanation:
          "Keys does not create a new array; it returns an iterator object.",
      },
      {
        question: "Does keys modify the original array?",
        answer: "No",
        explanation:
          "Keys does not modify the original array; it simply provides an iterator over the keys.",
      },
    ],
  },
  {
    name: "lastIndexOf",
    questions: [
      {
        question: "Does lastIndexOf return a new array?",
        answer: "No",
        explanation:
          "The lastIndexOf method returns the last index at which a given element can be found in the array, or -1 if it is not present.",
      },
      {
        question: "Does lastIndexOf create a new array?",
        answer: "No",
        explanation:
          "LastIndexOf does not create a new array; it returns a single value.",
      },
      {
        question: "Does lastIndexOf modify the original array?",
        answer: "No",
        explanation:
          "LastIndexOf does not modify the original array; it simply returns the last index of the element if found.",
      },
    ],
  },
  {
    name: "pop",
    questions: [
      {
        question: "Does pop return a new array?",
        answer: "No",
        explanation:
          "The pop method removes the last element from an array and returns that element.",
      },
      {
        question: "Does pop create a new array?",
        answer: "No",
        explanation:
          "Pop does not create a new array; it returns the removed element.",
      },
      {
        question: "Does pop modify the original array?",
        answer: "Yes",
        explanation:
          "Pop modifies the original array by removing the last element.",
      },
    ],
  },
  {
    name: "push",
    questions: [
      {
        question: "Does push return a new array?",
        answer: "Yes",
        explanation:
          "The push method adds one or more elements to the end of an array and returns the new length of the array.",
      },
      {
        question: "Does push create a new array?",
        answer: "No",
        explanation:
          "Push does not create a new array; it modifies the original array by adding elements to it.",
      },
      {
        question: "Does push modify the original array?",
        answer: "Yes",
        explanation:
          "Push modifies the original array by adding elements to it.",
      },
    ],
  },
  {
    name: "shift",
    questions: [
      {
        question: "Does shift return a new array?",
        answer: "No",
        explanation:
          "The shift method removes the first element from an array and returns that removed element.",
      },
      {
        question: "Does shift create a new array?",
        answer: "No",
        explanation:
          "Shift does not create a new array; it returns the removed element.",
      },
      {
        question: "Does shift modify the original array?",
        answer: "Yes",
        explanation:
          "Shift modifies the original array by removing the first element.",
      },
    ],
  },
  {
    name: "unshift",
    questions: [
      {
        question: "Does unshift return a new array?",
        answer: "Yes",
        explanation:
          "The unshift method adds one or more elements to the beginning of an array and returns the new length of the array.",
      },
      {
        question: "Does unshift create a new array?",
        answer: "No",
        explanation:
          "Unshift does not create a new array; it modifies the original array by adding elements to the beginning.",
      },
      {
        question: "Does unshift modify the original array?",
        answer: "Yes",
        explanation:
          "Unshift modifies the original array by adding elements to the beginning.",
      },
    ],
  },
  {
    name: "toString",
    questions: [
      {
        question: "Does toString return a new array?",
        answer: "No",
        explanation:
          "The toString method returns a string representing the specified array and its elements.",
      },
      {
        question: "Does toString create a new array?",
        answer: "No",
        explanation:
          "ToString does not create a new array; it returns a single string representation of the array.",
      },
      {
        question: "Does toString modify the original array?",
        answer: "No",
        explanation:
          "ToString does not modify the original array; it simply returns a string representation of it.",
      },
    ],
  },
  {
    name: "toLocaleString",
    questions: [
      {
        question: "Does toLocaleString return a new array?",
        answer: "No",
        explanation:
          "The toLocaleString method returns a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods.",
      },
      {
        question: "Does toLocaleString create a new array?",
        answer: "No",
        explanation:
          "ToLocaleString does not create a new array; it returns a single string representation of the array elements.",
      },
      {
        question: "Does toLocaleString modify the original array?",
        answer: "No",
        explanation:
          "ToLocaleString does not modify the original array; it simply returns a string representation of its elements.",
      },
    ],
  },
  {
    name: "values",
    questions: [
      {
        question: "Does values return a new array?",
        answer: "No",
        explanation:
          "The values method returns a new Array Iterator object that contains the values for each index in the array.",
      },
      {
        question: "Does values create a new array?",
        answer: "No",
        explanation:
          "Values does not create a new array; it returns an iterator object.",
      },
      {
        question: "Does values modify the original array?",
        answer: "No",
        explanation:
          "Values does not modify the original array; it simply provides an iterator over the values.",
      },
    ],
  },
  {
    name: "entries",
    questions: [
      {
        question: "Does entries return a new array?",
        answer: "No",
        explanation:
          "The entries method returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
      },
      {
        question: "Does entries create a new array?",
        answer: "No",
        explanation:
          "Entries does not create a new array; it returns an iterator object.",
      },
      {
        question: "Does entries modify the original array?",
        answer: "No",
        explanation:
          "Entries does not modify the original array; it simply provides an iterator over the key/value pairs.",
      },
    ],
  },
  {
    name: "copyWithin",
    questions: [
      {
        question: "Does copyWithin return a new array?",
        answer: "No",
        explanation:
          "The copyWithin method shallow copies part of an array to another location in the same array and returns it without modifying its length.",
      },
      {
        question: "Does copyWithin create a new array?",
        answer: "No",
        explanation:
          "CopyWithin does not create a new array; it modifies the original array in place.",
      },
      {
        question: "Does copyWithin modify the original array?",
        answer: "Yes",
        explanation:
          "CopyWithin modifies the original array by copying elements to another location within the same array.",
      },
    ],
  },
  {
    name: "fill",
    questions: [
      {
        question: "Does fill return a new array?",
        answer: "No",
        explanation:
          "The fill method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array length).",
      },
      {
        question: "Does fill create a new array?",
        answer: "No",
        explanation:
          "Fill does not create a new array; it modifies the original array in place.",
      },
      {
        question: "Does fill modify the original array?",
        answer: "Yes",
        explanation:
          "Fill modifies the original array by changing all elements to the specified value within the specified range.",
      },
    ],
  },
  {
    name: "flat",
    questions: [
      {
        question: "Does flat return a new array?",
        answer: "Yes",
        explanation:
          "The flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.",
      },
      {
        question: "Does flat create a new array?",
        answer: "Yes",
        explanation:
          "Flat creates and returns a new array without modifying the original array.",
      },
      {
        question: "Does flat modify the original array?",
        answer: "No",
        explanation:
          "Flat does not modify the original array; it returns a new array with flattened elements.",
      },
    ],
  },
  {
    name: "find",
    questions: [
      {
        question: "Does find return a new array?",
        answer: "No",
        explanation:
          "The find method returns the value of the first element in the array that satisfies the provided testing function.",
      },
      {
        question: "Does find create a new array?",
        answer: "No",
        explanation:
          "Find does not create a new array; it returns a single value.",
      },
      {
        question: "Does find modify the original array?",
        answer: "No",
        explanation:
          "Find does not modify the original array; it simply returns the found element.",
      },
    ],
  },
  {
    name: "findIndex",
    questions: [
      {
        question: "Does findIndex return a new array?",
        answer: "No",
        explanation:
          "The findIndex method returns the index of the first element in the array that satisfies the provided testing function.",
      },
      {
        question: "Does findIndex create a new array?",
        answer: "No",
        explanation:
          "FindIndex does not create a new array; it returns a single value.",
      },
      {
        question: "Does findIndex modify the original array?",
        answer: "No",
        explanation:
          "FindIndex does not modify the original array; it simply returns the index of the found element.",
      },
    ],
  },
];
