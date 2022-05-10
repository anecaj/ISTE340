// Adrian Necaj

// Create the array of data
var start = 'Old or New Cartoon?';
var data = new Array();
var imgCount = 1;
data[start] = ['Old or New Cartoon?', '--Select--', '', 'Old', 'img' + imgCount, 'New', 'img' + (imgCount + 1)];
imgCount += 2;
    data['Old'] = ['Family friendly, rated R, or something in between?', '--Select--', '', 'Family Friendly', 'img' + imgCount, 'Rated R', 'img' + (imgCount + 1), 'In Between', 'img' + (imgCount + 2)];
    imgCount += 3;
        data['Family Friendly'] = ['Nickelodeon Or Cartoon Network?', '--Select--', 'stop', 'Nickolodeon', 'img' + imgCount, 'Cartoon Network', 'img' + (imgCount + 1)];
        imgCount += 2;
        data['Rated R'] = ['Mature or Raunchy?', '--Select--', 'stop', 'Mature', 'img' + imgCount, 'Raunchy', 'img' + (imgCount + 1)];
        imgCount += 2;
        data['In Between'] = ['Comedic or Calming?', '--Select--', 'stop', 'Comedic', 'img' + imgCount, 'Calming', 'img' + (imgCount + 1)];
        imgCount += 2;
    data['New'] = ['3D, 2D, or Silent?', '--Select--', '', '3D', 'img' + imgCount, '2D', 'img' + (imgCount + 1), 'Silent', 'img' + (imgCount + 2)];
    imgCount += 3;
        data['3D'] = ['Happy or Sad Vibes??', '--Select--', 'stop', 'Happy Vibes', 'img' + imgCount, 'Sad Vibes', 'img' + (imgCount + 1)];
        imgCount += 2;
        data['2D'] = ['Mature or Family Friendly?', '--Select--', 'stop', 'Mature', 'img' + imgCount, 'Family Friendly', 'img' + (imgCount + 1)];
        imgCount += 2;
        data['Silent'] = ['No Storyline or Storyline', '--Select--', 'stop', 'No Storyline', 'img' + imgCount, 'Storyline', 'img' + (imgCount + 1)];