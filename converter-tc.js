// cd H:\Projects\Tools\node-ocr 
//
// node converter-tc.js 1 1 8

var ot = require('ocr-bulk');
ot.writeFile({
    start: 1,
    end: process.argv[4],
    outputPath: __dirname + '/../../../Projects/Bahai.works/English/Canada/TeachCanada/v' + process.argv[2] + 'n' + process.argv[3] + '/TeachCanada.txt', //change me
    getImagePath: function (i) {
        return 'H:\\Projects\\Bahai.works\\English\\Canada\\TeachCanada\\v' + process.argv[2] + 'n' + process.argv[3] + '\\' + ot.pad(i, 1)  + '.png';
    },
    concatenater: function (text, i) {
        console.log('Finishing ' + i);
		return '{{page|' + (i+0) + '|file=Teach_Canada_Vol' + process.argv[2] + '_No' + process.argv[3] + '.pdf|page=' + i + '}}' + text;
    },
    done: function () {
        console.log('Saved!');
    }
});