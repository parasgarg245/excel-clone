//we are importing perfect scrollbar in our javascript
//const ps = new PerfectScrollbar("#cells", {
    //the speed of wheel is increased by wheelSpeed
//    wheelSpeed: 15
//});

//code for creating column number and row number and columns and rows class respectively
//for (let i = 1; i <= 100; i++) {
//    let str = "";
//    let n = i;

    //n>0 when i would be greater than 26 example 27 
//    while (n > 0) {
        //in case of 27 rem would be 1 it would go to else 
//        let rem = n % 26;
//        if (rem == 0) {
//            str = "Z" + str;
//            n = Math.floor(n / 26) - 1;
//        } else {
            //str would be A
//            str = String.fromCharCode((rem - 1) + 65) + str;
            //n would be 1 and this will again come to else and now str would be 'AA'
//            n = Math.floor(n / 26);
//        }
//    }
    //appended column and row from 1 to 100 in html and they are designed through css
//    $("#columns").append(`<div class="column-name">${str}</div>`)
//    $("#rows").append(`<div class="row-name">${i}</div>`)
//}


//let cellData = [];

//code for creating column number and row number and columns and rows class respectively
//for (let i = 1; i <= 100; i++) {
    //creating cell row class
//    let row = $('<div class="cell-row"></div>');
    //creating an array of objects along each row
//    let rowArray = [];
//    for (let j = 1; j <= 100; j++) {
        //appending cell from 1 to 100 in a row with their div row-1-col-1 for first cell
//        row.append(`<div id="row-${i}-col-${j}" class="input-cell" contenteditable="false"></div>`);
        //each of the cell contains following properties
//        rowArray.push({
//            "font-family": "Noto Sans",
//            "font-size": 14,
//            "text": "",
//            "bold": false,
//            "italic": false,
//            "underlined": false,
//            "alignment": "left",
//            "color": "",
//            "bgcolor": ""
//        })
//    }
    //appending each row in cellData
//    cellData.push(rowArray);
//    $("#cells").append(row);
//}

//$("#cells").scroll(function (e) {
    //scroll columns and rows upto what the cells have scrolled
//    $("#columns").scrollLeft(this.scrollLeft);
//    $("#rows").scrollTop(this.scrollTop);
//});

//$(".input-cell").dblclick(function (e) {
    //when we double click on a cell than unselect cells that were previously selected and select cell which is now selected and make it editable
//    $(".input-cell.selected").removeClass("selected top-selected bottom-selected left-selected right-selected");
//    $(this).addClass("selected");
//    $(this).attr("contenteditable", "true");
//    $(this).focus();
//});

//when we click outside the selected cell the content editable property should become false
//$(".input-cell").blur(function (e) {
//    $(this).attr("contenteditable", "false");
//});

//function getRowCol(ele) {
    //ele is a particular input cell get the row and col number of that cell and return that in an array
//    let id = $(ele).attr("id");
//    let idArray = id.split("-");
//    let rowId = parseInt(idArray[1]);
//    let colId = parseInt(idArray[3]);
//    return [rowId, colId];
//}

/*function getTopLeftBottomRightCell(rowId, colId) {
    //get the ids of topcell bottomcell left and right cell of a particular clicked cell and return them in an array
    //$ means select cell with this row and col where as blue $ inside back ticks is javascript string literal
    let topCell = $(`#row-${rowId - 1}-col-${colId}`);
    let bottomCell = $(`#row-${rowId + 1}-col-${colId}`);
    let leftCell = $(`#row-${rowId}-col-${colId - 1}`);
    let rightCell = $(`#row-${rowId}-col-${colId + 1}`);
    return [topCell, bottomCell, leftCell, rightCell];
}
$(".input-cell").click(function (e) {
    let [rowId, colId] = getRowCol(this);
    let [topCell, bottomCell, leftCell, rightCell] = getTopLeftBottomRightCell(rowId, colId);
    //if the cell was selected earlier and we than clicked on it while pressing ctrl key than run unselectcell function
    if ($(this).hasClass("selected") && e.ctrlKey) {
        unselectCell(this, e, topCell, bottomCell, leftCell, rightCell);
    } else {
        //cell was not selected earlier so we will select cell if clicked
        selectCell(this, e, topCell, bottomCell, leftCell, rightCell);
    }
});

function unselectCell(ele, e, topCell, bottomCell, leftCell, rightCell) {
    if ($(ele).attr("contenteditable") == "false") {
        //if its top class was also selected earlier than bring the bottom border of the top class by removing bottom selected function and similarly for others
        if ($(ele).hasClass("top-selected")) {
            topCell.removeClass("bottom-selected");
        }

        if ($(ele).hasClass("bottom-selected")) {
            bottomCell.removeClass("top-selected");
        }

        if ($(ele).hasClass("left-selected")) {
            leftCell.removeClass("right-selected");
        }

        if ($(ele).hasClass("right-selected")) {
            rightCell.removeClass("left-selected");
        }

        $(ele).removeClass("selected top-selected bottom-selected left-selected right-selected");
    }

}

function selectCell(ele, e, topCell, bottomCell, leftCell, rightCell) {
    if (e.ctrlKey) {

        // top selected or not
        // if top selected of the cell which we have clicked is already clicked or not or not and for that we first check it top cell actually exist or not
        let topSelected;
        if (topCell) {
            topSelected = topCell.hasClass("selected");
        }

        // bottom selected or not
        let bottomSelected;
        if (bottomCell) {
            bottomSelected = bottomCell.hasClass("selected");
        }


        // left selected or not
        let leftSelected;
        if (leftCell) {
            leftSelected = leftCell.hasClass("selected");
        }

        // right selected or not
        let rightSelected;
        if (rightCell) {
            rightSelected = rightCell.hasClass("selected");
        }

        if (topSelected) {
            $(ele).addClass("top-selected");
            topCell.addClass("bottom-selected");
        }

        if (bottomSelected) {
            $(ele).addClass("bottom-selected");
            bottomCell.addClass("top-selected");
        }

        if (leftSelected) {
            $(ele).addClass("left-selected");
            leftCell.addClass("right-selected");
        }

        if (rightSelected) {
            $(ele).addClass("right-selected");
            rightCell.addClass("left-selected");
        }
    } else {
        //if we havent pressed contol than remove all classes from the previously selected cell and after else we will only add selected class to the new clicked single cell
        $(".input-cell.selected").removeClass("selected top-selected bottom-selected left-selected right-selected");
    }
    //added class selected to cell even if clicked by pressing control key or not
    $(ele).addClass("selected");
    //when we change from one cell to other so the selected alignment at the header also changes as that of cell for example if we were on a cell that was left alignment and now we go to a cell that is right aligned than this should also reflect on the header
    changeHeader(getRowCol(ele));
}


function changeHeader([rowId, colId]) {
    //alignment button ke click pe sabse pahle ye select kar liya konsa alignment karni phir pahle wale cell se hta kar nye selected cell par selected class lga de aur har ek cell se rowID colID nikal ke cellData ko update kar diya
    let data = cellData[rowId - 1][colId - 1];
    $(".alignment.selected").removeClass("selected");
    $(`.alignment[data-type=${data.alignment}]`).addClass("selected");
    addRemoveSelectFromFontStyle(data, "bold");
    addRemoveSelectFromFontStyle(data, "italic");
    addRemoveSelectFromFontStyle(data, "underlined");
}

function addRemoveSelectFromFontStyle(data, property) {
    if (data[property]) {
        $(`#${property}`).addClass("selected");
    } else {
        //agar kisi ke pass koi class nhi hai phir bhi ham htaye to koi fark nhi padta
        $(`#${property}`).removeClass("selected");
    }
}

//let count = 0;
let startcellSelected = false;
let startCell = {};
let endCell = {};
//scroll along x axis in right direction
let scrollXRStarted = false;
//scroll along x axis in left direction
let scrollXLStarted = false;
//we are using mousemove to select the first cell
$(".input-cell").mousemove(function (e) {
    //e.preverntdefault() google chrome does not allow to select deselect repidly fastly and a black cursor comes so to overcome it we used preventdefault
    e.preventDefault();
    //if e.buttons == 1 means if we pressed left click and movig the mouse if we pressed right click than e.buttons == 2;
    if (e.buttons == 1) {

        //if (e.pageX > ($(window).width() - 10) && !scrollXRStarted) {
        //    scrollXR();
        //} else if (e.pageX < (10) && !scrollXLStarted) {
        //    scrollXL();
        //}
        //hamne jaise hi kisi cell ko left click karke mousemove kiya to fir startcell me us cell ki rowid aur colid le aaye       
        if (!startcellSelected) {
            let [rowId, colId] = getRowCol(this);
            startCell = { "rowId": rowId, "colId": colId };
            //if we haven't done this than our first cell will have selected only after our mouseenter other cell and their selectCellBetween runs
            selectAllBetweenCells(startCell, startCell);
            startcellSelected = true;
        }
    } else {
        startcellSelected = false;
    }
});

//after selection the first cell our mouse when enters other cell for choosing endcell
$(".input-cell").mouseenter(function (e) {
    if (e.buttons == 1) {
        if (e.pageX < ($(window).width() - 10) && scrollXRStarted) {
            clearInterval(scrollXRInterval);
            scrollXRStarted = false;
        }

        if (e.pageX > 10 && scrollXLStarted) {
            clearInterval(scrollXLInterval);//
            scrollXLStarted = false;
        }
        let [rowId, colId] = getRowCol(this);
        endCell = { "rowId": rowId, "colId": colId };
        selectAllBetweenCells(startCell, endCell);
    }
})

function selectAllBetweenCells(start, end) {
    $(".input-cell.selected").removeClass("selected top-selected bottom-selected left-selected right-selected");
    for (let i = Math.min(start.rowId, end.rowId); i <= Math.max(start.rowId, end.rowId); i++) {
        for (let j = Math.min(start.colId, end.colId); j <= Math.max(start.colId, end.colId); j++) {
            let [topCell, bottomCell, leftCell, rightCell] = getTopLeftBottomRightCell(i, j);
            //(($(`#row-${i}-col-${j}`)this is jquery object[0]this is a node) which is passed to the function select 
            selectCell($(`#row-${i}-col-${j}`)[0], { "ctrlKey": true }, topCell, bottomCell, leftCell, rightCell);
        }
    }
}

let scrollXRInterval;
let scrollXLInterval;
function scrollXR() {
    scrollXRStarted = true;
    scrollXRInterval = setInterval(() => {
        $("#cells").scrollLeft($("#cells").scrollLeft() + 100);
    }, 100);
}


function scrollXL() {
    scrollXLStarted = true;
    //this scrolls our page along left direction by 100px every 100ms
    scrollXLInterval = setInterval(() => {
        $("#cells").scrollLeft($("#cells").scrollLeft() - 100);
    }, 100);
}

$(".data-container").mousemove(function (e) {
    e.preventDefault();
    if (e.buttons == 1) {
        if (e.pageX > ($(window).width() - 10) && !scrollXRStarted) {
            scrollXR();
        } else if (e.pageX < (10) && !scrollXLStarted) {
            scrollXL();
        }
    }
});

//when we raise the mouse than hurl the scroll operation
$(".data-container").mouseup(function (e) {
    //clearInterval se hmara code whi ruk jayega jha hmne click chhoda nhi to pahle page ke end tak pahuch jaa rha tha
    //clearinterval us intereval ko kisi jagah pe rok deta hai jha wo lga hai
    clearInterval(scrollXRInterval);
    clearInterval(scrollXLInterval);
    scrollXRStarted = false;
    scrollXLStarted = false;
});

$(".alignment").click(function (e) {
    //jab alignment pe click kiya to uski data type le aao ki vo left hai right hai ya phir center hai
    let alignment = $(this).attr("data-type");
    //jo alignment pahle se selected tha usse selected class remove karo
    $(".alignment.selected").removeClass("selected");
    //jo alignment ab select hai uspe selected class lga do
    $(this).addClass("selected");
    //selected cell ka alignment header ke according set karo
    $(".input-cell.selected").css("text-align", alignment);
    //jin jin cells ko select kiya tha unka alignment property cellData array of objects me ja ke update kar do
    $(".input-cell.selected").each(function (index, data) {
        let [rowId, colId] = getRowCol(data);
        cellData[rowId - 1][colId - 1].alignment = alignment;
    });
});

$("#bold").click(function (e) {
    setStyle(this, "bold", "font-weight", "bold");
});

$("#italic").click(function (e) {
    setStyle(this, "italic", "font-style", "italic");
});

$("#underlined").click(function (e) {
    setStyle(this, "underlined", "text-decoration", "underline");
});

//same waise hi kiya jaise alignment ka kiya tha aur cellData update kiya
function setStyle(ele, property, key, value) {
    if ($(ele).hasClass("selected")) {
        $(ele).removeClass("selected");
        $(".input-cell.selected").css(key, "");
        $(".input-cell.selected").each(function (index, data) {
            let [rowId, colId] = getRowCol(data);
            cellData[rowId - 1][colId - 1][property] = false;
        });
    } else {
        $(ele).addClass("selected");
        $(".input-cell.selected").css(key, value);
        $(".input-cell.selected").each(function (index, data) {
            let [rowId, colId] = getRowCol(data);
            cellData[rowId - 1][colId - 1][property] = true;
        });
    }
}

//when pickcolor function runs ita intial color #abcd is a color that does not exists we have initialised it with this color because ealier the
//pickcolor box was appearing as soon as we were opening our app but now it opens only when !abcd, allowrecent allows us to add the 5 color which we
//have recently used in the box at the bottom allowcustom color allows us to type the color of our choice in an input box inside pickcolor box
//palette[these are the colors which our present in pickcolor box] when color is selected and it is not equal to ABCD
$(".pick-color").colorPick({
    'initialColor': "#abcd",
    'allowRecent': true,
    'recentMax': 5,
    'allowCustomColor': true,
    'palette': ["#1abc9c", "#16a085", "#2ecc71", "#27ae60", "#3498db", "#2980b9", "#9b59b6", "#8e44ad", "#34495e", "#2c3e50", "#f1c40f", "#f39c12", "#e67e22", "#d35400", "#e74c3c", "#c0392b", "#ecf0f1", "#bdc3c7", "#95a5a6", "#7f8c8d"],
    'onColorSelected': function () {
        if(this.color != "#ABCD") {
            //console.log(this.element.children()) to check;
            if($(this.element.children()[1]).attr("id") == "fill-color") {
                $(".input-cell.selected").css("background-color",this.color);
                $("#fill-color").css("border-bottom",`4px solid ${this.color}`);
            }
            if($(this.element.children()[1]).attr("id") == "text-color") {
                $(".input-cell.selected").css("color",this.color);
                $("#text-color").css("border-bottom",`4px solid ${this.color}`)
            }
        }
    }
});


$("#fill-color").click(function(e) {
    setTimeout(() => {
        $(this).parent().click();
    }, 10);
});

$("#text-color").click(function(e) {
    setTimeout(() => {
        $(this).parent().click();
    }, 10);
});

/*.menuselector me ye sub hua hai*/
/*pahle check kiye ki font type hai ya font size agar font type hai to css property update kari agar font size hai to pahle num me change kiya fir selected cell ki property
update kari aur fir uske index pe cellData pe key:val ke form me reflect kiya */
/*isNan(means if is not a number) and (!isNan mean is a number )it returns true if value is number else return false*/

//we will be giving default value to objects and if that default value change that we will reflect that in array
//sabse pahle aaye celldata intially sheet1 hai bas aur sheet 1 empty hai defaul properties define kari aur initially jo sheet 1 ko for loop me ham default proprerty de rhe the vo hta diya
//hame celldata me sirf changes store karni hai [...defaultproperties] store copy of defaulproperties so celldata me default ki copy aa gyi taki ham
//main defaultproperties me changes na laye
//agar celldata left pe click karne se default properties ke barabar ho gya to ham use delete kar denge celldata bas changes store karta hai

//object.keys row ke ander ki sb keys de dega agar row me koi key nhi hai to row delete kro

//sheet1 se sheet2 jane pe inputcellka innertext empty ho jana chahiye aur uspe default properties lag jani chahiye aur sheet 2 load ho jana chahiye
//addSheet me lastadded sheet se selected class hta ke current selected sheet me lga di
//addevent jab akele call huwa hai sabse pahle to first sheet ke liye call hua hai uske baad function ke ander jo call hua hai wo baki ke sheets ke
//liye hua hai
//${contsiner}.click ham kahi aur click kare to model gayab ho jaye
//events get attached to the element not to the class*/

















//we are importing perfect scrollbar in our javascript
const ps = new PerfectScrollbar("#cells", {
    //the speed of wheel is increased by wheelSpeed
    wheelSpeed: 15
});
//code for creating column number and row number and columns and rows class respectively
for (let i = 1; i <= 100; i++) {
    let str = "";
    let n = i;

    //n>0 when i would be greater than 26 example 27 
    while (n > 0) {
        //in case of 27 rem would be 1 it would go to else
        let rem = n % 26;
        if (rem == 0) {
            str = "Z" + str;
            n = Math.floor(n / 26) - 1;
        } else {
            //str would be A
            str = String.fromCharCode((rem - 1) + 65) + str;
            //n would be 1 and this will again come to else and now str would be 'AA'
            n = Math.floor(n / 26);
        }
    }
    //appended column and row from 1 to 100 in html and they are designed through css
    //and we are also column-${i} means column-1 and id = "A" for column first 
    $("#columns").append(`<div class="column-name column-${i}" id="${str}">${str}</div>`);
    $("#rows").append(`<div class="row-name">${i}</div>`);
}

//this cell data contains only updated data
//initially it contains sheet 1
let cellData = {
    "Sheet1": {}
};
//initially no changes done so it is save
let save = true;
//intial selected sheet is sheet1 
let selectedSheet = "Sheet1";
let totalSheets = 1;
let lastlyAddedSheet = 1;

//initially all cells have these default properties we have
//already given these default properties to cells in css 
let defaultProperties = {
    "font-family": "Noto Sans",
    "font-size": 14,
    "text": "",
    "bold": false,
    "italic": false,
    "underlined": false,
    "alignment": "left",
    "color": "#444",
    "bgcolor": "#fff",
    "formula": "",
    "upStream": [],
    "downStream": [],
};
//appending rows in cells div with each cell say (row-1-col-1) for first cell
for (let i = 1; i <= 100; i++) {
    let row = $('<div class="cell-row"></div>');
    for (let j = 1; j <= 100; j++) {
        row.append(`<div id="row-${i}-col-${j}" class="input-cell" contenteditable="false"></div>`);
    }
    $("#cells").append(row);
}

$("#cells").scroll(function (e) {
    //scroll columns and rows upto what the cells have scrolled
    $("#columns").scrollLeft(this.scrollLeft);
    $("#rows").scrollTop(this.scrollTop);
});

$(".input-cell").dblclick(function (e) {
    //when we double click on a cell than unselect cells that were previously selected and select cell which is now selected and make it editable
    $(".input-cell.selected").removeClass("selected top-selected bottom-selected left-selected right-selected");
    $(this).addClass("selected");
    $(this).attr("contenteditable", "true");
    $(this).focus();
});

//agar maine cell ki value update kari to uske pas koi formula mhi hai example F1=G1+H1 se F1=2 kar diya
$(".input-cell").blur(function (e) {
    //when we click outside cell than content editability gets false and celldata is updated with the text which was written in the cell
    //through updatecell function
    $(this).attr("contenteditable", "false");
    let [rowId, colId] = getRowCol(this);
    if (cellData[selectedSheet][rowId - 1][colId - 1].formula != "") {
        //if F1 = G1+H1 than we will go and update(downstream of F1) and we will empty F1 = []
        //F1 kisi ke upar dependent nhi rahega ab kyuki wo 2 hai isliye uske uptream ko khali kar diya
        updateStreams(this,[]);
    }
    //now formula is nothing
    cellData[selectedSheet][rowId - 1][colId - 1].formula = "";
    updateCellData("text", $(this).text());
    //selfcode = F
    let selfColCode = $(`.column-${colId}`).attr("id");
    //evalFormula(F1)
    evalFormula(selfColCode + rowId);
});

function getRowCol(ele) {
    //ele is a particular input cell get the row and col number of that cell and return that in an array
    let id = $(ele).attr("id");
    let idArray = id.split("-");
    let rowId = parseInt(idArray[1]);
    let colId = parseInt(idArray[3]);
    return [rowId, colId];
}

function getTopLeftBottomRightCell(rowId, colId) {
    //get the ids of topcell bottomcell left and right cell of a particular clicked cell and return them in an array
    //$ means select cell with this row and col where as blue $ inside back ticks is javascript string literal
    let topCell = $(`#row-${rowId - 1}-col-${colId}`);
    let bottomCell = $(`#row-${rowId + 1}-col-${colId}`);
    let leftCell = $(`#row-${rowId}-col-${colId - 1}`);
    let rightCell = $(`#row-${rowId}-col-${colId + 1}`);
    return [topCell, bottomCell, leftCell, rightCell];
}
$(".input-cell").click(function (e) {
    let [rowId, colId] = getRowCol(this);
    let [topCell, bottomCell, leftCell, rightCell] = getTopLeftBottomRightCell(rowId, colId);
    //if the cell was selected earlier and we than clicked on it while pressing ctrl key than run unselectcell function
    if ($(this).hasClass("selected") && e.ctrlKey) {
        unselectCell(this, e, topCell, bottomCell, leftCell, rightCell);
    } else {
        //cell was not selected earlier so we will select cell if clicked
        selectCell(this, e, topCell, bottomCell, leftCell, rightCell);
    }
});

function unselectCell(ele, e, topCell, bottomCell, leftCell, rightCell) {
    if ($(ele).attr("contenteditable") == "false") {
        //if its top class was also selected earlier than bring the bottom border of the top class by removing bottom selected function and similarly for others
        if ($(ele).hasClass("top-selected")) {
            topCell.removeClass("bottom-selected");
        }

        if ($(ele).hasClass("bottom-selected")) {
            bottomCell.removeClass("top-selected");
        }

        if ($(ele).hasClass("left-selected")) {
            leftCell.removeClass("right-selected");
        }

        if ($(ele).hasClass("right-selected")) {
            rightCell.removeClass("left-selected");
        }

        $(ele).removeClass("selected top-selected bottom-selected left-selected right-selected");
    }

}

function selectCell(ele, e, topCell, bottomCell, leftCell, rightCell) {
    if (e.ctrlKey) {

        // top selected or not
         // if top selected of the cell which we have clicked is already clicked or not and for that we first check it top cell actually exist or not
        let topSelected;
        if (topCell) {
            topSelected = topCell.hasClass("selected");
        }

        // bottom selected or not
        let bottomSelected;
        if (bottomCell) {
            bottomSelected = bottomCell.hasClass("selected");
        }


        // left selected or not
        let leftSelected;
        if (leftCell) {
            leftSelected = leftCell.hasClass("selected");
        }

        // right selected or not
        let rightSelected;
        if (rightCell) {
            rightSelected = rightCell.hasClass("selected");
        }

        if (topSelected) {
            $(ele).addClass("top-selected");
            topCell.addClass("bottom-selected");
        }

        if (bottomSelected) {
            $(ele).addClass("bottom-selected");
            bottomCell.addClass("top-selected");
        }

        if (leftSelected) {
            $(ele).addClass("left-selected");
            leftCell.addClass("right-selected");
        }

        if (rightSelected) {
            $(ele).addClass("right-selected");
            rightCell.addClass("left-selected");
        }
    } else {
        //if we havent pressed contol than remove all classes from the previously selected cell and after else we will only add selected class to the new clicked single cell
        $(".input-cell.selected").removeClass("selected top-selected bottom-selected left-selected right-selected");
    }
    //added class selected to cell even if clicked by pressing control key or not
    $(ele).addClass("selected");
    //when we change from one cell to other so the selected alignment at the header also changes as that of cell for example if we were on a cell that was left alignment and now we go to a cell that is right aligned than this should also reflect on the header
    changeHeader(getRowCol(ele));
}


function changeHeader([rowId, colId]) {
    //alignment button ke click pe sabse pahle ye select kar liya konsa alignment karni phir pahle wale cell se hta kar nye selected cell par selected class lga de aur har ek cell se rowID colID nikal ke cellData ko update kar diya
    let data;
     //if celldata exists for a cell than it means there must have been some change in the cell earlier 
    //so we will make a data variable and take celldata properties into it
    if (cellData[selectedSheet][rowId - 1] && cellData[selectedSheet][rowId - 1][colId - 1]) {
        data = cellData[selectedSheet][rowId - 1][colId - 1];
    } else {
        //if no change was done than data will be equal to defaultproperties
        //we are not equating data to the [..defaultproperties] which is equal to copy of defaultproperties object as we are not doing any change in data here we are just retriving some value from data
        //if we had been doing some change in data here than we must have been using copy [..defaultproperties] 
        data = defaultProperties;
    }
    $(".alignment.selected").removeClass("selected");
    $(`.alignment[data-type=${data.alignment}]`).addClass("selected");
    addRemoveSelectFromFontStyle(data, "bold");
    addRemoveSelectFromFontStyle(data, "italic");
    addRemoveSelectFromFontStyle(data, "underlined");
    $("#fill-color").css("border-bottom", `4px solid ${data.bgcolor}`);
    $("#text-color").css("border-bottom", `4px solid ${data.color}`);
    $("#font-family").val(data["font-family"]);
    $("#font-size").val(data["font-size"]);
    $("#font-family").css("font-family", data["font-family"]);
    $("#formula-input").text(data.formula);
}

function addRemoveSelectFromFontStyle(data, property) {
    if (data[property]) {
        //$(this).jquery function
        //$(this) makes jquery element
        $(`#${property}`).addClass("selected");
    } else {
        //agar kisi ke pass koi class nhi hai phir bhi ham htaye to koi fark nhi padta
        $emoveClass("select(`#${property}`).red");
    }
}
//let count = 0;
let count = 0;
let startcellSelected = false;
let startCell = {};
let endCell = {};
//scroll along x axis in right direction
let scrollXRStarted = false;
//scroll along x axis in left direction
let scrollXLStarted = false;
//we are using mousemove to select the first cell
$(".input-cell").mousemove(function (e) {
    //e.preverntdefault() google chrome does not allow to select deselect repidly fastly and a black cursor comes so to overcome it we used preventdefault
    e.preventDefault();
    //if e.buttons == 1 means if we pressed left click and movig the mouse if we pressed right click than e.buttons == 2;
    if (e.buttons == 1) {
        if (e.pageX > ($(window).width() - 10) && !scrollXRStarted) {
            scrollXR();
        } else if (e.pageX < (10) && !scrollXLStarted) {
            scrollXL();
        }
        //hamne jaise hi kisi cell ko left click karke mousemove kiya to fir startcell me us cell ki rowid aur colid le aaye 
        if (!startcellSelected) {
            let [rowId, colId] = getRowCol(this);
            startCell = { "rowId": rowId, "colId": colId };
            //if we haven't done this than our first cell will have selected only after our mouseenter other cell and their selectCellBetween runs
            selectAllBetweenCells(startCell, startCell);
            startcellSelected = true;
            $(".input-cell.selected").attr("contenteditable", "false");
        }
    } else {
        startcellSelected = false;
    }
});

//after selection the first cell our mouse when enters other cell for choosing endcell
$(".input-cell").mouseenter(function (e) {
    if (e.buttons == 1) {
        if (e.pageX < ($(window).width() - 10) && scrollXRStarted) {
            clearInterval(scrollXRInterval);
            scrollXRStarted = false;
        }

        if (e.pageX > 10 && scrollXLStarted) {
            clearInterval(scrollXLInterval);
            scrollXLStarted = false;
        }
        let [rowId, colId] = getRowCol(this);
        endCell = { "rowId": rowId, "colId": colId };
        selectAllBetweenCells(startCell, endCell);
    }
})

function selectAllBetweenCells(start, end) {
    $(".input-cell.selected").removeClass("selected top-selected bottom-selected left-selected right-selected");
    for (let i = Math.min(start.rowId, end.rowId); i <= Math.max(start.rowId, end.rowId); i++) {
        for (let j = Math.min(start.colId, end.colId); j <= Math.max(start.colId, end.colId); j++) {
            let [topCell, bottomCell, leftCell, rightCell] = getTopLeftBottomRightCell(i, j);
            //(($(`#row-${i}-col-${j}`)this is jquery object[0]this is a node) which is passed to the function select
            selectCell($(`#row-${i}-col-${j}`)[0], { "ctrlKey": true }, topCell, bottomCell, leftCell, rightCell);
        }
    }
}

let scrollXRInterval;
let scrollXLInterval;
function scrollXR() {
    scrollXRStarted = true;
    scrollXRInterval = setInterval(() => {
        $("#cells").scrollLeft($("#cells").scrollLeft() + 100);
    }, 100);
}


function scrollXL() {
    scrollXLStarted = true;
    scrollXLInterval = setInterval(() => {
        $("#cells").scrollLeft($("#cells").scrollLeft() - 100);
    }, 100);
}

$(".data-container").mousemove(function (e) {
    e.preventDefault();
    if (e.buttons == 1) {
        if (e.pageX > ($(window).width() - 10) && !scrollXRStarted) {
            scrollXR();
        } else if (e.pageX < (10) && !scrollXLStarted) {
            scrollXL();
        }
    }
});

//when we raise the mouse than hurl the scroll operation
$(".data-container").mouseup(function (e) {
    //clearInterval se hmara code whi ruk jayega jha hmne click chhoda nhi to pahle page ke end tak pahuch jaa rha tha
    //clearinterval us intereval ko kisi jagah pe rok deta hai jha wo lga hai
    clearInterval(scrollXRInterval);
    clearInterval(scrollXLInterval);
    scrollXRStarted = false;
    scrollXLStarted = false;
});

$(".alignment").click(function (e) {
    //jab alignment pe click kiya to uski data type le aao ki vo left hai right hai ya phir center hai
    let alignment = $(this).attr("data-type");
    //jo alignment pahle se selected tha usse selected class remove karo
    $(".alignment.selected").removeClass("selected");
    $(this).addClass("selected");
    $(".input-cell.selected").css("text-align", alignment);
    updateCellData("alignment", alignment);
});

$("#bold").click(function (e) {
    setStyle(this, "bold", "font-weight", "bold");
});

$("#italic").click(function (e) {
    setStyle(this, "italic", "font-style", "italic");
});

$("#underlined").click(function (e) {
    setStyle(this, "underlined", "text-decoration", "underline");
});

function setStyle(ele, property, key, value) {
    if ($(ele).hasClass("selected")) {
        $(ele).removeClass("selected");
        $(".input-cell.selected").css(key, "");
        // $(".input-cell.selected").each(function (index, data) {
        //     let [rowId, colId] = getRowCol(data);
        //     cellData[rowId - 1][colId - 1][property] = false;
        // });
        updateCellData(property, false);
    } else {
        $(ele).addClass("selected");
        $(".input-cell.selected").css(key, value);
        // $(".input-cell.selected").each(function (index, data) {
        //     let [rowId, colId] = getRowCol(data);
        //     cellData[rowId - 1][colId - 1][property] = true;
        // });
        updateCellData(property, true);
    }
}


$(".pick-color").colorPick({
    'initialColor': "#abcd",
    'allowRecent': true,
    'recentMax': 5,
    //'allowCustomColor': true,
    'palette': ["#1abc9c", "#16a085", "#2ecc71", "#27ae60", "#3498db", "#2980b9"],
    'onColorSelected': function () {
        if (this.color != "#ABCD") {
            if ($(this.element.children()[1]).attr("id") == "fill-color") {
                $(".input-cell.selected").css("background-color", this.color);
                $("#fill-color").css("border-bottom", `4px solid ${this.color}`);
                // $(".input-cell.selected").each((index, data) => {
                //     let [rowId, colId] = getRowCol(data);
                //     cellData[rowId - 1][colId - 1].bgcolor = this.color;
                // });
                updateCellData("bgcolor", this.color)
            }
            if ($(this.element.children()[1]).attr("id") == "text-color") {
                $(".input-cell.selected").css("color", this.color);
                $("#text-color").css("border-bottom", `4px solid ${this.color}`);
                // $(".input-cell.selected").each((index, data) => {
                //     let [rowId, colId] = getRowCol(data);
                //     cellData[rowId - 1][colId - 1].color = this.color;
                // });
                updateCellData("color", this.color);
            }
        }
    }
});


$("#fill-color").click(function (e) {
    setTimeout(() => {
        $(this).parent().click();
    }, 10);
});

$("#text-color").click(function (e) {
    setTimeout(() => {
        $(this).parent().click();
    }, 10);
});

$(".menu-selector").change(function (e) {
    let value = $(this).val();
    let key = $(this).attr("id");
    if (key == "font-family") {
        $("#font-family").css(key, value);
    }
    if (!isNaN(value)) {
        value = parseInt(value);
    }

    $(".input-cell.selected").css(key, value);
    // $(".input-cell.selected").each((index, data) => {
    //     let [rowId, colId] = getRowCol(data);
    //     cellData[rowId - 1][colId - 1][key] = value;
    // })
    updateCellData(key, value);
});

function updateCellData(property, value) {
    let currCellData = JSON.stringify(cellData);
    if (value != defaultProperties[property]) {
        $(".input-cell.selected").each(function (index, data) {
            let [rowId, colId] = getRowCol(data);
            if (cellData[selectedSheet][rowId - 1] == undefined) {
                cellData[selectedSheet][rowId - 1] = {};
                cellData[selectedSheet][rowId - 1][colId - 1] = { ...defaultProperties, "upStream": [], "downStream": [] };
                cellData[selectedSheet][rowId - 1][colId - 1][property] = value;
            } else {
                if (cellData[selectedSheet][rowId - 1][colId - 1] == undefined) {
                    cellData[selectedSheet][rowId - 1][colId - 1] = { ...defaultProperties, "upStream": [], "downStream": [] };
                    cellData[selectedSheet][rowId - 1][colId - 1][property] = value;
                } else {
                    cellData[selectedSheet][rowId - 1][colId - 1][property] = value;
                }
            }

        });
    } else {
        $(".input-cell.selected").each(function (index, data) {
            let [rowId, colId] = getRowCol(data);
            if (cellData[selectedSheet][rowId - 1] && cellData[selectedSheet][rowId - 1][colId - 1]) {
                cellData[selectedSheet][rowId - 1][colId - 1][property] = value;
                if (JSON.stringify(cellData[selectedSheet][rowId - 1][colId - 1]) == JSON.stringify(defaultProperties)) {
                    delete cellData[selectedSheet][rowId - 1][colId - 1];
                    if (Object.keys(cellData[selectedSheet][rowId - 1]).length == 0) {
                        delete cellData[selectedSheet][rowId - 1];
                    }
                }
            }
        });
    }
    if (save && currCellData != JSON.stringify(cellData)) {
        save = false;
    }
}
$(".container").click(function (e) {
    $(".sheet-options-modal").remove();
});
function addSheetEvents() {
    $(".sheet-tab.selected").on("contextmenu", function (e) {
        e.preventDefault();
        selectSheet(this);
        $(".sheet-options-modal").remove();
        let modal = $(`<div class="sheet-options-modal">
                        <div class="option sheet-rename">Rename</div>
                        <div class="option sheet-delete">Delete</div>
                    </div>`);
        modal.css({ "left": e.pageX });
        $(".container").append(modal);
        $(".sheet-rename").click(function (e) {
            let renameModal = $(`<div class="sheet-modal-parent">
                                    <div class="sheet-rename-modal">
                                        <div class="sheet-modal-title">Rename Sheet</div>
                                        <div class="sheet-modal-input-container">
                                            <span class="sheet-modal-input-title">Rename Sheet to:</span>
                                            <input class="sheet-modal-input" type="text" />
                                        </div>
                                        <div class="sheet-modal-confirmation">
                                            <div class="button yes-button">OK</div>
                                            <div class="button no-button">Cancel</div>
                                        </div>
                                    </div>
                                </div>`);

            $(".container").append(renameModal);
            $(".sheet-modal-input").focus();
            $(".no-button").click(function (e) {
                $(".sheet-modal-parent").remove();
            });
            $(".yes-button").click(function (e) {
                renameSheet();
            });
            $(".sheet-modal-input").keypress(function (e) {
                if (e.key == "Enter") {
                    renameSheet();
                }
            })
        });

        $(".sheet-delete").click(function (e) {
            if (totalSheets > 1) {
                let deleteModal = $(`<div class="sheet-modal-parent">
                                    <div class="sheet-delete-modal">
                                        <div class="sheet-modal-title">${selectedSheet}</div>
                                        <div class="sheet-modal-detail-container">
                                            <span class="sheet-modal-detail-title">Are you sure?</span>
                                        </div>
                                        <div class="sheet-modal-confirmation">
                                            <div class="button yes-button">
                                                <div class="material-icons delete-icon">delete</div>
                                                Delete
                                            </div>
                                            <div class="button no-button">Cancel</div>
                                        </div>
                                    </div>
                                </div>`);

                $(".container").append(deleteModal);
                $(".no-button").click(function (e) {
                    $(".sheet-modal-parent").remove();
                });
                $(".yes-button").click(function (e) {
                    deleteSheet();
                });
            } else {
                alert("Not possible");
            }
        })
    });

    $(".sheet-tab.selected").click(function (e) {
        selectSheet(this);
    });
}

addSheetEvents();

$(".add-sheet").click(function (e) {
    save = false;
    lastlyAddedSheet++;
    totalSheets++;
    cellData[`Sheet${lastlyAddedSheet}`] = {};
    $(".sheet-tab.selected").removeClass("selected");
    $(".sheet-tab-container").append(`<div class="sheet-tab selected">Sheet${lastlyAddedSheet}</div>`);
    selectSheet();
    addSheetEvents();
    $(".sheet-tab.selected")[0].scrollIntoView();
});

function selectSheet(ele) {
    if (ele && !$(ele).hasClass("selected")) {
        $(".sheet-tab.selected").removeClass("selected");
        $(ele).addClass("selected");
    }
    emptyPreviousSheet();
    selectedSheet = $(".sheet-tab.selected").text();
    loadCurrentSheet();
    $("#row-1-col-1").click();
}

function emptyPreviousSheet() {
    let data = cellData[selectedSheet];
    let rowKeys = Object.keys(data);
    for (let i of rowKeys) {
        let rowId = parseInt(i);
        let colKeys = Object.keys(data[rowId]);
        for (let j of colKeys) {
            let colId = parseInt(j);
            let cell = $(`#row-${rowId + 1}-col-${colId + 1}`);
            cell.text("");
            cell.css({
                "font-family": "NotoSans",
                "font-size": 14,
                "background-color": "#fff",
                "color": "#444",
                "font-weight": "",
                "font-style": "",
                "text-decoration": "",
                "text-align": "left"
            });
        }
    }
}

function loadCurrentSheet() {
    let data = cellData[selectedSheet];
    let rowKeys = Object.keys(data);
    for (let i of rowKeys) {
        let rowId = parseInt(i);
        let colKeys = Object.keys(data[rowId]);
        for (let j of colKeys) {
            let colId = parseInt(j);
            let cell = $(`#row-${rowId + 1}-col-${colId + 1}`);
            cell.text(data[rowId][colId].text);
            cell.css({
                "font-family": data[rowId][colId]["font-family"],
                "font-size": data[rowId][colId]["font-size"],
                "background-color": data[rowId][colId]["bgcolor"],
                "color": data[rowId][colId].color,
                "font-weight": data[rowId][colId].bold ? "bold" : "",
                "font-style": data[rowId][colId].italic ? "italic" : "",
                "text-decoration": data[rowId][colId].underlined ? "underline" : "",
                "text-align": data[rowId][colId].alignment
            });
        }
    }
}

function renameSheet() {
    let newSheetName = $(".sheet-modal-input").val();
    if (newSheetName && !Object.keys(cellData).includes(newSheetName)) {
        save = false;
        let newCellData = {};
        for (let i of Object.keys(cellData)) {
            if (i == selectedSheet) {
                newCellData[newSheetName] = cellData[selectedSheet];
            } else {
                newCellData[i] = cellData[i];
            }
        }

        cellData = newCellData;

        selectedSheet = newSheetName;
        $(".sheet-tab.selected").text(newSheetName);
        $(".sheet-modal-parent").remove();
    } else {
        $(".rename-error").remove();
        $(".sheet-modal-input-container").append(`
            <div class="rename-error"> Sheet Name is not valid or Sheet already exists! </div>
        `)
    }
}

function deleteSheet() {
    $(".sheet-modal-parent").remove();
    let sheetIndex = Object.keys(cellData).indexOf(selectedSheet);
    let currSelectedSheet = $(".sheet-tab.selected");
    if (sheetIndex == 0) {
        selectSheet(currSelectedSheet.next()[0]);
    } else {
        selectSheet(currSelectedSheet.prev()[0]);
    }
    delete cellData[currSelectedSheet.text()];
    currSelectedSheet.remove();
    totalSheets--;
}

$(".left-scroller,.right-scroller").click(function (e) {
    let keysArray = Object.keys(cellData);
    let selectedSheetIndex = keysArray.indexOf(selectedSheet);
    if (selectedSheetIndex != 0 && $(this).text() == "arrow_left") {
        selectSheet($(".sheet-tab.selected").prev()[0]);
    } else if (selectedSheetIndex != (keysArray.length - 1) && $(this).text() == "arrow_right") {
        selectSheet($(".sheet-tab.selected").next()[0]);
    }

    $(".sheet-tab.selected")[0].scrollIntoView();
});

$("#menu-file").click(function (e) {
    let fileModal = $(`<div class="file-modal">
                        <div class="file-options-modal">
                            <div class="close">
                                <div class="material-icons close-icon">arrow_circle_down</div>
                                <div>Close</div>
                            </div>
                            <div class="new">
                                <div class="material-icons new-icon">insert_drive_file</div>
                                <div>New</div>
                            </div>
                            <div class="open">
                                <div class="material-icons open-icon">folder_open</div>
                                <div>Open</div>
                            </div>
                            <div class="save">
                                <div class="material-icons save-icon">save</div>
                                <div>Save</div>
                            </div>
                        </div>
                        <div class="file-recent-modal"></div>
                        <div class="file-transparent"></div>
                    </div>`);
    $(".container").append(fileModal);
    fileModal.animate({
        width: "100vw"
    }, 300);
    $(".close,.file-transparent,.new,.save,.open").click(function (e) {
        fileModal.animate({
            width: "0vw"
        }, 300);
        setTimeout(() => {
            fileModal.remove();
        }, 250);
    });
    $(".new").click(function (e) {
        if (save) {
            newFile();
        } else {
            $(".container").append(`<div class="sheet-modal-parent">
                                        <div class="sheet-delete-modal">
                                            <div class="sheet-modal-title">${$(".title").text()}</div>
                                            <div class="sheet-modal-detail-container">
                                                <span class="sheet-modal-detail-title">Do you want to save changes?</span>
                                            </div>
                                            <div class="sheet-modal-confirmation">
                                                <div class="button yes-button">
                                                    Yes
                                                </div>
                                                <div class="button no-button">No</div>
                                            </div>
                                        </div>
                                    </div>`);
            $(".no-button").click(function (e) {
                $(".sheet-modal-parent").remove();
                newFile();
            });
            $(".yes-button").click(function (e) {
                $(".sheet-modal-parent").remove();
                saveFile(true);
            });
        }
    });
    $(".save").click(function (e) {
        if (!save) {
            saveFile();
        }
    });

    $(".open").click(function (e) {
        openFile();
    })

});

function newFile() {
    emptyPreviousSheet();
    cellData = { "Sheet1": {} };
    $(".sheet-tab").remove();
    $(".sheet-tab-container").append(`<div class="sheet-tab selected">Sheet1</div>`);
    addSheetEvents();
    selectedSheet = "Sheet1";
    totalSheets = 1;
    lastlyAddedSheet = 1;
    $(".title").text("Excel - Book");
    $("#row-1-col-1").click();
}

function saveFile(newClicked) {
    $(".container").append(`<div class="sheet-modal-parent">
                                <div class="sheet-rename-modal">
                                    <div class="sheet-modal-title">Save File</div>
                                    <div class="sheet-modal-input-container">
                                        <span class="sheet-modal-input-title">File Name:</span>
                                        <input class="sheet-modal-input" value="${$(".title").text()}" type="text" />
                                    </div>
                                    <div class="sheet-modal-confirmation">
                                        <div class="button yes-button">Save</div>
                                        <div class="button no-button">Cancel</div>
                                    </div>
                                </div>
                            </div>`);
    $(".yes-button").click(function (e) {
        $(".title").text($(".sheet-modal-input").val());
        let a = document.createElement("a");
        a.href = `data:application/json,${encodeURIComponent(JSON.stringify(cellData))}`;
        a.download = $(".title").text() + ".json";
        $(".container").append(a);
        a.click();
        // a.remove();
        save = true;

    });
    $(".no-button,.yes-button").click(function (e) {
        $(".sheet-modal-parent").remove();
        if (newClicked) {
            newFile();
        }
    });
}

function openFile() {
    let inputFile = $(`<input accept="application/json" type="file" />`);
    $(".container").append(inputFile);
    inputFile.click();
    inputFile.change(function (e) {
        console.log(inputFile.val());
        let file = e.target.files[0];
        $(".title").text(file.name.split(".json")[0]);
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            emptyPreviousSheet();
            $(".sheet-tab").remove();
            cellData = JSON.parse(reader.result);
            let sheets = Object.keys(cellData);
            lastlyAddedSheet = 1;
            for (let i of sheets) {
                if (i.includes("Sheet")) {
                    let splittedSheetArray = i.split("Sheet");
                    if (splittedSheetArray.length == 2 && !isNaN(splittedSheetArray[1])) {
                        lastlyAddedSheet = parseInt(splittedSheetArray[1]);
                    }
                }
                $(".sheet-tab-container").append(`<div class="sheet-tab selected">${i}</div>`);
            }
            addSheetEvents();
            $(".sheet-tab").removeClass("selected");
            $($(".sheet-tab")[0]).addClass("selected");
            selectedSheet = sheets[0];
            totalSheets = sheets.length;
            loadCurrentSheet();
            inputFile.remove();
        }
    });
}

let clipboard = { startCell: [], cellData: {} };
let contentCutted = false;
$("#cut,#copy").click(function (e) {
    if ($(this).text() == "content_cut") {
        contentCutted = true;
    }
    clipboard = { startCell: [], cellData: {} };
    clipboard.startCell = getRowCol($(".input-cell.selected")[0]);
    $(".input-cell.selected").each(function (index, data) {
        let [rowId, colId] = getRowCol(data);
        if (cellData[selectedSheet][rowId - 1] && cellData[selectedSheet][rowId - 1][colId - 1]) {
            if (!clipboard.cellData[rowId]) {
                clipboard.cellData[rowId] = {};
            }
            clipboard.cellData[rowId][colId] = { ...cellData[selectedSheet][rowId - 1][colId - 1] };
        }
    });
    console.log(clipboard);
});

$("#paste").click(function (e) {
    if (contentCutted) {
        emptyPreviousSheet();
    }
    let startCell = getRowCol($(".input-cell.selected")[0]);
    let rows = Object.keys(clipboard.cellData);
    for (let i of rows) {
        let cols = Object.keys(clipboard.cellData[i]);
        for (let j of cols) {
            if (contentCutted) {
                delete cellData[selectedSheet][i - 1][j - 1];
                if (Object.keys(cellData[selectedSheet][i - 1]).length == 0) {
                    delete cellData[selectedSheet][i - 1];
                }
            }

        }
    }
    for (let i of rows) {
        let cols = Object.keys(clipboard.cellData[i]);
        for (let j of cols) {
            let rowDistance = parseInt(i) - parseInt(clipboard.startCell[0]);
            let colDistance = parseInt(j) - parseInt(clipboard.startCell[1]);
            if (!cellData[selectedSheet][startCell[0] + rowDistance - 1]) {
                cellData[selectedSheet][startCell[0] + rowDistance - 1] = {};
            }
            cellData[selectedSheet][startCell[0] + rowDistance - 1][startCell[1] + colDistance - 1] = { ...clipboard.cellData[i][j] };
        }
    }
    loadCurrentSheet();
    if (contentCutted) {
        contentCutted = false;
        clipboard = { startCell: [], cellData: {} };
    }
});

$("#formula-input").blur(function (e) {
    if ($(".input-cell.selected").length > 0) {
        let formula = $(this).text();
        let tempElements = formula.split(" ");
        let elements = [];
        for (let i of tempElements) {
            if (i.length >= 2) {
                i = i.replace("(", "");
                i = i.replace(")", "");
                if (!elements.includes(i)) {
                    elements.push(i);
                }
            }
        }
        $(".input-cell.selected").each(function (index, data) {
            if (updateStreams(data, elements, false)) {
                let [rowId, colId] = getRowCol(data);
                //i am updating new formula we need to run evalformula
                cellData[selectedSheet][rowId - 1][colId - 1].formula = formula;
                let selfColCode = $(`.column-${colId}`).attr("id");
                evalFormula(selfColCode + rowId);
            } else {
                alert("Formula is not valid");
            }
        })
    } else {
        alert("!Please select a cell First");
    }
});

function updateStreams(ele, elements, update, oldUpstream) {
    let [rowId, colId] = getRowCol(ele);
    //i find out selfcode if i am A1 B1 C1 aur what(in my rough copy example i am B1)
    let selfColCode = $(`.column-${colId}`).attr("id");
    //than i checked that if i exist in elements(element is the upcoming upstream in rough copy i.e (D1E1)) if i exist i returned false
    if (elements.includes(selfColCode + rowId)) {
        return false;
    }
    //than i checked if my downstream exists(in rough copy A1)
    if (cellData[selectedSheet][rowId - 1] && cellData[selectedSheet][rowId - 1][colId - 1]) {
        let downStream = cellData[selectedSheet][rowId - 1][colId - 1].downStream;
        let upStream = cellData[selectedSheet][rowId - 1][colId - 1].upStream;
        //now i checked that my downstream is also not in element(i.e upcoming upstream)(in rough copy i checked that A1 is not in D1E1)
        for (let i of downStream) {
            if (elements.includes(i)) {
                return false;
            }
        }
        for (let i of downStream) {
            //find the column and row of downstream and recursively calling the updateStreams function to update downstream (in rough copy A1 U (D1E1))
            let [calRowId, calColId] = codeToValue(i);
            console.log(updateStreams($(`#row-${calRowId}-col-${calColId}`)[0], elements, true, upStream));
        }
    }
    
    //now we will update self(in rough copy B1 U (D1E1))
    //if cell row is empty
    if (!cellData[selectedSheet][rowId - 1]) {
        cellData[selectedSheet][rowId -1]={};
        //than cell column is also empty so we will make the cell row and give the columns defaulproperties
        cellData[selectedSheet][rowId - 1][colId - 1] = { ...defaultProperties, "upStream": [...elements], "downStream": [] };
    } else if (!cellData[selectedSheet][rowId - 1][colId - 1]) {
        cellData[selectedSheet][rowId - 1][colId - 1] = { ...defaultProperties, "upStream": [...elements], "downStream": [] };
    } else {
        //if there exists something from before in self (example in rough we have taken two senario one in which update took place than 
        let upStream = [...cellData[selectedSheet][rowId - 1][colId - 1].upStream];
        if (update) {
            //traverse through the downstream of B (that are D1 E1 and F1 in rough copy)
            for (let i of oldUpstream) {
                let [calRowId, calColId] = codeToValue(i);
                //D1 E1 and F1 me index nikala B1 ka 
                let index = cellData[selectedSheet][calRowId - 1][calColId - 1].downStream.indexOf(selfColCode + rowId);
                //delete myself from downstreams(in rough copy delete B1 from D1 E1 F1)
                cellData[selectedSheet][calRowId - 1][calColId - 1].downStream.splice(index, 1);
                //agar B1 delete hone ke baad D1 E1 and F1 defaultproperties ke equal ho jata hai to mai celdata ka column delete kar deta hu
                if (JSON.stringify(cellData[selectedSheet][calRowId - 1][calColId - 1]) == JSON.stringify(defaultProperties)) {
                    delete cellData[selectedSheet][calRowId - 1][calColId - 1];
                    //agar column delete karne ke baad row empty bachti hai to row bhi delete kar deta hu
                    if (Object.keys(cellData[selectedSheet][calRowId - 1]).length == 0) {
                        delete cellData[selectedSheet][calRowId - 1];
                    }
                }
                //upstream me se purani upstream delete karna hai means remove D1 E1 from BU[D1E1]
                index = cellData[selectedSheet][rowId - 1][colId - 1].upStream.indexOf(i);
                cellData[selectedSheet][rowId - 1][colId - 1].upStream.splice(index, 1);
            }
            //now push new elements to upstream (push C1 E1 TO B as BU(C1E1))
            for (let i of elements) {
                cellData[selectedSheet][rowId - 1][colId - 1].upStream.push(i);
            }
        } else {
            for (let i of upStream) {
                let [calRowId, calColId] = codeToValue(i);
                let index = cellData[selectedSheet][calRowId - 1][calColId - 1].downStream.indexOf(selfColCode + rowId);
                cellData[selectedSheet][calRowId - 1][calColId - 1].downStream.splice(index, 1);
                if (JSON.stringify(cellData[selectedSheet][calRowId - 1][calColId - 1]) == JSON.stringify(defaultProperties)) {
                    delete cellData[selectedSheet][calRowId - 1][calColId - 1];
                    if (Object.keys(cellData[selectedSheet][calRowId - 1]).length == 0) {
                        delete cellData[selectedSheet][calRowId - 1];
                    }
                }
            }
            cellData[selectedSheet][rowId - 1][colId - 1].upStream = [...elements];
        }
    }
    //now we pushed the valued of B1 in C1 and E1 as C1 D B1 and E1 D B1 
    for (let i of elements) {
        let [calRowId, calColId] = codeToValue(i);
        if (!cellData[selectedSheet][calRowId - 1]) {
            cellData[selectedSheet][calRowId - 1] = {};
            cellData[selectedSheet][calRowId - 1][calColId - 1] = { ...defaultProperties, "upStream": [], "downStream": [selfColCode + rowId] };
        } else if (!cellData[selectedSheet][calRowId - 1][calColId - 1]) {
            cellData[selectedSheet][calRowId - 1][calColId - 1] = { ...defaultProperties, "upStream": [], "downStream": [selfColCode + rowId] };
        } else {
            cellData[selectedSheet][calRowId - 1][calColId - 1].downStream.push(selfColCode + rowId);
        }
    }
    console.log(cellData);
    return true;

}

function codeToValue(code) {
    let colCode = "";
    let rowCode = "";
    for (let i = 0; i < code.length; i++) {
        if (!isNaN(code.charAt(i))) {
            rowCode += code.charAt(i);
        } else {
            colCode += code.charAt(i);
        }
    }
    let colId = parseInt($(`#${colCode}`).attr("class").split(" ")[1].split("-")[1]);
    let rowId = parseInt(rowCode);
    return [rowId, colId];
}
//to calculate formula
//in rough we are calculating the formula of A1 -> B1+C1
function evalFormula(cell) {
    //cell is A1
    let [rowId, colId] = codeToValue(cell);
    let formula = cellData[selectedSheet][rowId - 1][colId - 1].formula;
    console.log(formula);
    if (formula != "") {
        //agar formula khali nhi hai
        //find upstream here we have(B1 C1)
        let upStream = cellData[selectedSheet][rowId - 1][colId - 1].upStream;
        let upStreamValue = [];
        //traverse through upstream
        for (let i in upStream) {
            //find row id and col id of B1 and C1
            let [calRowId, calColId] = codeToValue(upStream[i]);
            let value;
            if (cellData[selectedSheet][calRowId - 1][calColId - 1].text == "") {
                value = "0";
            }
            //if text is not empty find their value from text
             else {
                value = cellData[selectedSheet][calRowId - 1][calColId - 1].text;
            }
            upStreamValue.push(value);
            console.log(upStreamValue);
            //replace formula by value (if it was B1(1) + C1(2) than replaced by 1+2)
            formula = formula.replace(upStream[i], upStreamValue[i]);
        }
        //replace the cell of A1 from text to calculated value of (1+2) i.e (2)
        cellData[selectedSheet][rowId - 1][colId - 1].text = eval(formula);
        loadCurrentSheet();
    }
    //ab downstream pe ulta loop chalaya aur recursion kiya in copy (F1DA1B1)
    let downStream = cellData[selectedSheet][rowId - 1][colId - 1].downStream;
    for (let i = downStream.length - 1; i >= 0; i--) {
        evalFormula(downStream[i]);
    }

}
