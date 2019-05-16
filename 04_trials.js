// In this file you can specify the trial data for your experiment

const trial_info = {
    key_press_practice_data: [

    ],
    key_press_data: [

    ],

};

// create an array of filenames and shuffle it for the test run
var images_test = [];
for(i = 13; i<=15; i++) {
    images_test.push({name: ''+i+'_50_same.jpg', expected: 'same', key: 'f', rotation: '50'});
    images_test.push({name: ''+i+'_50_different.jpg', expected: 'different', key: 'j', rotation: '50'});
    images_test.push({name: ''+i+'_150_same.jpg', expected: 'same', key: 'f', rotation: '150'});
    images_test.push({name: ''+i+'_150_different.jpg', expected: 'different', key: 'j', rotation: '150'});
}
images_test = _.shuffle(images_test);

// create an array of filenames and shuffle it for the main run
var images_main = [];
for(i = 1; i<=12; i++) {
    images_main.push({name: ''+i+'_50_same.jpg', expected: 'same', key: 'f', rotation: '50'});
    images_main.push({name: ''+i+'_50_different.jpg', expected: 'different', key: 'j', rotation: '50'});
    images_main.push({name: ''+i+'_150_same.jpg', expected: 'same', key: 'f', rotation: '150'});
    images_main.push({name: ''+i+'_150_different.jpg', expected: 'different', key: 'j', rotation: '150'});
}
images_main = _.shuffle(images_main);

// add the images to the trials
for(i = 0; i < 12; i++) {
  trial_info.key_press_practice_data.push({
      question: "Are the two figures the same?",
      picture: 'images/'+images_test[i].name,
      key1: 'f',
      key2: 'j',
      f: 'same',
      j: 'different',
      picturesShown: i+1,
      rotation: images_test[i].rotation,
      expected: images_test[i].expected,
      correct: images_test[i].key,
  });
}

for(i = 0; i < 48; i++) {
  trial_info.key_press_data.push({
      question: "Are the two figures the same?",
      picture: 'images/'+images_main[i].name,
      key1: 'f',
      key2: 'j',
      f: 'same',
      j: 'different',
      picturesShown: i+1,
      rotation: images_main[i].rotation,
      expected: images_main[i].expected,
      correct: images_main[i].key,
  });
}
